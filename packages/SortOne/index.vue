<template lang="pug">
  .pb-sort1(:class='{ "pb-sort1_px": !rem }')
    .pb-sort1_text {{ txt }}
    .pb-sort1_number {{ sort }}
</template>

<script>
export default {
  name: "sort-one",
  props: {
    rem: {
      type: Boolean,
      default: false
    },
    txt: {
      type: String,
      default: "排名",
    },
    sort: {
      type: [Number, String],
    },
  },
};
</script>

<style lang="scss">
.pb-sort1 {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.12rem;
  color: #ffffff;
  background-image: url("../../examples/assets/workResultDetail-sort.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  &_text {
    margin-right: 0.03rem;
  }
  &_number {
    font-size: 0.18rem;
    color: #fab809;
  }
}
.pb-sort1_px{
  font-size: 12px;
  .pb-sort1_text {
    margin-right: 3px;
  }
  .pb-sort1_number {
    font-size: 18px;
  }
}
</style>
