# animation

## 用法

- animation-name：指定由 @Keyframes 描述的关键帧名称。
- animation-duration：设置动画一个周期的时长。
- animation-delay：设置延时，即从元素加载完成之后到动画序列开始执行的这段时间。
- animation-direction：设置动画在每次运行完后是反向运行还是重新回到开始位置重复运行。
- animation-iteration-count：设置动画重复次数，可以指定 infinite 无限次重复动画。
- animation-play-state：允许暂停和恢复动画。
- animation-timing-function：设置动画速度，即通过建立加速度曲线，设置动画在关键帧之间是如何变化。
- animation-fill-mode：指定动画执行前后如何为目标元素应用样式。
- animation-composition：指定多个动画的合成方式。

> 必须项：animation-name、animation-duration 和 @keyframes规则。
>
> 可选项：animation-delay、animation-direction、animation-iteration-count、animation-play-state、animation-timing-function、animation-fill-mode 和 animation-composition。（都有默认值）
