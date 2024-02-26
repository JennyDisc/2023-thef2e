<template>
  <aside class="d-lg-flex align-items-start">
    <!-- 投票概況 -->
    <aside class="accordion d-lg-none mb-5" id="accordionExample">
      <div class="accordion-item rounded-3">
        <h2 class="accordion-header" id="headingOne">
          <button
            class="accordion-button fs-6 fw-bold"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            投票概況
          </button>
        </h2>
        <div
          id="collapseOne"
          class="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <ul class="leftSide-Chart1 d-flex mb-5">
              <li class="d-flex me-2">
                <svg id="donut1_mobile" width="72" height="72"></svg>
                <p class="ms-2 my-auto">
                  <span class="fw-bold">{{ initVoteData.voteRate }}</span>
                  <br />
                  <span class="fs-8">投票率</span>
                </p>
              </li>
              <li>
                <ul>
                  <li class="d-flex mb-3">
                    <p class="fs-8 me-3">投票數</p>
                    <p class="fs-8 fw-bold">
                      {{ initVoteData.totallyVotes }} 票
                    </p>
                  </li>
                  <li class="d-flex mb-3">
                    <p class="fs-8 me-3">無效票數</p>
                    <p class="fs-8 fw-bold">{{ initVoteData.nanVotes }} 票</p>
                  </li>
                  <li class="d-flex">
                    <p class="fs-8 me-3">有效票數</p>
                    <p class="fs-8 fw-bold">
                      {{ initVoteData.correctVotes }} 票
                    </p>
                  </li>
                </ul>
              </li>
            </ul>
            <ul class="leftSide-Chart2 d-flex">
              <li class="me-2 d-flex align-items-center">
                <svg id="donut2_mobile" width="72" height="72"></svg>
              </li>
              <li>
                <ul>
                  <li class="d-flex align-items-center chartContent2 mb-3">
                    <div
                      class="number number-3 d-flex justify-content-center align-items-center me-3"
                    >
                      <p>3</p>
                    </div>
                    <ul class="me-5 partisan partisan-3">
                      <li class="fs-8 fw-semibold">民主進步黨</li>
                      <li class="fs-8">蔡英文｜賴清德</li>
                    </ul>
                    <ul>
                      <li class="fs-8 fw-semibold lh-bases">
                        {{ initVoteData.partisanGroup3Rate }}
                      </li>
                      <li class="fs-8">{{ initVoteData.partisanGroup3 }} 票</li>
                    </ul>
                  </li>
                  <li class="d-flex align-items-center chartContent2 mb-3">
                    <div
                      class="number number-2 d-flex justify-content-center align-items-center me-3"
                    >
                      <p>2</p>
                    </div>
                    <ul class="me-5 partisan partisan-2">
                      <li class="fs-8 fw-semibold">中國國民黨</li>
                      <li class="fs-8">韓國瑜｜張善政</li>
                    </ul>
                    <ul>
                      <li class="fs-8 fw-semibold lh-bases">
                        {{ initVoteData.partisanGroup2Rate }}
                      </li>
                      <li class="fs-8">{{ initVoteData.partisanGroup2 }} 票</li>
                    </ul>
                  </li>
                  <li class="d-flex align-items-center chartContent2">
                    <div
                      class="number number-1 d-flex justify-content-center align-items-center me-3"
                    >
                      <p>1</p>
                    </div>
                    <ul class="me-5 partisan partisan-1">
                      <li class="fs-8 fw-semibold">親民黨</li>
                      <li class="fs-8">宋楚瑜｜余湘</li>
                    </ul>
                    <ul>
                      <li class="fs-8 fw-semibold lh-bases">
                        {{ initVoteData.partisanGroup1Rate }}
                      </li>
                      <li class="fs-8">{{ initVoteData.partisanGroup1 }} 票</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </aside>
    <aside class="leftSide rounded-3 d-none d-lg-block">
      <div class="p-5">
        <p class="fs-6 fs-lg-5 fw-bold fw-lg-semibold mb-5">投票概況</p>
        <ul class="leftSide-Chart1 mb-8">
          <li class="d-flex mb-5">
            <svg id="donut1_desktop" width="120" height="120"></svg>
            <p class="ms-5">
              <span class="fs-lg-5 fw-bold fw-lg-semibold">{{
                initVoteData.voteRate
              }}</span>
              <br />
              <span class="fs-8 fs-lg-7 lh-lg-bases">投票率</span>
            </p>
          </li>
          <li class="d-flex mb-3">
            <p class="fs-8 fs-lg-7 lh-lg-bases me-3">投票數</p>
            <p class="fs-8 fw-bold fw-lg-semibold lh-lg-bases">
              {{ initVoteData.totallyVotes }} 票
            </p>
          </li>
          <li class="d-flex mb-3">
            <p class="fs-8 fs-lg-7 lh-lg-bases me-3">無效票數</p>
            <p class="fs-8 fw-bold fw-lg-semibold lh-lg-bases">
              {{ initVoteData.nanVotes }} 票
            </p>
          </li>
          <li class="d-flex">
            <p class="fs-8 fs-lg-7 lh-lg-bases me-3">有效票數</p>
            <p class="fs-8 fw-bold fw-lg-semibold lh-lg-bases">
              {{ initVoteData.correctVotes }} 票
            </p>
          </li>
        </ul>
        <ul class="leftSide-Chart2">
          <li class="mb-5">
            <svg id="donut2_desktop" width="120" height="120"></svg>
          </li>
          <li class="d-flex align-items-center chartContent2 mb-3">
            <div
              class="number number-3 d-flex justify-content-center align-items-center me-2"
            >
              <p>3</p>
            </div>
            <ul class="me-5 partisan partisan-3">
              <li class="fs-8 fs-lg-7 fw-semibold lh-lg-bases">民主進步黨</li>
              <li class="fs-8 lh-lg-bases">蔡英文｜賴清德</li>
            </ul>
            <ul>
              <li class="fs-8 fs-lg-7 fw-semibold lh-bases">
                {{ initVoteData.partisanGroup3Rate }}
              </li>
              <li class="fs-8 lh-lg-bases">
                {{ initVoteData.partisanGroup3 }} 票
              </li>
            </ul>
          </li>
          <li class="d-flex align-items-center chartContent2 mb-3">
            <div
              class="number number-2 d-flex justify-content-center align-items-center me-2"
            >
              <p>2</p>
            </div>
            <ul class="me-5 partisan partisan-2">
              <li class="fs-8 fs-lg-7 fw-semibold lh-lg-bases">中國國民黨</li>
              <li class="fs-8 lh-lg-bases">韓國瑜｜張善政</li>
            </ul>
            <ul>
              <li class="fs-8 fs-lg-7 fw-semibold lh-bases">
                {{ initVoteData.partisanGroup2Rate }}
              </li>
              <li class="fs-8 lh-lg-bases">
                {{ initVoteData.partisanGroup2 }} 票
              </li>
            </ul>
          </li>
          <li class="d-flex align-items-center chartContent2">
            <div
              class="number number-1 d-flex justify-content-center align-items-center me-2"
            >
              <p>1</p>
            </div>
            <ul class="me-5 partisan partisan-1">
              <li class="fs-8 fs-lg-7 fw-semibold lh-lg-bases">親民黨</li>
              <li class="fs-8 lh-lg-bases">宋楚瑜｜余湘</li>
            </ul>
            <ul>
              <li class="fs-8 fs-lg-7 fw-semibold lh-bases">
                {{ initVoteData.partisanGroup1Rate }}
              </li>
              <li class="fs-8">{{ initVoteData.partisanGroup1 }} 票</li>
            </ul>
          </li>
        </ul>
      </div>
    </aside>
  </aside>
</template>

<script>
import * as d3 from "d3";

export default {
  data() {
    return {
      rateData: [],
      voteData: [],
      initVoteData: {},
    };
  },
  mounted() {
    // 檢查是否正確取到svg元素(1表示有、0則無)
    // console.log(d3.select("#donut2_mobile").size());
    // console.log(d3.select("#donut2_desktop").size());
    this.voteCsv();
  },
  methods: {
    voteCsv() {
      d3.csv("/2023-thef2e/總統全台縣市經緯對應得票數一覽表.csv")
        .then((data) => {
          // 讀取 csv 檔案
          // console.log(data);
          const csv = data;
          this.initVote(csv);
          this.drawVoteDonut();
        })
        .catch((error) => {
          // 處理錯誤情況
          console.error("Error loading csv file:", error);
        });
    },
    initVote(csv) {
      let voteData = csv.filter((row) => row["縣市別"] === "全");
      // 計算投票數與投票率等數值
      const numTotallyVotes = parseInt(
        voteData[0].投票數.replace(/,/g, ""),
        10
      );
      const numConformVotes = parseInt(
        voteData[0].選舉人數.replace(/,/g, ""),
        10
      );

      const voteRate =
        ((numTotallyVotes / numConformVotes) * 100).toFixed(2) + "%";

      const unVoteRate = (
        100 -
        (numTotallyVotes / numConformVotes) * 100
      ).toFixed(2);

      const numEffectiveVotes = parseInt(
        voteData[0].有效票數.replace(/,/g, ""),
        10
      );
      const numPartisanGroup1 = parseInt(
        voteData[0]["(1)宋楚瑜&余湘"].replace(/,/g, ""),
        10
      );
      const numPartisanGroup2 = parseInt(
        voteData[0]["(2)韓國瑜&張善政"].replace(/,/g, ""),
        10
      );
      const numPartisanGroup3 = parseInt(
        voteData[0]["(3)蔡英文&賴清德"].replace(/,/g, ""),
        10
      );

      const partisanGroup1Rate =
        ((numPartisanGroup1 / numEffectiveVotes) * 100).toFixed(2) + "%";

      const partisanGroup2Rate =
        ((numPartisanGroup2 / numEffectiveVotes) * 100).toFixed(2) + "%";

      const partisanGroup3Rate =
        ((numPartisanGroup3 / numEffectiveVotes) * 100).toFixed(2) + "%";

      // 將取得的資料寫回data的initVoteData中
      this.initVoteData = {
        correctVotes: voteData[0].有效票數,
        nanVotes: voteData[0].無效票數,
        totallyVotes: voteData[0].投票數,
        voteRate: voteRate,
        unVoteRate: unVoteRate,
        partisanGroup1: voteData[0]["(1)宋楚瑜&余湘"],
        partisanGroup2: voteData[0]["(2)韓國瑜&張善政"],
        partisanGroup3: voteData[0]["(3)蔡英文&賴清德"],
        partisanGroup1Rate: partisanGroup1Rate,
        partisanGroup2Rate: partisanGroup2Rate,
        partisanGroup3Rate: partisanGroup3Rate,
      };
      // console.log(this.initVoteData);
    },
    drawVoteDonut() {
      this.rateData = [
        {
          value: "投票率",
          property: parseFloat(this.initVoteData.voteRate),
        },
        {
          value: "未投票率",
          property: this.initVoteData.unVoteRate,
        },
      ];
      this.voteData = [
        {
          value: "(1)宋楚瑜&余湘",
          property: parseFloat(this.initVoteData.partisanGroup1Rate),
        },
        {
          value: "(2)韓國瑜&張善政",
          property: parseFloat(this.initVoteData.partisanGroup2Rate),
        },
        {
          value: "(3)蔡英文&賴清德",
          property: parseFloat(this.initVoteData.partisanGroup3Rate),
        },
      ];
      // console.log(this.data);

      // 呼叫函數去執行手機版 Donut1 圖
      this.createRateDonut("#donut1_mobile", this.rateData, 72, 72);
      // 呼叫函數去執行電腦版 Donut1 圖
      this.createRateDonut("#donut1_desktop", this.rateData, 120, 120);

      // 呼叫函數去執行手機版 Donut2 圖
      this.createVoteDonut("#donut2_mobile", this.voteData, 72, 72);
      // 呼叫函數去執行電腦版 Donut2 圖
      this.createVoteDonut("#donut2_desktop", this.voteData, 120, 120);
    },
    createRateDonut(svgSelector, data, width, height) {
      const svg = d3
        .select(svgSelector)
        .append("svg")
        .attr("width", width)
        .attr("height", height);

      // 自訂顏色陣列
      const customColors = ["#262E49", "#D9D9D9", "#84CB98"];
      const colorScale = d3.scaleOrdinal().range(customColors);

      // 用 pie()建立圓餅圖
      const pie = d3.pie().value((d) => d.property)(data);

      // 建立一個圓餅圖的扇形圓弧
      // innerRadius()與outerRadius()是扇形的內外半徑
      const arc = d3
        .arc()
        .innerRadius(width / 4)
        .outerRadius(width / 2);

      // 綁定資料
      // arcs是針對所有扇形的集合
      // translate(150, 120)：圓餅圖所在的 <g> 元素在水平方向平移 150 單位，在垂直方向平移 120 單位
      // data(pie)：圓餅圖生成器
      const arcs = svg
        .append("g")
        .attr("transform", `translate(${width / 2}, ${height / 2})`)
        .selectAll("arc")
        .data(pie)
        .enter()
        .append("g");

      // 加上路徑
      // .attr("fill", (data, i) => {}) 是用來設定 SVG 元素屬性的方法
      // (1)fill 屬性，即填充顏色
      // (2)data 是 pie 函數生成的數組中的元素
      // (3)i 表示索引，即數據中的元素的索引值
      // (4)d3.schemeSet2 是 D3.js 提供的一個預設的色盤
      arcs
        .append("path")
        .attr("fill", (data, i) => colorScale(i))
        .attr("d", arc);
    },
    createVoteDonut(svgSelector, data, width, height) {
      const svg = d3
        .select(svgSelector)
        .append("svg")
        .attr("width", width)
        .attr("height", height);

      // 自訂顏色陣列
      const customColors = ["#DFA175", "#8894D8", "#84CB98"];
      const colorScale = d3.scaleOrdinal().range(customColors);

      // 用 pie()建立圓餅圖
      const pie = d3.pie().value((d) => d.property)(data);

      // 建立一個圓餅圖的扇形圓弧
      // innerRadius()與outerRadius()是扇形的內外半徑
      const arc = d3
        .arc()
        .innerRadius(width / 4)
        .outerRadius(width / 2);

      // 綁定資料
      // arcs是針對所有扇形的集合
      // translate(150, 120)：圓餅圖所在的<g>元素在水平方向平移150單位，垂直方向平移120單位
      // data(pie)：圓餅圖生成器
      const arcs = svg
        .append("g")
        .attr("transform", `translate(${width / 2}, ${height / 2})`)
        .selectAll("arc")
        .data(pie)
        .enter()
        .append("g");

      // 加上路徑
      // .attr("fill", (data, i) => {}) 是用來設定 SVG 元素屬性的方法
      // (1)fill 屬性，即填充顏色
      // (2)data 是 pie 函數生成的數組中的元素
      // (3)i 表示索引，即數據中的元素的索引值
      // (4)d3.schemeSet2 是 D3.js 提供的一個預設的色盤
      arcs
        .append("path")
        .attr("fill", (data, i) => colorScale(i))
        .attr("d", arc);
    },
  },
};
</script>
