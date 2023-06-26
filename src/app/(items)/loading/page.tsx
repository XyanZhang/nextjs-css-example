import { Metadata } from "next"

export default function BackgroundCSS() {
  return (
    <div>
      <h1>loading</h1>
    </div>
  )
}

// 以下会自动在对应页面的 <head> 中添加 <meta name="title" content="dashboard" />
export const metadata: Metadata = {
  title: 'loading css',
}
 