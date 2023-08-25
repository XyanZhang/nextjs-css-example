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
