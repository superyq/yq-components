# @yqcoder_components

> 注意: &emsp;请选择无视截图水印
> 可在img文件中看demo

## 1.&emsp;安装、引用依赖

1.1 &emsp;安装依赖

```node
npm install @yqcoder/components
```

1.2 &emsp;main.js引用依赖

```js
import yqComponent from "@yqcoder/components";
Vue.use(yqComponent);
```

## 2.&emsp;组件列表

2.1 &emsp;[加载中](#loading)

2.2 &emsp;[百分比进度条](#percentage)

2.3 &emsp;[遮罩层](#master)

2.4 &emsp;[基础echarts](#echarts)

2.5 &emsp;[上下滚动](#scroll)

2.6 &emsp;[自动滚动](#autoscroll)

2.7 &emsp;[echarts柱状图样式1](#barOneEcharts)

2.8 &emsp;[echarts柱状图样式2](#barTwoEcharts)

2.9 &emsp;[echarts线性图样式1](#lineOneEcharts)

2.10 &emsp;[echarts柱状叠加图样式1](#moreBarEcharts)

2.11 &emsp;[echarts饼状图样式1](#pieOneEcharts)

2.12 &emsp;[echarts雷达图样式1](#radarOneEcharts)

2.13 &emsp;[echarts圆环图样式1](#RingOneEcharts)

2.14 &emsp;[echarts圆环图列表样式1](#RingOneTable)

2.15 &emsp;[echarts圆环图样式2](#RingTwoTable)

2.16 &emsp;[列表样式1](#TableWrapperOne)

2.17 &emsp;[排序样式1](#NumberOne)

2.18 &emsp;[按钮样式1](#BtnOne)

2.19 &emsp;[选择框样式1](#EleOne)

2.20 &emsp;[标题样式1](#HeaderOne)

2.21 &emsp;[排序样式1](#SortOne)

2.22 &emsp;[排序样式2](#SortTwo)

## 3.&emsp;组件demo

### 3.1 &emsp;<a id='loading'>加载中</a>

```js
// loading: 判断是否显示加载中, true:显示, false:隐藏, 默认为false
// rem: 是否使用rem单位, true:是, false: 否, 默认为false

<loading :loading='true' rem></loading>
```

### 3.2 &emsp;<a id='percentage'>百分比进度条</a>

```js
// width: 进度条百分比, 0%-100%, 默认为50%
// background: 进度条颜色左到右['', ''], 默认为["#002adb", "#04f7fb"]
// haveBg: 是否显示黑色背景, true:是, false: 否, 默认为true
// rem: 是否使用rem单位, true:是, false: 否, 默认为false

<percentage width='70%' :background='["#002adb", "#04f7fb"]' :haveBg='false' rem></percentage>
```

### 3.3 &emsp;<a id='master'>遮罩层</a>

```js
// text: 遮罩层的文字, 默认为"遮罩"
// rem: 是否使用rem单位, true:是, false: 否, 默认为false
// 注：父级容器需要写入: position: relative

<c-master text='遮罩' rem></c-master>
```

### 3.4 &emsp;<a id='echarts'>基础echarts</a>

```js
// cId: echarts的id，必传
// option: echats的配置项, 必传
// eClick: 地图的点击事件可以下钻到省级，调用组件的toCity()方法，传入获取的城市名，如：toCity('四川')
// 注：可根据屏幕缩放echarts自适应

<c-echarts cId='demo' :option='option' @eClick='eclick'></c-echarts>
```

### 3.5 &emsp;<a id='scroll'>上下滚动</a>

```js
// toBottom: 下拉触底函数
// rem: 是否使用rem单位, true:是, false: 否, 默认为false
// 注：父级设置宽高和overflow: hidden;，子集盒子宽度需要设置ul { width: calc(100% - 0.5rem) }或者ul { width: calc(100% - 50px) }

<div class='scroll-box'>
  <c-scroll @toBottom='toBottom' rem>
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </c-scroll>
</div>
```

### 3.6 &emsp;<a id='autoscroll'>自动滚动</a>

```js
// tables: 滚动的tables列表
// option: 滚动配置项, 可传可不传，默认配置如下：
// option: {
//   step: 0.8, // 数值越大速度滚动越快
//   limitMoveNum: 5, // 开启无缝滚动的数据量
//   hoverStop: true, // 是否启用鼠标hover控制
//   direction: 1, // 方向 0 往下 1 往上 2向左 3向右
//   openTouch: false, // 移动端开启touch滑动
//   singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
//   singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
//   waitTime: 1000, // 单步停止等待时间(默认值1000ms)
//   switchOffset: 30, // 左右切换按钮距离左右边界的边距(px)
//   autoPlay: true, // 1.1.17版本前手动切换时候需要置为false
//   switchSingleStep: 134, // 手动单步切换step值(px)
//   switchDelay: 400, // 单步切换的动画时间(ms)
//   switchDisabledClass: "disabled", // 不可以点击状态的switch按钮父元素的类名
//   isSingleRemUnit: false, // singleHeight and singleWidth是否开启rem度量
// }

// 注：父级容器确定大小

<div class='autoScroll-box'>
  <auto-scroll :tables='tables' :option="option"></auto-scroll>
</div>
```

### 3.7 &emsp;<a id='barOneEcharts'>echarts柱状图样式1</a>

```js
// cId: echarts的Id，每个echarts组件id不同
// title: 标题
// xDatas: 柱状图数据，数据格式如下demo, value: 数值，cValue: 比年初
// xNams: 柱状图命名, 数据格式如下demo
// 注：父级容器确定大小

<div class='echarts-box'>
  <bar-one-echarts
    cId="demo"
    title="我是标题"
    :xDatas="[
      { value: 5, cValue: '10%' },
      { value: 10, cValue: '10%' },
      { value: 10, cValue: '10%' },
      { value: 10, cValue: '10%' },
      { value: 10, cValue: '10%' },
      { value: 10, cValue: '-10%' },
    ]"
    :xName='["建行", "招行", "工行", "农行", "中行", "交行"]'
  ></bar-one-echarts>
</div>
```

### 3.8 &emsp;<a id='barTwoEcharts'>echarts柱状图样式2</a>

```js
// cId: echarts的Id，每个echarts组件id不同
// title: 标题
// xDatas: 柱状图数据，数据格式如下demo, value: 数值，cValue: 比年初
// xNams: 柱状图命名, 数据格式如下demo
// 注：父级容器确定大小

<div class='echarts-box'>
  <bar-two-echarts
    cId="demo"
    title="我是标题"
    :xDatas="[10,20,30,40,50,60]"
    :xName='["建行", "招行", "工行", "农行", "中行", "交行"]'
  ></bar-two-echarts>
</div>
```

### 3.9 &emsp;<a id='lineOneEcharts'>echarts线性图样式1</a>

```js
// cId: echarts的Id，每个echarts组件id不同
// color: 线型图的下部颜色
// xDatas: 线性图数据，数据格式如下demo, value: 数值，cValue: 比年初
// xNams: 线性图命名, 数据格式如下demo
// 注：父级容器确定大小

<div class='echarts-box'>
  <line-one-echarts
    cId="demo"
    :color='["red", "yellow"]'
    :xDatas="[10,20,30,40,50,60]"
    :xName='["建行", "招行", "工行", "农行", "中行", "交行"]'
  ></line-one-echarts>
</div>
```

### 3.10 &emsp;<a id='moreBarEcharts'>echarts柱状叠加图样式1</a>

```js
// cId: echarts的Id，每个echarts组件id不同
// xName: 柱状图的下部数据
// lName: 柱状图叠加命名
// xDatas: 柱状图命名，
// datas数据结构如下
// [{
//   name: "建行",
//   type: "bar",
//   barWidth: "20%",
//   stack: "总量",
//   label: {
//     show: true,
//     formatter: "{c} %",
//   },
//   itemStyle: {
//     color: "yellow",
//   },
//   data: [{ value: 10, cValue: "-10%" }],
// }]
// 注：父级容器确定大小

<div class='echarts-box'>
  <more-bar-echarts :cId='demo' :xName='["四川"]' :lName='["建行"]' :xDatas='datas'></more-bar-echarts>
</div>
```

### 3.11 &emsp;<a id='pieOneEcharts'>echarts饼状图样式1</a>

```js
// cId: echarts的Id，每个echarts组件id不同
// title: 饼状图的标题
// xName: 饼状图X轴
// xDatas: 饼状图数据，
// datas数据结构如下
// [{ value: 10, cValue: "10%" }]
// 注：父级容器确定大小

<div class='echarts-box'>
  <pie-one-echarts cId='demo' title='全行合计占比' :xName='["建行", "招行"]' :xDatas='datas'></pie-one-echarts>
</div>
```

### 3.12 &emsp;<a id='radarOneEcharts'>echarts雷达图样式1</a>

```js
// cId: echarts的Id，每个echarts组件id不同
// xName: 雷达图X轴
// xDatas: 雷达图数据，
// names数据结构如下
// [{ name: "A", max: 50 }]
// datas数据结构如下
// [10]
// 注：父级容器确定大小

<div class='echarts-box'>
  <radar-one-echarts cId='demo' :xName='names' :xDatas='datas'></radar-one-echarts>
</div>
```

### 3.13 &emsp;<a id='RingOneEcharts'>echarts圆环图样式1</a>

```js
// cId: echarts的Id，每个echarts组件id不同
// colorArr: 圆环图颜色
// xDatas: 圆环图数据，
// colors数据结构如下
// ["#3F06F8", "#5AD8A6", "#F6BD16", "#5b8ff9", "#E86452", "#9E03FF"]
// datas数据结构如下
// [{ name: "周一", number: 10 }]
// 注：父级容器确定大小

<div class='echarts-box'>
  <ring-one-echarts cId='demo' :colorArr='colors' :xDatas='datas'></ring-one-echarts>
</div>
```

### 3.14 &emsp;<a id='RingOneTable'>echarts圆环图列表样式1</a>

```js
// cId: echarts的Id，每个echarts组件id不同
// colorArr: 圆环图颜色
// xDatas: 圆环图数据，
// colors数据结构如下
// ["#3F06F8", "#5AD8A6", "#F6BD16", "#5b8ff9", "#E86452", "#9E03FF"]
// obj
// { title: 'a', datas: [{ name: "周一", number: 10 }] }
// 注：父级容器确定大小

<div class='echarts-box'>
  <ring-one-table cId='demo' :colorArr='colors' :obj='obj'>
    <div class='table'>
      <div class='table-item'></div>
    </div>      
  </ring-one-table>
</div>
```

### 3.15 &emsp;<a id='RingTwoTable'>echarts圆环图样式2</a>

```js
// cId: echarts的Id，每个echarts组件id不同
// colorArr: 圆环图颜色
// xDatas: 圆环图数据，
// colors数据结构如下
// ["#FF9F05", "rgba(255,159,5,0)"]
// obj
// { title: 'a', datas: [{ name: "周一", number: 10 }] }
// 注：父级容器确定大小

<div class='echarts-box'>
  <ring-two-echarts cId='demo' :color='colors' :obj='obj'>
  </ring-two-echarts>
</div>
```

### 3.16 &emsp;<a id='TableWrapperOne'>列表样式1</a>

```js
// option: 查看自动滚动组件配置项
// widthArr: table列表的每列宽度
// headerArr: table列表的表头标题
// datasArr: 数据结构如下
// bottom: 每行距离下方距离
// datasArr
// [{ name: 'a', sort: 1, width: '10%', datas: [ 1,2,3 ] }]
// 注：父级容器确定大小,可以自定义每个样式。

<div class='echarts-box'>
  <table-wrapper-one :option="option" :widthArr='widthArr' :headerArr='headerArr' :datasArr='datasArr' bottom='0.2'>
    <div slot='item0' slot-scope='{ data: { item } }'></div>
  </table-wrapper-one>
</div>
```

### 3.17 &emsp;<a id='NumberOne'>排序样式1</a>

```js
// numnber: 排序数字
// 注：父级容器确定大小。

<div class='box'>
  <number-one numnber='1'></number-one>
</div>
```

### 3.18 &emsp;<a id='BtnOne'>按钮样式1</a>

```js
// title: 按钮名字
// 注：父级容器确定大小。

<div class='box'>
  <btn-one title='名字'></btn-one>
</div>
```

### 3.19 &emsp;<a id='EleOne'>选择框样式1</a>

```js
// tables: 下拉选择列表
// table数据结构
// [{ IDX_SECONDID: "a", IDX_VALUE: 1 }]
// 注：父级容器确定大小。

<div class='box'>
  <ele-one :tables='tables'></ele-one>
</div>
```

### 3.20 &emsp;<a id='HeaderOne'>标题样式1</a>

```js
// type: 标题样式, type: 1 或 2
// title: 标题名称
// bgImg: 标题背景
// 注：父级容器确定大小。

<div class='box'>
  <header-one :type='type' title='title' :bgImg='img'></header-one>
</div>
```

### 3.21 &emsp;<a id='SortOne'>排序样式1</a>

```js
// txt: 排序名
// sort: 排序数
// 注：父级容器确定大小。

<div class='box'>
  <sort-one txt='排名' sort='1'></sort-one>
</div>
```

### 3.22 &emsp;<a id='SortTwo'>排序样式2</a>

```js
// txt: 排序名
// sort: 排序数
// 注：父级容器确定大小。

<div class='box'>
  <sort-two txt='排名' sort='1'></sort-two>
</div>
```

