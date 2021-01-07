<template lang="pug">
  .pb-header
    .pb-header_type1.c-basebg(v-if='type === 1', :style='`background-image: url(${bgImg})`')
      .pb-header_title(:style='cStyle') {{ title }}
    .pb-header_type2(v-if='type === 2')
      .pb-header_img
        img(:src="bgImg", alt="alt")
      .pb-header_title {{ title }}
    .pb-header_tyep3(v-if='type === 3')
      .pb-header_img
        img(src="", alt="alt")
      .pb-header_title {{ title }}
</template>

<script>
export default {
  name: "header-one",
  props: {
    type: {
      type: Number,
      default: 1,
    },
    title: {
      type: String,
      default: "标题",
    },
    bgImg: {
      type: String
    },
    cStyle: {
      type: String,
      default: 'font-size: 0.18rem; color: #09dafc'
    }
  },
};
</script>

<style lang='scss'>
.pb-header {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  &_type1 {
    width: 100%;
    height: 100%;
    padding-left: 0.7rem;
    display: flex;
    align-items: center;
  }
  &_type2 {
    display: flex;
    align-items: center;
    font-size: 0.22rem;
    color: #09DAFC;
    .pb-header_img {
      margin-right: 0.1rem;
      height: 0.5rem;
      img {
        height: 100%;
        object-fit: cover;
      }
    }

  }
}
</style>
