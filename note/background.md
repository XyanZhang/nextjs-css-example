# background 使用

+ 可指定多个背景层

```css
background-image:
  linear-gradient(to bottom, rgba(255,255,0,0.5), rgba(0,0,255,0.5)),
  url('catfront.png');
```

+ 通过 数值（%或者px等）调整渐变的位置

```css
.multicolor-linear {
   background: linear-gradient(to left, lime 28px, red 77%, cyan);
}
```

## 渐变

+ background 渐变
  + 线性渐变 background: linear-gradient(#fff, #000) ；
  + 径向渐变 background: radial-gradient(#fff, #000) ；
  + 角向渐变 background: conic-gradient(#fff, #000) ；
  + 重复渐变 background: repeating-linear-gradient、repeating-radial-gradient、repeating-conic-gradient。

### 线性渐变

