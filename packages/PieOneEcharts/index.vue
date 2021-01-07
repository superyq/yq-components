<template lang="pug">
  .pie-one-echarts
    .pie-one-echarts_title {{ title }}
    .pie-one-echarts_content
      .pie-one-echarts_content-echarts
        c-echarts(:cId='cId', :option='option')
      .pie-one-echarts_content-table
        .table-item(v-for='(item, index) in tableData', :key='index')
          .table-item_icon(:style='{ "background": colorArr[index] }')
          .table-item_name {{ item.name }}
          .table-item_number {{ item.number }}%
          .table-item_compare
            .table-item_compare-number(:style="`color: ${!item.compareNumber.includes('-') ? '#F9AE25' : '#00D2A2'}`") {{ item.compareNumber }}
            .table-item_compare-img
              img(:src="!item.compareNumber.includes('-') ? up : down", alt="alt")


</template>

<script>
import up from "@/assets/up.png";
import down from "@/assets/down.png";

export default {
  name: "pie-one-echarts",
  props: {
    cId: {
      type: String,
    },
    title: {
      type: String,
      default: "全行合计占比",
    },
    xName: {
      type: Array,
      default() {
        return ["建行", "招行", "工行", "农行", "中行", "交行"];
      },
    },
    xDatas: {
      type: Array,
      deafult() {
        return [{ value: 10, cValue: "10%" }];
      },
    },
  },
  watch: {
    xDatas() {
      this.xDatas.map((item, index) => {
        // 列表数据
        this.tableData.push({
          name: this.xName[index],
          number: item.value,
          compareNumber: item.cValue,
        });
      });
    },
  },
  computed: {
    option() {
      return {
        series: [
          {
            type: "pie",
            minAngle: 15,
            radius: ["60%", "80%"],
            center: ["50%", "50%"],
            data: this.xDatas.map((item, index) => {
              return { name: this.xName[index], value: item.value };
            }),
            label: {
              show: false,
            },
            labelLine: {
              show: false,
            },
          },
        ],
        color: this.colorArr,
      };
    },
  },
  data() {
    return {
      up,
      down,
      colorArr: ["#E86452", "#F6BD16", "#5B8FF9", "#5AD8A6", "#3F06F8", "#9E03FF"],
      tableData: [],
    };
  },
};
</script>

<style lang="scss">
.pie-one-echarts {
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: 0.2rem;
  &_title {
    position: absolute;
    top: 0;
    left: 0;
    font-size: 0.2rem;
    color: #ffffff;
    &::before {
      content: "";
      display: inline-block;
      width: 0.06rem;
      height: 0.06rem;
      margin-right: 0.06rem;
      background: #09dafc;
    }
  }
  &_content {
    display: flex;
    align-items: center;
    &-echarts {
      flex: none;
      height: 1.8rem;
      width: 1.8rem;
    }
    &-table {
      margin-left: 0.1rem;
      .table-item {
        display: flex;
        align-items: center;
        margin-top: 0.08rem;
        font-size: 0.12rem;
        color: #ffffff;
        &_icon {
          width: 0.1rem;
          height: 0.1rem;
          border-radius: 100%;
        }
        &_name {
          margin: 0 0.1rem;
        }
        &_number {
          width: 0.4rem;
          margin-right: 0.1rem;
        }
        &_compare {
          position: relative;
          &-img {
            position: absolute;
            top: -0.05rem;
            right: -0.1rem;
            height: 0.1rem;
            img {
              height: 100%;
              object-fit: cover;
            }
          }
        }
      }
    }
  }
}
</style>
