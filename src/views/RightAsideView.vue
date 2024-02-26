<template>
  <!-- 預設畫面顯示小提示區塊 -->
  <aside
    v-if="!isRightAsideVisible"
    class="rightSide d-flex justify-content-center d-lg-block"
  >
    <ul class="p-5 hint rounded-3 me-5 me-lg-0 mb-lg-5">
      <li class="d-flex align-items-center mb-3">
        <img src="../assets/img/info.svg" alt="驚嘆號提示icon" class="me-3" />
        <p class="fs-5 lh-sms fw-semibold">小提示</p>
      </li>
      <li class="hintContent-block1">點擊選擇縣市、區、村里，可查看選舉結果</li>
      <li class="hintLastLi-block1">
        <img
          src="../assets/img/dropdown.png"
          alt="下拉選單icon"
          class="mx-auto d-block"
        />
      </li>
    </ul>
    <ul class="p-5 hint rounded-3">
      <li class="d-flex align-items-center mb-3">
        <img src="../assets/img/info.svg" alt="驚嘆號提示icon" class="me-3" />
        <p class="fs-5 lh-sms fw-semibold">小提示</p>
      </li>
      <li class="hintContent-block2">點擊地圖查看縣市的選舉結果</li>
      <li class="hintLastLi-block2">
        <img
          src="../assets/img/臺中市.svg"
          alt="臺中市地圖icon"
          class="mx-auto d-block"
        />
      </li>
    </ul>
  </aside>
  <!-- 點擊地圖或篩選列後，變成顯示數據 -->
  <aside v-else class="d-flex flex-column align-items-center d-lg-block">
    <!-- 電腦版以下使用swiper套件 -->
    <swiper
      v-if="useSwiper"
      :slidesPerView="2"
      :spaceBetween="10"
      :freeMode="true"
      :pagination="{
        clickable: true,
      }"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide>
        <ul class="leftSide-Chart2 leftSide-right rounded-3 mb-5">
          <li class="fs-5 fw-semibold mb-2">
            {{ clickCity.adminCity }}
          </li>
          <li class="d-flex align-items-center chartContent2 mb-2">
            <div
              class="number number-3 d-flex justify-content-center align-items-center me-2"
            >
              <p>3</p>
            </div>
            <ul class="me-5 partisan-right partisan-3 lh-bases">
              <li class="fw-semibold">民主進步黨</li>
              <li class="fs-8">蔡英文｜賴清德</li>
            </ul>
            <ul class="lh-bases">
              <li class="fw-semibold">{{ clickCity.partisanGroup3Rate }}</li>
              <li class="fs-8">{{ clickCity.partisanGroup3 }}</li>
            </ul>
          </li>
          <li class="d-flex align-items-center chartContent2 mb-2">
            <div
              class="number number-2 d-flex justify-content-center align-items-center me-2"
            >
              <p>2</p>
            </div>
            <ul class="me-5 partisan-right partisan-2 lh-bases">
              <li class="fw-semibold">中國國民黨</li>
              <li class="fs-8">韓國瑜｜張善政</li>
            </ul>
            <ul class="lh-bases">
              <li class="fw-semibold">{{ clickCity.partisanGroup2Rate }}</li>
              <li class="fs-8">{{ clickCity.partisanGroup2 }}</li>
            </ul>
          </li>
          <li class="d-flex align-items-center chartContent2">
            <div
              class="number number-1 d-flex justify-content-center align-items-center me-2"
            >
              <p>1</p>
            </div>
            <ul class="me-5 partisan-right partisan-1 lh-bases">
              <li class="fw-semibold">親民黨</li>
              <li class="fs-8">宋楚瑜｜余湘</li>
            </ul>
            <ul class="lh-bases">
              <li class="fw-semibold">{{ clickCity.partisanGroup1Rate }}</li>
              <li class="fs-8">{{ clickCity.partisanGroup1 }}</li>
            </ul>
          </li>
        </ul>
      </swiper-slide>
      <swiper-slide>
        <ul
          v-if="isRightAsideVisible2"
          class="leftSide-Chart2 leftSide-right rounded-3 mb-5"
        >
          <li class="fs-5 fw-semibold mb-2">
            {{ clickCounty.adminCity }}
          </li>
          <li class="d-flex align-items-center chartContent2 mb-2">
            <div
              class="number number-3 d-flex justify-content-center align-items-center me-2"
            >
              <p>3</p>
            </div>
            <ul class="me-5 partisan-right partisan-3 lh-bases">
              <li class="fw-semibold">民主進步黨</li>
              <li class="fs-8">蔡英文｜賴清德</li>
            </ul>
            <ul class="lh-bases">
              <li class="fw-semibold">{{ clickCounty.partisanGroup3Rate }}</li>
              <li class="fs-8">{{ clickCounty.partisanGroup3 }}</li>
            </ul>
          </li>
          <li class="d-flex align-items-center chartContent2 mb-2">
            <div
              class="number number-2 d-flex justify-content-center align-items-center me-2"
            >
              <p>2</p>
            </div>
            <ul class="me-5 partisan-right partisan-2 lh-bases">
              <li class="fw-semibold">中國國民黨</li>
              <li class="fs-8">韓國瑜｜張善政</li>
            </ul>
            <ul class="lh-bases">
              <li class="fw-semibold">{{ clickCounty.partisanGroup2Rate }}</li>
              <li class="fs-8">{{ clickCounty.partisanGroup2 }}</li>
            </ul>
          </li>
          <li class="d-flex align-items-center chartContent2">
            <div
              class="number number-1 d-flex justify-content-center align-items-center me-2"
            >
              <p>1</p>
            </div>
            <ul class="me-5 partisan-right partisan-1 lh-bases">
              <li class="fw-semibold">親民黨</li>
              <li class="fs-8">宋楚瑜｜余湘</li>
            </ul>
            <ul class="lh-bases">
              <li class="fw-semibold">{{ clickCounty.partisanGroup1Rate }}</li>
              <li class="fs-8">{{ clickCounty.partisanGroup1 }}</li>
            </ul>
          </li>
        </ul>
      </swiper-slide>
      <swiper-slide>
        <ul
          v-if="isRightAsideVisible3"
          class="leftSide-Chart2 leftSide-right leftSide-right-third rounded-3"
        >
          <li class="fs-5 fw-semibold mb-2">
            {{ clickTownship.adminCity }}
          </li>
          <li class="d-flex align-items-center chartContent2 mb-2">
            <div
              class="number number-3 d-flex justify-content-center align-items-center me-2"
            >
              <p>3</p>
            </div>
            <ul class="me-5 partisan-right partisan-3 lh-bases">
              <li class="fw-semibold">民主進步黨</li>
              <li class="fs-8">蔡英文｜賴清德</li>
            </ul>
            <ul class="lh-bases">
              <li class="fw-semibold">
                {{ clickTownship.partisanGroup3Rate }}
              </li>
              <li class="fs-8">{{ clickTownship.partisanGroup3 }}</li>
            </ul>
          </li>
          <li class="d-flex align-items-center chartContent2 mb-2">
            <div
              class="number number-2 d-flex justify-content-center align-items-center me-2"
            >
              <p>2</p>
            </div>
            <ul class="me-5 partisan-right partisan-2 lh-bases">
              <li class="fw-semibold">中國國民黨</li>
              <li class="fs-8">韓國瑜｜張善政</li>
            </ul>
            <ul class="lh-bases">
              <li class="fw-semibold">
                {{ clickTownship.partisanGroup2Rate }}
              </li>
              <li class="fs-8">{{ clickTownship.partisanGroup2 }}</li>
            </ul>
          </li>
          <li class="d-flex align-items-center chartContent2">
            <div
              class="number number-1 d-flex justify-content-center align-items-center me-2"
            >
              <p>1</p>
            </div>
            <ul class="me-5 partisan-right partisan-1 lh-bases">
              <li class="fw-semibold">親民黨</li>
              <li class="fs-8">宋楚瑜｜余湘</li>
            </ul>
            <ul class="lh-bases">
              <li class="fw-semibold">
                {{ clickTownship.partisanGroup1Rate }}
              </li>
              <li class="fs-8">{{ clickTownship.partisanGroup1 }}</li>
            </ul>
          </li>
        </ul>
      </swiper-slide>
    </swiper>
    <!-- 電腦版不使用swiper套件 -->
    <div v-else>
      <ul class="leftSide-Chart2 leftSide-right rounded-3 mb-5">
        <li class="fs-5 fw-semibold mb-2">
          {{ clickCity.adminCity }}
        </li>
        <li class="d-flex align-items-center chartContent2 mb-2">
          <div
            class="number number-3 d-flex justify-content-center align-items-center me-2"
          >
            <p>3</p>
          </div>
          <ul class="me-5 partisan-right partisan-3 lh-bases">
            <li class="fw-semibold">民主進步黨</li>
            <li class="fs-8">蔡英文｜賴清德</li>
          </ul>
          <ul class="lh-bases">
            <li class="fw-semibold">{{ clickCity.partisanGroup3Rate }}</li>
            <li class="fs-8">{{ clickCity.partisanGroup3 }}</li>
          </ul>
        </li>
        <li class="d-flex align-items-center chartContent2 mb-2">
          <div
            class="number number-2 d-flex justify-content-center align-items-center me-2"
          >
            <p>2</p>
          </div>
          <ul class="me-5 partisan-right partisan-2 lh-bases">
            <li class="fw-semibold">中國國民黨</li>
            <li class="fs-8">韓國瑜｜張善政</li>
          </ul>
          <ul class="lh-bases">
            <li class="fw-semibold">{{ clickCity.partisanGroup2Rate }}</li>
            <li class="fs-8">{{ clickCity.partisanGroup2 }}</li>
          </ul>
        </li>
        <li class="d-flex align-items-center chartContent2">
          <div
            class="number number-1 d-flex justify-content-center align-items-center me-2"
          >
            <p>1</p>
          </div>
          <ul class="me-5 partisan-right partisan-1 lh-bases">
            <li class="fw-semibold">親民黨</li>
            <li class="fs-8">宋楚瑜｜余湘</li>
          </ul>
          <ul class="lh-bases">
            <li class="fw-semibold">{{ clickCity.partisanGroup1Rate }}</li>
            <li class="fs-8">{{ clickCity.partisanGroup1 }}</li>
          </ul>
        </li>
      </ul>
      <ul
        v-if="isRightAsideVisible2"
        class="leftSide-Chart2 leftSide-right rounded-3 mb-5"
      >
        <li class="fs-5 fw-semibold mb-2">
          {{ clickCounty.adminCity }}
        </li>
        <li class="d-flex align-items-center chartContent2 mb-2">
          <div
            class="number number-3 d-flex justify-content-center align-items-center me-2"
          >
            <p>3</p>
          </div>
          <ul class="me-5 partisan-right partisan-3 lh-bases">
            <li class="fw-semibold">民主進步黨</li>
            <li class="fs-8">蔡英文｜賴清德</li>
          </ul>
          <ul class="lh-bases">
            <li class="fw-semibold">{{ clickCounty.partisanGroup3Rate }}</li>
            <li class="fs-8">{{ clickCounty.partisanGroup3 }}</li>
          </ul>
        </li>
        <li class="d-flex align-items-center chartContent2 mb-2">
          <div
            class="number number-2 d-flex justify-content-center align-items-center me-2"
          >
            <p>2</p>
          </div>
          <ul class="me-5 partisan-right partisan-2 lh-bases">
            <li class="fw-semibold">中國國民黨</li>
            <li class="fs-8">韓國瑜｜張善政</li>
          </ul>
          <ul class="lh-bases">
            <li class="fw-semibold">{{ clickCounty.partisanGroup2Rate }}</li>
            <li class="fs-8">{{ clickCounty.partisanGroup2 }}</li>
          </ul>
        </li>
        <li class="d-flex align-items-center chartContent2">
          <div
            class="number number-1 d-flex justify-content-center align-items-center me-2"
          >
            <p>1</p>
          </div>
          <ul class="me-5 partisan-right partisan-1 lh-bases">
            <li class="fw-semibold">親民黨</li>
            <li class="fs-8">宋楚瑜｜余湘</li>
          </ul>
          <ul class="lh-bases">
            <li class="fw-semibold">{{ clickCounty.partisanGroup1Rate }}</li>
            <li class="fs-8">{{ clickCounty.partisanGroup1 }}</li>
          </ul>
        </li>
      </ul>
      <ul
        v-if="isRightAsideVisible3"
        class="leftSide-Chart2 leftSide-right leftSide-right-third rounded-3"
      >
        <li class="fs-5 fw-semibold mb-2">
          {{ clickTownship.adminCity }}
        </li>
        <li class="d-flex align-items-center chartContent2 mb-2">
          <div
            class="number number-3 d-flex justify-content-center align-items-center me-2"
          >
            <p>3</p>
          </div>
          <ul class="me-5 partisan-right partisan-3 lh-bases">
            <li class="fw-semibold">民主進步黨</li>
            <li class="fs-8">蔡英文｜賴清德</li>
          </ul>
          <ul class="lh-bases">
            <li class="fw-semibold">{{ clickTownship.partisanGroup3Rate }}</li>
            <li class="fs-8">{{ clickTownship.partisanGroup3 }}</li>
          </ul>
        </li>
        <li class="d-flex align-items-center chartContent2 mb-2">
          <div
            class="number number-2 d-flex justify-content-center align-items-center me-2"
          >
            <p>2</p>
          </div>
          <ul class="me-5 partisan-right partisan-2 lh-bases">
            <li class="fw-semibold">中國國民黨</li>
            <li class="fs-8">韓國瑜｜張善政</li>
          </ul>
          <ul class="lh-bases">
            <li class="fw-semibold">{{ clickTownship.partisanGroup2Rate }}</li>
            <li class="fs-8">{{ clickTownship.partisanGroup2 }}</li>
          </ul>
        </li>
        <li class="d-flex align-items-center chartContent2">
          <div
            class="number number-1 d-flex justify-content-center align-items-center me-2"
          >
            <p>1</p>
          </div>
          <ul class="me-5 partisan-right partisan-1 lh-bases">
            <li class="fw-semibold">親民黨</li>
            <li class="fs-8">宋楚瑜｜余湘</li>
          </ul>
          <ul class="lh-bases">
            <li class="fw-semibold">{{ clickTownship.partisanGroup1Rate }}</li>
            <li class="fs-8">{{ clickTownship.partisanGroup1 }}</li>
          </ul>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
import { mapState } from "pinia";
// 定義好的 store 賦值給變數 useSelectVoteStore
// 在元件中引入並呼叫 useSelectVoteStore() 來訪問 store
import { useSelectVoteStore } from "../components/VotesDataStore.js";

// Swiper
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/free-mode";
import "swiper/css/pagination";

import "../assets/vendors/_pagination.scss";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

export default {
  data() {
    return {
      // 判斷是否使用swiper套件
      useSwiper: false,
      // 視窗寬度
      windowWidth: window.innerWidth,
    };
  },
  props: {
    isRightAsideVisible: Boolean,
    isRightAsideVisible2: Boolean,
    isRightAsideVisible3: Boolean,
  },
  computed: {
    ...mapState(useSelectVoteStore, {
      clickCity: (state) => state.clickCity,
      clickCounty: (state) => state.clickCounty,
      clickTownship: (state) => state.clickTownship,
    }),
  },
  // 獲取當前瀏覽器的可視區域寬度(視窗寬度)並監控
  watch: {
    // 監聽 windowWidth 變化，動態設置是否使用 Swiper
    windowWidth(newWidth) {
      // 電腦版992px以下使用swiper套件
      this.useSwiper = newWidth < 992;
    },
  },
  mounted() {
    // 監聽視窗寬度變化
    window.addEventListener("resize", this.handleResize);
    // 初始化
    this.handleResize();
  },
  methods: {
    handleResize() {
      // 更新 windowWidth
      this.windowWidth = window.innerWidth;
    },
  },
  // Swiper
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [FreeMode, Pagination],
    };
  },
};
</script>
