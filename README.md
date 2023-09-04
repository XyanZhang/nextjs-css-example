# CSS 技巧

## 动画渲染以及性能优化

### 浏览器渲染页面过程

```jsx
javascript => style => layout paint composite
```

+ javascript
+ style: 计算样式，根据css选择器，对dom元素匹配对应css样式
+ layout: 布局，计算每个dom最终在屏幕上的大小和位置（**重排**）
+ paint 填充像素。绘制dom可视效果，这个绘制过程是在多个层上完成的 （**重绘**）
+ composite 渲染层合并

## CSS 子题规则

基本上所有字体大体都可以分为衬线字体和非衬线字体。

+ 衬线字体（英文为 serif）：意为有衬线的字体，衬线的意思是在字符笔画末端有叫做衬线的小细节的额外装饰，而且笔画的粗细会有所不同，这些细节在大写字母中特别明显。
+ 非衬线字体（英文为 sans-serif）：sans 的意思是无，sans-serif 也就是无衬线的意思。专指西文中没有衬线的字体，与汉字字体中的黑体相对应。与衬线字体相反，该类字体通常是机械的和统一线条的，它们往往拥有相同的曲率，笔直的线条，锐利的转角。

![字体](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/cc30875437eb48d381732707b1d383fc~tplv-k3u1fbpfcp-jj-mark:1890:0:0:0:q75.awebp)

### 字体的 fallback 机制

以 font-family: Helvetica, Arial; 为例，Arial 字体就是一种 fallback，当指定的第一选择字体 Helvetica 不可用时，则尝试去寻找 Arial 是否可用

### 字体定义规则建议

1. 尽量使用系统默认字体
1. 兼顾中西，西文在前，中文在后
1. 兼顾多操作系统
1. 兼顾旧操作系统，以字体族系列 serif 和 sans-serif 结尾
