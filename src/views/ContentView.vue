<template>
  <section class="selectArea">
    <!-- 下拉選單 -->
    <SelectMenuView @updateIsVisible="updateData"></SelectMenuView>
  </section>
  <main class="d-lg-flex justify-content-between">
    <!-- 投票概況 -->
    <LeftAside></LeftAside>
    <!-- 地圖區塊 -->
    <MapBlock @updateIsVisible="updateData"></MapBlock>
    <!-- 所選區塊票數 -->
    <RightAside
      :isRightAsideVisible="isRightAsideVisible"
      :isRightAsideVisible2="isRightAsideVisible2"
      :isRightAsideVisible3="isRightAsideVisible3"
    ></RightAside>
  </main>
</template>

<script>
import SelectMenuView from "./SelectMenuView.vue";
import LeftAside from "./LeftAsideView.vue";
import MapBlock from "./MapView.vue";
import RightAside from "./RightAsideView.vue";

export default {
  data() {
    return {
      isRightAsideVisible: false,
      isRightAsideVisible2: false,
      isRightAsideVisible3: false,
    };
  },
  methods: {
    updateData(newValue) {
      this.isRightAsideVisible = newValue.firstIsVisible;
      this.isRightAsideVisible2 = newValue.SecondIsVisible;
      this.isRightAsideVisible3 = newValue.ThirdIsVisible;
      // console.log(this.isRightAsideVisible);
      // console.log(this.isRightAsideVisible2);
      // console.log(this.isRightAsideVisible3);
    },
  },
  components: {
    SelectMenuView,
    LeftAside,
    MapBlock,
    RightAside,
  },
};
</script>
