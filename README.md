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
// 注：父级设置宽高和overflow: hidden;，子集盒子宽度需要设置ul { width: calc(100% - 0.5rem) }

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