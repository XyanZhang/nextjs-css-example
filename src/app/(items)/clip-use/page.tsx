"use client";
import { Metadata } from "next"
import styles from './index.module.scss'

export default function ClipUse() {
  return (
    <div className="text-center">
      <ul className={styles.base}>
        <li className={styles.circle}></li>
        <li className={styles.polygon}></li>
        <li className={styles.clipNotching}></li>
        <li className={styles.arrow}></li>
        <li className={styles.arrowLeft}>
          <div></div>
        </li>
      </ul>
    </div>
  )
}

// 以下会自动在对应页面的 <head> 中添加 <meta name="title" content="dashboard" />
export const metadata: Metadata = {
  title: 'clip use',
}
 