import { Metadata } from "next"
import { navList } from "@/config/nav.config"
import "./background.css"

let currentNav = navList[0];
export default function BackgroundCSS(props:any) {
  return (
    <div className="background">
      <div className="min-h-screen border-2 border-[var(--theme1-1)]">
        <h1 className="font-bold text-[var(--theme1-3)] text-3xl text-center">{currentNav.title}</h1>
      </div>
    </div>
  )
}

// 以下会自动在对应页面的 <head> 中添加 <meta name="title" content="dashboard" />
export const metadata: Metadata = {
  title: currentNav.title,
  description: currentNav.desp,
}
 