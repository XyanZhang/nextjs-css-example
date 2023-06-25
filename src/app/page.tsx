import Image from 'next/image'
import './index.css'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
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
    </main>
  )
}
