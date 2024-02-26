<template>
  <form class="d-flex mb-5 mb-lg-8">
    <div class="selectArea-Block d-lg-flex me-3 me-lg-5">
      <div class="mb-2 mb-lg-0 me-lg-5">
        <select
          class="form-select form-select-lg fs-7 lh-bases"
          aria-label="form-select-lg example"
          name="縣市"
          id="city"
          @change="selectCityChange"
          v-model="selectCity"
        >
          <option value="" disabled selected>請選擇縣市</option>
          <option v-for="item in cities" :key="item">{{ item }}</option>
        </select>
      </div>
      <div class="d-flex">
        <select
          class="form-select form-select-lg fs-7 lh-bases me-3 me-lg-5"
          aria-label="form-select-lg example"
          name="行政區"
          id="county"
          @change="selectCountyChange"
          v-model="selectCounty"
          :disabled="countyListDisabled"
        >
          <option value="" disabled selected>請選擇行政區</option>
          <option v-for="item in counties" :key="item">{{ item }}</option>
        </select>
        <select
          class="form-select form-select-lg fs-7 lh-bases"
          aria-label="form-select-lg example"
          name="鄉鎮里"
          id="township"
          @change="selectTownshipChange"
          v-model="selectTownship"
          :disabled="townshipListDisabled"
        >
          <option value="" disabled selected>請選擇鄉鎮里</option>
          <option v-for="item in townships" :key="item">{{ item }}</option>
        </select>
      </div>
    </div>
    <button class="btn lh-bases d-lg-none py-1">
      <img src="../assets/img/rotate-cw.svg" alt="清除icon" />
    </button>
    <button
      class="btn lh-bases d-none d-lg-flex align-items-center py-1"
      @click="clearDropDown()"
    >
      清除
      <img src="../assets/img/rotate-cw.svg" alt="清除icon" class="ms-3" />
    </button>
  </form>
</template>

<script>
import * as XLSX from "xlsx";
import axios from "axios";

// 定義好的 store 賦值給變數 useSelectVoteStore
// 在元件中引入並呼叫 useSelectVoteStore() 來訪問 store
import { useSelectVoteStore } from "../components/VotesDataStore.js";

export default {
  data() {
    return {
      cities: [],
      counties: [],
      townships: [],
      // 第一個工作頁籤的資料
      initSelectVoteData: [],
      // 使用者篩選條件對應的頁籤資料
      cityData: null,
      countyData: null,
      // 使用者選的項目值，做為篩選條件去取得EXCEL資料
      selectCity: "",
      selectCounty: "",
      selectTownship: "",
      // 控制行政區、鄉鎮里選單是否可以操作。true不可操作
      countyListDisabled: true,
      townshipListDisabled: true,
      workbook: null,
      isRightAsideVisible: false,
      isRightAsideVisible2: false,
      isRightAsideVisible3: false,
    };
  },
  mounted() {
    this.readExcelFile();
  },
  methods: {
    readExcelFile() {
      const vm = this; // 使用參考保存 Vue 實例的上下文

      function fetchCityData() {
        return new Promise((resolve, reject) => {
          // 讀取 Excel 檔案
          axios
            .get("/2023-thef2e/各縣市區里投票所得票明細(整理).xlsx", {
              // Axios 將回應的數據視為二進制數據
              responseType: "arraybuffer",
            })
            .then((response) => {
              const workbook = XLSX.read(response.data);
              vm.workbook = workbook;
              resolve(workbook);
            })
            .catch((error) => {
              reject(error);
            });
        });
      }

      // 使用 Promise 的 then 和 catch 處理非同步操作
      fetchCityData()
        .then((workbook) => {
          // 獲取第一個工作頁籤表名稱
          const sheetName = workbook.SheetNames[0];

          // 獲取第一個工作頁籤表
          const mainWorksheet = workbook.Sheets[sheetName];

          // 將該工作頁籤表的 Excel 資料轉換為 JSON 格式
          const jsonData = XLSX.utils.sheet_to_json(mainWorksheet);
          this.initSelectVoteData = jsonData;
          // console.log(jsonData);

          // 獲取縣市資料
          const cities = jsonData.map((row) => row["縣市別"]);

          // 將縣市名稱當清單設置到組件的data屬性中
          this.cities = cities;
          // console.log(cities);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },
    selectCityChange() {
      let selectVoteData = {};
      selectVoteData = this.initSelectVoteData.filter(
        (row) => row["縣市別"] === this.selectCity
      );
      // console.log(selectVoteData);

      // 改變"縣市"時，把其餘兩個欄位恢復預設值。處理當使用者回頭變更"縣市"情況
      this.selectCounty = "";
      this.selectTownship = "";

      // 處理"行政區"、"鄉鎮里"下拉選單是否允許操作
      if (this.selectCity !== "全台縣市") {
        this.countyListDisabled = false;
        // 處理使用者回頭更改下拉選單項目情境
        this.townshipListDisabled = true;
      } else {
        // 處理使用者回頭更改下拉選單項目情境
        this.countyListDisabled = true;
        this.townshipListDisabled = true;
      }

      this.sumCityData(selectVoteData);

      // 產生"行政區"下拉選單項目
      // 找出 workbook 中有名為 selectCity 的頁籤
      const cityWorksheet = this.workbook.Sheets[this.selectCity];

      // 獲取該頁籤的資料
      const cityData = XLSX.utils.sheet_to_json(cityWorksheet);

      // 將取得的縣市頁籤資料設置到組件的 data 屬性中
      this.cityData = cityData;

      // 獲取行政區的名稱(不重複)
      const countiesSet = new Set(cityData.map((row) => row["行政區別"]));

      // 將行政區名稱當清單設置到組件的 data 屬性中
      this.counties = Array.from(countiesSet);

      // console.log(this.counties);
    },
    selectCountyChange() {
      // 改變"行政區"時，把"鄉鎮里"欄位恢復預設值。處理當使用者回頭變更"行政區"情況
      this.selectTownship = "";
      // 處理"鄉鎮里"下拉選單是否允許操作：當"行政區"有值就開放"鄉鎮里"下拉選單操作
      if (this.selectCounty !== null) {
        this.townshipListDisabled = false;

        // 產生"鄉鎮里"下拉選單項目
        let selectVoteData = this.cityData.filter(
          (row) => row["行政區別"] === this.selectCounty
        );
        // console.log(selectVoteData);

        this.countyData = selectVoteData;

        const townshipSet = new Set(
          selectVoteData.map((row) => row["鄉鎮里別"])
        );

        // 將鄉鎮里名稱當清單設置到組件的 data 屬性中
        this.townships = Array.from(townshipSet);

        this.selectTownshipChange();
      }
    },
    selectTownshipChange() {
      if (this.selectTownship === "") {
        let selectVoteData = this.countyData.filter(
          (row) => row["鄉鎮里別"] === "全"
        );
        // console.log(selectVoteData);
        this.sumCountyData(selectVoteData);
      } else {
        let selectVoteData = this.countyData.filter(
          (row) => row["鄉鎮里別"] === this.selectTownship
        );
        // console.log(selectVoteData);

        this.sumTownshipData(selectVoteData);
      }
    },
    clearDropDown() {
      this.selectCity = "";
      this.selectCounty = "";
      this.selectTownship = "";
      this.countyListDisabled = true;
      this.townshipListDisabled = true;
    },

    sumData(data, targetType) {
      let effectiveVotes = 0;
      let partisanGroup1 = 0;
      let partisanGroup2 = 0;
      let partisanGroup3 = 0;
      let partisanGroup1Rate = 0;
      let partisanGroup2Rate = 0;
      let partisanGroup3Rate = 0;
      let adminCity = "";
      data.forEach(function (item) {
        effectiveVotes += item["有效票數"];
        partisanGroup1 += item["(1)宋楚瑜&余湘"];
        partisanGroup2 += item["(2)韓國瑜&張善政"];
        partisanGroup3 += item["(3)蔡英文&賴清德"];
      });
      partisanGroup1Rate =
        ((partisanGroup1 / effectiveVotes) * 100).toFixed(2) + "%";

      partisanGroup2Rate =
        ((partisanGroup2 / effectiveVotes) * 100).toFixed(2) + "%";

      partisanGroup3Rate =
        ((partisanGroup3 / effectiveVotes) * 100).toFixed(2) + "%";

      partisanGroup1 = partisanGroup1.toLocaleString() + " " + "票";
      partisanGroup2 = partisanGroup2.toLocaleString() + " " + "票";
      partisanGroup3 = partisanGroup3.toLocaleString() + " " + "票";

      // console.log(effectiveVotes);
      // console.log(partisanGroup1);
      // console.log(partisanGroup2);
      // console.log(partisanGroup3);
      // console.log(partisanGroup1Rate);
      // console.log(partisanGroup2Rate);
      // console.log(partisanGroup3Rate);

      adminCity =
        this.selectCity + " " + this.selectCounty + " " + this.selectTownship;
      // console.log(adminCity);

      // 調用 Pinia store 中的 action 來更新狀態
      switch (targetType) {
        case "city":
          useSelectVoteStore().updateClickCity({
            adminCity,
            effectiveVotes,
            partisanGroup1,
            partisanGroup2,
            partisanGroup3,
            partisanGroup1Rate,
            partisanGroup2Rate,
            partisanGroup3Rate,
          });
          break;
        case "county":
          useSelectVoteStore().updateClickCounty({
            adminCity,
            effectiveVotes,
            partisanGroup1,
            partisanGroup2,
            partisanGroup3,
            partisanGroup1Rate,
            partisanGroup2Rate,
            partisanGroup3Rate,
          });
          break;
        case "township":
          useSelectVoteStore().updateClickTownship({
            adminCity,
            effectiveVotes,
            partisanGroup1,
            partisanGroup2,
            partisanGroup3,
            partisanGroup1Rate,
            partisanGroup2Rate,
            partisanGroup3Rate,
          });
          break;
        default:
          break;
      }
    },

    sumCityData(data) {
      this.sumData(data, "city");
      // 只選"縣市"值，傳遞變數給父層，讓右側第一個<aside>數據表切換成顯示
      this.$emit("updateIsVisible", {
        firstIsVisible: !this.isRightAsideVisible,
        SecondIsVisible: this.isRightAsideVisible2,
        ThirdIsVisible: this.isRightAsideVisible3,
      });
    },

    sumCountyData(data) {
      this.sumData(data, "county");
      // 選了"縣市"、"行政區"值，傳遞變數給父層，讓右側第一、二個<aside>數據表切換成顯示
      this.$emit("updateIsVisible", {
        firstIsVisible: !this.isRightAsideVisible,
        SecondIsVisible: !this.isRightAsideVisible2,
        ThirdIsVisible: this.isRightAsideVisible3,
      });
    },

    sumTownshipData(data) {
      this.sumData(data, "township");
      // 選完三個欄位值，傳遞變數給父層，讓右側三個<aside>數據表切換成顯示
      this.$emit("updateIsVisible", {
        firstIsVisible: !this.isRightAsideVisible,
        SecondIsVisible: !this.isRightAsideVisible2,
        ThirdIsVisible: !this.isRightAsideVisible3,
      });
    },
  },
};
</script>
