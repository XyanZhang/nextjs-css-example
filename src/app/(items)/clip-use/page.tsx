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
      <br />
      <ul className={styles.base}>
        <li className={styles.aniBorder}></li>
        <li className={styles.btnAniClip}>clip</li>
        <li>
          <div data-text="Text Clip Crack" className={styles.clipText}><span>Text Clip Crack</span></div>
        </li>
      </ul>
      <br />
      <div className={styles.btnOuter}>
      {/* 利用tailwind写一个按钮样式 */}
      <button className="border">
        点击
      </button>
      </div>
    </div>
  )
}

// 以下会自动在对应页面的 <head> 中添加 <meta name="title" content="dashboard" />
export const metadata: Metadata = {
  title: 'clip use',
}
 