// source: https://example.kuizuo.cn/example/aircraft

export function useMove(plane: HTMLElement, timer: any) {
  if(!plane) return;
  let deg = 0; let ex = 0; let ey = 0; let vx = 0; let vy = 0; let count = 0

  function setPlanePosition(e: { x: number; y: number }) {
    ex = e.x - plane.offsetLeft - plane.clientWidth / 2
    ey = e.y - plane.offsetTop - plane.clientHeight / 2
    deg = 360 * Math.atan(ey / ex) / (2 * Math.PI) + 90
    if (ex < 0)
      deg += 180

    count = 0
  }
  window.onmousemove = setPlanePosition

  function draw() {
    plane.style.transform = `rotate(${deg}deg)`
    if (count < 100) {
      vx += ex / 100
      vy += ey / 100
    }
    plane.style.left = `${vx}px`
    plane.style.top = `${vy}px`
    count++
  }
  timer = setInterval(draw, 1)
}