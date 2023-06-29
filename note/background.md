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

线性渐变（径向渐变、角向渐变）是不支持 animation 的，支持单色的 background。

背景色渐变动画实现？

+ background-position 的移动模拟
+ background-size 的缩放模拟
+ 外层的大渐变图形的移动（transform）来模拟渐变动画

### background-clip

```css
{
    background-clip: border-box;  // 背景延伸到边框外沿（但是在边框之下）
    background-clip: padding-box; // 边框下面没有背景，即背景延伸到内边距外沿。
    background-clip: content-box; // 背景裁剪到内容区 (content-box) 外沿。
    backgrounc-clip: text; 
}
```
