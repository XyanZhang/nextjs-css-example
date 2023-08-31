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
