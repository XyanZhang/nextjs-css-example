# transition

## 基础用法

- transition-property：过渡属性，指定应用过渡属性的名称；
- transition-duration：过渡持续时间，指定过渡动画持续的时间；
- transition-timing-function：过渡缓动，指定过渡动画过程中的缓动函数；
- transition-delay：过渡延迟，指定过渡动画延迟多久才被触发。

## 关键字 all 给所有属性设置过渡

```css
div {
    transition: all 1s linear;
}

```

## 多个属性的精细化控制

```css
div {
  transition: 
      height 1s linear, 
      transform 0.5s,
      color 2s ease-in-out 0.5s;
}
```

## 所有支持 transition 的属性

<https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_animated_properties>