"use client";
import { Metadata } from "next"
import styles from './index.module.scss'

export default function ShadowUse() {

  return (
    <div className="h-screen mb-96">
      <div className={styles.shadowBox}></div>
      <br />
      <div className={styles.shadowText}>
        <p>浮雕效果</p>
      </div>
      <br />
      <div className={styles.shadowBtn}>
        <div>浮雕阴影</div><div>浮雕阴影</div>
      </div>
      <br />
      <div className={styles.colorShadow}>
        <span className={styles.avator}></span>
      </div>
      <br />
      <div className={styles.circleShadow}>
        <div className={styles.cicleColor}></div>
        <div className={styles.circleBlack}></div>
      </div>
      <br />
      <div className="flex justify-around h-40 items-center">
        <span className={styles.copyBox}></span>
        <span className={styles.copyDot}>标题</span>
        <span className={styles.cloud}></span>
        <span className={styles.multiBox}></span>
        <span className={styles.clickBtn}></span>
        <span className={styles.declineCircle}></span>
        <span className={styles.declineCircle2}></span>
      </div>
      <br />
      <div className="flex justify-around h-40 items-center">
        <span className={styles.curve}></span>
      </div>
    </div>
  )
}


// 以下会自动在对应页面的 <head> 中添加 <meta name="title" content="dashboard" />
export const metadata: Metadata = {
  title: 'ShadowUse',
}
 