<template>
  <section @click="handleClick" class="mb-5 mb-lg-0 w-100 h-100" ref="mapSvg">
    <!-- 地圖無rwd -->
    <!-- <section @click="handleClick" class="mb-5 mb-lg-0> -->
    <!-- <svg width="700" height="600"></svg> -->

    <!-- 地圖有rwd -->
    <svg id="svg" class="w-100" height="550"></svg>
  </section>
</template>

<script>
import * as d3 from "d3";

// 定義好的 store 賦值給變數 useSelectVoteStore
// 在元件中引入並呼叫 useSelectVoteStore() 來訪問 store
import { useSelectVoteStore } from "../components/VotesDataStore.js";

export default {
  data() {
    return {
      // 指定 GeoJSON 檔案(全台各地區經緯度)的路徑
      geoJSONFile:
        "taiwan.json",
      isRightAsideVisible: false,
      clickMapCity: {},
    };
  },
  mounted() {
    this.map();
  },
  methods: {
    map() {
      d3.json(this.geoJSONFile)
        .then((data) => {
          // 讀取 GeoJSON 資料
          // console.log(data);
          const geometries = data;
          this.drawMap(geometries);
          this.voteCsv();
        })
        .catch((error) => {
          // 處理錯誤情況
          console.error("Error loading GeoJSON file:", error);
        });
    },
    drawMap(geometries) {
      // 取得 SVG 元素的寬高(數值取整數給mercatorScale用)
      const width = this.$refs.mapSvg.offsetWidth.toFixed();
      const height = this.$refs.mapSvg.offsetHeight.toFixed();

      // 取整個螢幕寬度並判斷要給mercatorScale多少放大值
      let mercatorScale,
        w = window.screen.width;
      if (w > 1366) {
        mercatorScale = 7300;
      } else if (w <= 1366 && w > 480) {
        mercatorScale = 7000;
      } else {
        mercatorScale = 6000;
      }
      // console.log(w);

      // 地圖無rwd
      // let svg = d3.select("svg");
      // 地圖有rwd
      let svg = d3
        .select('#svg')
        .attr("viewBox", `0 0 ${width} ${height}`);

      // const g = svg.append("g");
      // let projection = d3.geoMercator().center([121, 24]).scale(8000);

      let projection = d3
        .geoMercator()
        .center([121, 24])
        .scale(mercatorScale)
        .translate([width / 2, height / 2.5]);

        // console.log(mercatorScale);

      // 兩種寫法都可
      // let path = d3.geoPath(projection);
      let path = d3.geoPath().projection(projection);

      // const paths = g.selectAll("path").data(geometries.features);
      const paths = svg.selectAll("path").data(geometries.features);
      paths
        .enter()
        .append("path")
        .attr("d", path)
        .attr("class", "county")
        .merge(paths) // 合併新創建的和已經存在的元素
        // 加上簡易版本 tooltip
        .append("title")
        .text((d) => d.properties["COUNTYNAME"]);
    },

    voteCsv() {
      d3.csv("/2023-thef2e/總統全台縣市經緯對應得票數一覽表.csv")
        .then((data) => {
          // 讀取 csv 檔案
          // console.log(data);
          const csv = data;
          this.drawVote(csv);
        })
        .catch((error) => {
          // 處理錯誤情況
          console.error("Error loading csv file:", error);
        });
    },
    drawVote(csv) {
      // 將 csv 資料轉換成以縣市別為 key 的物件，方便後續查找
      const voteData = {};
      // 在 .forEach 迴圈中添加屬性
      csv.forEach((row) => {
        const adminCity = row["縣市別"];
        voteData[adminCity] = {
          effectiveVotes: row["有效票數"],
          partisanGroup1: row["(1)宋楚瑜&余湘"],
          partisanGroup2: row["(2)韓國瑜&張善政"],
          partisanGroup3: row["(3)蔡英文&賴清德"],
        };
      });
      // console.log(voteData);

      this.clickMapCity = voteData;

      // 更新 <title> 元素的文字內容
      const paths = d3.selectAll(".county");

      paths
        .selectAll("title")
        .text((d) => {
          const adminCity = d.properties["COUNTYNAME"];
          const voteInfo = voteData[adminCity];
          return `縣市別：${adminCity}\n有效票數：${
            voteInfo ? voteInfo.effectiveVotes : "N/A"
          }\n(1)宋楚瑜&余湘：${voteInfo.partisanGroup1} 票\n(2)韓國瑜&張善政：${
            voteInfo.partisanGroup2
          } 票\n(3)蔡英文&賴清德：${voteInfo.partisanGroup3} 票`;
        })
        .on("click", (event) => this.handleClick(event));
    },
    handleClick(event) {
      // console.log(event);
      // const feature = event.target.__data__;
      // console.log(feature);
      const titleContent = event.target.querySelector("title").textContent;
      // console.log(this.clickMapCity);
      // console.log(titleContent);
      const lines = titleContent.split("\n");
      // console.log("lines:", lines);

      // 從拆分後的內容中獲取相應的資訊
      const adminCity = lines[0].split("：")[1].trim();
      const effectiveVotes = lines[1].split("：")[1].trim();
      const partisanGroup1 = lines[2].split("：")[1].trim();
      const partisanGroup2 = lines[3].split("：")[1].trim();
      const partisanGroup3 = lines[4].split("：")[1].trim();
      const numEffectiveVotes = parseInt(effectiveVotes.replace(/,/g, ""), 10);
      const numPartisanGroup1 = parseInt(partisanGroup1.replace(/,/g, ""), 10);
      const numPartisanGroup2 = parseInt(partisanGroup2.replace(/,/g, ""), 10);
      const numPartisanGroup3 = parseInt(partisanGroup3.replace(/,/g, ""), 10);

      const partisanGroup1Rate =
        ((numPartisanGroup1 / numEffectiveVotes) * 100).toFixed(2) + "%";

      const partisanGroup2Rate =
        ((numPartisanGroup2 / numEffectiveVotes) * 100).toFixed(2) + "%";

      const partisanGroup3Rate =
        ((numPartisanGroup3 / numEffectiveVotes) * 100).toFixed(2) + "%";

      // 點擊地圖時觸發，傳遞變數給父層，讓右側第一個<aside>數據表切換成顯示
      this.$emit("updateIsVisible", {
        firstIsVisible: !this.isRightAsideVisible,
        SecondIsVisible: false,
        ThirdIsVisible: false,
      });

      // 調用 Pinia store 中的 action 來更新狀態
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
    },
  },
};
</script>
