<template lang="pug">
  .pb-sort2.c-basebg
    .pb-sort2_number {{ sort }}
    .pb-sort2_txt {{ txt }}
</template>

<script>
export default {
  name: "sort-two",
  props: {
    txt: {
      type: String,
      default: "得分",
    },
    sort: {
      type: [Number, String],
    },
  },
};
</script>

<style lang="scss">
.pb-sort2 {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url("../../examples/assets/workResultDetail-sort2.png");
  font-size: 0.16rem;
  color: #ffffff;
  &_txt {
    font-size: 0.12rem;
    color: rgba(9, 218, 252, 0.5);
  }
}
</style>
