import { Metadata } from "next"
import { navList } from "@/config/nav.config"

let currentNav = navList[0];
export default function BackgroundCSS(props:any) {
  return (
    <div className="background">
      
    </div>
  )
}

// 以下会自动在对应页面的 <head> 中添加 <meta name="title" content="dashboard" />
export const metadata: Metadata = {
  title: currentNav.title,
  description: currentNav.desp,
}
 