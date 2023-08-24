"use client";
import { Metadata } from "next"
import styles from './index.module.scss'

export default function ShadowUse() {

  return (
    <div className="h-screen">
      <div className={styles.shadowBox}></div>
    </div>
  )
}


// 以下会自动在对应页面的 <head> 中添加 <meta name="title" content="dashboard" />
export const metadata: Metadata = {
  title: 'ShadowUse',
}
 