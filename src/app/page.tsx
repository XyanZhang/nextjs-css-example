import { navList } from '@/config/nav.config'
import Image from 'next/image'
import './index.css'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 max-sm:p-12">
      <section className='w-full'>
        <div className='text-center'>
          <h1 className="text-5xl font-mono font-semibold animate-bounce-in text-transparent bg-clip-text bg-gradient-to-r from-[var(--theme1-2)] to-[var(--theme1-3)]">好看のCSS </h1>
          <p className='mt-4 text-xl text-[var(--theme1-3)]'>一些好看而又有创意的样式，使用CSS实现</p>
        </div>
        <br/>
        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
          {
            navList.map((item, index) => {
              return (
                // 一个小卡片，展示标题，描述，点击跳转到对应的页面，每个卡片使用不同的主题色
                <li key={index} className='relative'>
                  <a href={item.url} target='_blank' className='block w-full h-full'>
                    <div className={`w-full h-full bg-gradient-to-r from-[var(--theme1-2)] to-[var(--theme1-3)] rounded-lg shadow-lg transform transition duration-300 hover:scale-105`}>
                      <div className='flex flex-col justify-between h-full p-4'>
                        <div className='text-xl font-semibold text-[var(--theme1)]'>{item.title}</div>
                        <div className='text-sm text-[var(--theme1-1)]'>{item.desp}</div>
                      </div>
                    </div>
                  </a>
                </li>  
              )
            })
          }
        </ul>
      </section>
      <p className='text-[var(--theme1-1)]'>创意来源：<a target="_blank" className='transition hover:text-[var(--theme1-3)]' href="https://colorhunt.co/palette/f5efe7d8c4b64f709c213555">Color Hunt</a>、<a target="_blank" className='transition hover:text-[var(--theme1-3)]' href="https://example.kuizuo.cn/">前端示例站</a></p>
    </main>
  )
}
