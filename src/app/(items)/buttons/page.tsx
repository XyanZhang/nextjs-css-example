
import { Metadata } from "next"

export default function ButtonsCSS() {
  return (
    <div>
      <iframe className="w-[100%] h-[85vh]" no-frameBorder src="https://cssfx.netlify.app/"></iframe>      
    </div>
  )
}

// 以下会自动在对应页面的 <head> 中添加 <meta name="title" content="dashboard" />
export const metadata: Metadata = {
  title: 'buttons css',
}
 