import { Metadata } from "next"

export default function DashBoard() {
  return (
    <div>
      <h1>Dashboard_page</h1>
    </div>
  )
}

// 以下会自动在对应页面的 <head> 中添加 <meta name="title" content="dashboard" />
export const metadata: Metadata = {
  title: 'dashboard',
}
 