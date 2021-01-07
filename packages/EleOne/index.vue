<template lang="pug">
  .pb-ele
    .pb-ele_box(@click='showBox')
      .pb-ele_box-title
        slot(name='name', :data='showName') {{ showName }}
      .pb-ele_box-icon
        img.c-img-cover(src="@/assets/round-down.png", alt="alt")
    
    .pb-ele_table-wrapper(v-if='show && tableL > 7', style='height: 3rem')
      c-scroll
        .pb-ele_table(style='padding-right: 0.5rem;')
          .pb-ele_table-item(
            v-for='(item, index) in tables',
            :key='index',
            @click='check(item)'
          ) {{ item.IDX_SECONDID }}
    .pb-ele_table-wrapper(v-if='show && tableL <= 7',)
      .pb-ele_table
        .pb-ele_table-item(
          v-for='(item, index) in tables',
          :key='index',
          @click='check(item)'
        ) {{ item.IDX_SECONDID }}
</template>

<script>
export default {
  name: "ele-one",
  props: {
    title: {
      type: String
    },
    tables: {
      type: Array,
      default() {
        return [
          { IDX_SECONDID: "a", IDX_VALUE: 1 },
          { IDX_SECONDID: "b", IDX_VALUE: 2 },
        ];
      },
    },
  },
  data() {
    return {
      show: false,
      showName: this.title
    }
  },
  computed: {
    tableL() {
      return this.tables.length;
    }
  },
  methods: {
    showBox() {
      this.show = !this.show;
    },
    check(item) {
      this.show = false;
      this.showName = item.IDX_SECONDID;
      this.$emit('check', item);
    }
  }
};
</script>

<style lang="scss">
.pb-ele {
  position: relative;
  width: 100%;
  height: 100%;
  background: rgba(3, 51, 148, 0.5);
  border: 1px solid #39baff;
  font-size: 0.16rem;
  color: #fff;
  &_box {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    &-icon {
      position: relative;
      margin-left: 0.1rem;
      width: 0.06rem;
      height: 0.06rem;
      img {
        position: absolute;
      }
    }
  }
  &_table-wrapper {
    position: absolute;
    top: 100%;
    z-index: 99;
    width: 100%;
    border-left: 0.01rem solid #39baff;
    border-right: 0.01rem solid #39baff;
    background: rgba(3, 51, 148, 0.5);
    overflow: hidden;
    .pb-ele_table-item {
      // height: 0.3rem;
      // line-height: 0.3rem;
      padding: 0.05rem 0.1rem;
      text-align: center;
      border-bottom: 0.01rem solid #39baff;
    }
  }
}
</style>
