<template lang="pug">
  .ring-table(:class='{ "ring-table_px": !rem }')
    .ring-table_title(v-if='obj.title') {{ obj.title }}
    .ring-table_content
      .ring-table_content-echarts
        ring-one-echarts(:cId='cId', :xDatas='obj.datas', :colorArr='colorArr')
      .ring-table_content-table
        .ring-table_content-table-menu
          .menu-item(v-for='(item, index) in obj.datas', :key='index')
            .menu-item_icon(:style='{ "background": colorArr[index] }')
            .menu-item_name {{ item.name }}
        .ring-table_content-table-box
          slot
</template>

<script>
export default {
  name: "ring-one-table",
  props: {
    rem: {
      type: Boolean,
      default: true
    },
    cId: {
      type: String,
    },
    obj: {
      type: Object,
    },
    colorArr: {
      type: Array,
      default() {
        return ["#3F06F8", "#5AD8A6", "#F6BD16", "#5b8ff9", "#E86452", "#9E03FF"];
      },
    },
  },
};
</script>

<style lang="scss">
.ring-table {
  padding: 0.28rem 0.4rem 0.4rem;
  width: 100%;
  height: 100%;
  color: #ffffff;
  font-size: 0.14rem;
  &_title {
    margin-bottom: 0.1rem;
  }
  &_content {
    display: flex;
    height: calc(100% - 0.24rem);
    &-echarts {
      height: 100%;
      width: 2rem;
      margin: 0 0.4rem 0 0.24rem;
    }
    &-table {
      display: flex;
      &-menu {
        flex: none;
        display: flex;
        flex-direction: column-reverse;
        justify-content: center;
        .menu-item {
          display: flex;
          align-items: center;
          margin-bottom: 0.1rem;
          &_icon {
            width: 0.08rem;
            height: 0.08rem;
            margin-right: 0.1rem;
            border-radius: 50%;
          }
        }
      }
    }
  }
}
.ring-table_px {
  padding: 28px 40px 40px;
  font-size: 14px;
  .ring-table_title {
    margin-bottom: 10px;
  }
  .ring-table_content {
    height: calc(100% - 24px);
    &-echarts {
      width: 200px;
      margin: 0 40px 0 24px;
    }
    &-table {
      &-menu {
        .menu-item {
          margin-bottom: 10px;
          &_icon {
            width: 8px;
            height: 8px;
            margin-right: 10px;
          }
        }
      }
    }
  }
}
</style>
