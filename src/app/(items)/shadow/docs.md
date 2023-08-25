# shadow

## box-shadow 盒阴影

在 CSS 中，box-shadow 属于耗性能样式

```css
/* box-shadow: offset-x offset-y blur spread color inset; */
box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);

.my-element {
  box-shadow: 0 0 5px #000, 0 0 10px #FFF; /* 多个阴影叠加使用 */
}
```

## text-shadow 文字阴影

```css
/* text-shadow: offset-x offset-y blur-radius color; */
text-shadow: 2px 2px 2px #ff0000;

```

## filter: drop-shadow() 滤镜内的阴影

```css
/* filter: drop-shadow(offset-x offset-y blur-radius color); */
filter: drop-shadow(16px 16px 20px blue);
```

## 阴影优化

```css
/* 阴影hover 动画 */
div {
    width: 100px;
    height: 100px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}
div:hover {
  width: 100px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}
```

问题： 由于过渡动画是在两个不同的盒阴影状态之间发生的，因此在动画过程中，浏览器需要不断地重新绘制盒阴影。然而，盒阴影属于耗性能样式，所以这种动画可能会给人一些卡顿的感觉

解决：核心在于使用元素的两个伪元素进行透明度的变化实现动画的优化。

```css
div {
    position: relative;
    width: 100px;
    height: 100px;
}
div::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    opacity: 0;
}
div {
    position: relative;
    width: 100px;
    height: 100px;
}
div::before {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    opacity: 0;
}
div::after {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    transition: all 0.3s;
}
div:hover::before {
    opacity: 1;
}
div:hover::after {
    opacity: 0;
}
```
