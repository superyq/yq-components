<template>
  <div id="app">
    <!-- 加载中 -->
    <!-- <loading :loading='true'></loading> -->
    <!-- 百分比进度条 -->
    <div class="percentage-box">
      <percentage :background='["#002adb", "red"]' :haveBg='false'></percentage>
    </div>
  </div>
</template>

<script>
// import loading from "~/Loading/index.vue";
import percentage from "~/Percentage/index.vue";

export default {
  name: 'App',
  components: {
    // loading,
    percentage
  }
}
</script>

<style>
.percentage-box {
  width: 200px;
  height: 10px;
  border-radius: 10px;
  overflow: hidden;
}
</style>
