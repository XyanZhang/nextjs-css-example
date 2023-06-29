import { Metadata } from "next"
import { navList } from "@/config/nav.config"
import styles from './index.module.css'
import scssStyles from './index.module.scss';

let currentNav = navList[0];
export default function BackgroundCSS(props:any) {
  return (
    <div className="background p-10">
      <ul className={styles.base}>
        <li className="bg-[black]"></li>
        <li className="bg-gradient-to-b from-white to-black"></li>
        <li className="bg-gradient-radial from-white to-black"></li>
        <li className="bg-gradient-conic from-white to-black"></li>
      </ul>
      <br />
      <ul className={styles.base}>
        <li className="bg-[black]"></li>
        {/* border: 2px solid #000; background: linear-gradient(#fff 0%, #fff 50%, #f00 50%, #f00 100%); */}
        {/* https://tailwindcss.com/docs/gradient-color-stops */}
        <li className="border-2 border-black bg-gradient-to-b from-white from-50%  to-black to-50%"></li>
        <li className="border-black bg-gradient-to-br from-white from-50%  to-black to-50%"></li>
        <li className="border-black bg-gradient-to-br from-transparent from-50%  to-black to-50%"></li>
        <li className="border-black bg-gradient-to-br from-white from-50%  to-transparent to-50%"></li>
        <li className="bg-gradient-radial from-white to-black"></li>
        <li className="bg-gradient-conic from-white to-black"></li>
        <li className={`bg-black ${styles.noStripe}`}></li>
        <li className={`bg-black ${styles.cycleStripe}`}></li>
        <li className={`bg-black ${styles['wave-button']}`}></li>
        <li className={`bg-black ${styles['flow-wave']}`}></li>
      </ul>
      <br />
      <ul className={styles.base}>
        <li className={`rounded-[50%] ${styles.colorPanel}`}></li>
        <li className={`rounded-[50%] ${scssStyles.colorPanelBetter}`}></li>
      </ul>
    </div>
  )
}

// 以下会自动在对应页面的 <head> 中添加 <meta name="title" content="dashboard" />
export const metadata: Metadata = {
  title: currentNav.title,
  description: currentNav.desp,
}
 