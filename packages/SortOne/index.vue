<template lang="pug">
  .pb-sort1.c-basebg
    .pb-sort1_text {{ txt }}
    .pb-sort1_number {{ sort }}
</template>

<script>
export default {
  name: "sort-one",
  props: {
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
  &_text {
    margin-right: 0.03rem;
  }
  &_number {
    font-size: 0.18rem;
    color: #fab809;
  }
}
</style>
