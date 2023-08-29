
import { Metadata } from "next"
import styles from './index.module.scss'

export default function AnimationCSS() {
  return (
    <div>
      <div className="flex justify-around h-60 items-center">
        <div className={styles.loadingDelay}>
          <span className={styles.item}></span>
          <span className={styles.item}></span>
          <span className={styles.item}></span>
        </div>
      </div>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Animation Css',
}
 