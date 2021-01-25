<template lang="pug">
  .private-number(
    :class='{ "private-number_px": !rem }'
    :style='`background-image: url(${imgs[number] || img3})`'
  ) {{ number }}
</template>

<script>
import img1 from "@/assets/number-bg1.png";
import img2 from "@/assets/number-bg2.png";
import img3 from "@/assets/number-bg3.png";

export default {
  name: "number-one",
  props: {
    rem: {
      type: Boolean,
      default: true
    },
    number: {
      type: [Number, String],
    },
  },
  data() {
    return {
      imgs: [null, img1, img2],
      img3,
    };
  },
};
</script>

<style lang="scss">
.private-number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 0.12rem;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.private-number_px {
  font-size: 12px;
}
</style>
