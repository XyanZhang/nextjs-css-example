"use client";
import { Metadata } from "next"
import styles from './index.module.scss'

export default function ShadowUse() {

  return (
    <div className="h-screen">
      <div className={styles.shadowBox}></div>
      <br />
      <div className={styles.shadowText}>
        <p>浮雕效果</p>
      </div>
      <br />
      <div className={styles.shadowBtn}>
        <div>浮雕阴影</div><div>浮雕阴影</div>
      </div>
    </div>
  )
}


// 以下会自动在对应页面的 <head> 中添加 <meta name="title" content="dashboard" />
export const metadata: Metadata = {
  title: 'ShadowUse',
}
 