import { Metadata } from "next"

export default function DashBoard() {
  return (
    <div>
      <h1>Dashboard_page</h1>
      <div className='linearGradient-1'>
        https://developer.mozilla.org/zh-CN/docs/Web/CSS/radial-gradient
      </div>
      <div className='linearGradient-2'>
        https://developer.mozilla.org/zh-CN/docs/Web/CSS/repeating-linear-gradient
      </div>
      <div className='linearGradient-3'>
        https://developer.mozilla.org/zh-CN/docs/Web/CSS/linear-gradient
      </div>
      <div className='linearGradient-4'>
        https://developer.mozilla.org/zh-CN/docs/Web/CSS/linear-gradient
      </div>
      <div className='wave-button'>
        你好
      </div>
    </div>
  )
}

// 以下会自动在对应页面的 <head> 中添加 <meta name="title" content="dashboard" />
export const metadata: Metadata = {
  title: 'dashboard',
}
 