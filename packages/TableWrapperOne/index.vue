<template lang="pug">
  .table-wrapper(:class='{ "table-wrapper_px": !rem }')
    .table-wrapper_header
      .header_item(v-for="(item, index) in headerArr", :style='{ "width": rem ? `${widthArr[index]}rem` : `${widthArr[index] * 100}px` }') {{ item }}
    .table-wrapper_content(v-if='datasArr.length')
      auto-scroll(:tables='datasArr', :option="option")
        .table-item(v-for='(item, index) in datasArr', :key='index', :class='`item${index}`', :style='`margin-bottom: ${bottom}rem`')
          .table-item_colmu1(:style='{"width": rem ? `${widthArr[0]}rem` : `${widthArr[0] * 100}px`}')
            slot(name='item0', :data='{item, index}')
              .table-item_colmu1-sort {{ item.sort }}
              .table-item_colmu1-name {{ item.name }}
                //- auto-scroll(:option="{ direction: 2, limitMoveNum: 5 }", :tables='item.name.split("")') {{ item.name }}
              .table-item_colmu1-percent(v-if='item.width')
                c-percentage(:haveBg='false', :width='item.width', :background='percenBgArr[index] || ["#002adb", "#04f7fb"]')
          .table-item_colmun(
            v-for='(_item, _index) in item.datas', 
            :key='_index', 
            :style='{"width": rem ? `${widthArr[index+1]}rem` : `${widthArr[index+1] * 100}px`, "color": `${_index == 0 && fontColor[index]}`}'
          ) 
            slot(:name='`item${_index+1}`', :data='{item: _item, index: (_index + 1)}') {{ _item }}

          
</template>

<script>
export default {
  name: "table-wrapper-one",
  props: {
    rem: {
      type: Boolean,
      default: false
    },
    option: {
      type: Object,
      default() {
        return {};
      },
    },
    widthArr: {
      type: Array,
      default() {
        return [2.8, 1.64, 1.5, 1.5, 1];
      },
    },
    headerArr: {
      type: Array,
      default() {
        return ["私行占比排名", "私行占比", "系统占比", "期末（私行）", "期末（零售）"];
      },
    },
    datasArr: {
      type: Array,
      require: true,
    },
    bottom: {
      type: String,
      default: "0.2",
    },
  },
  data() {
    return {
      percenBgArr: [
        ["#FFD005", "#FF5D05"],
        ["#2205FF", "#FF32EE"],
        ["#2205FF", "#FF32EE"],
      ],
      fontColor: ["#FF9F05", "#EB07DC", "#EB07DC"],
    };
  },
};
</script>

<style lang="scss">
.table-wrapper {
  height: 100%;
  font-size: 0.16rem;
  color: #ffffff;
  &_header {
    display: flex;
    align-items: center;
    height: 0.4rem;
    margin-bottom: 0.4rem;
    background: rgba(9, 97, 252, 0.92);
    padding: 0 0.2rem;
    .header_item {
      flex: none;
    }
  }
  &_content {
    padding: 0 0.2rem;
    height: 4.88rem;
    .table-item {
      display: flex;
      &_colmun {
        display: flex;
        align-items: center;
        flex: none;
      }
      &_colmu1 {
        display: flex;
        align-items: center;
        flex: none;
        &-sort {
          width: 0.2rem;
          height: 0.2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: #064cff;
          border: 2px solid #08caef;
          font-size: 0.14rem;
        }
        &-name {
          width: 0.5rem;
          margin: 0 0.15rem;
          height: 0.16rem;
        }
        &-percent {
          width: 1.4rem;
          height: 0.05rem;
        }
      }
    }
    .item0 {
      .table-item_colmu1-sort {
        background: #ff6005;
        border: 0.02rem solid #ffd105;
      }
    }
    .item1,
    .item2 {
      .table-item_colmu1-sort {
        background: #ed08dc;
        border: 2px solid #2405ff;
      }
    }
  }
}
.table-wrapper_px {
  font-size: 16px;
  .table-wrapper_header {
    height: 40px;
    margin-bottom: 40px;
    padding: 0 20px;
  }
  .table-wrapper_content {
    padding: 0 20px;
    height: 488px;
    .table-item {
      &_colmu1 {
        &-sort {
          width: 20px;
          height: 20px;
          font-size: 14px;
        }
        &-name {
          width: 50px;
          margin: 0 15px;
          height: 16px;
        }
        &-percent {
          width: 140px;
          height: 5px;
        }
      }
    }
    .item0 {
      .table-item_colmu1-sort {
        border: 2px solid #ffd105;
      }
    }
    .item1,
    .item2 {
      .table-item_colmu1-sort {
        background: #ed08dc;
        border: 2px solid #2405ff;
      }
    }
  }
}
</style>
