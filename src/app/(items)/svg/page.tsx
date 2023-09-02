import { Metadata } from 'next';
import styles from './index.module.scss';

export default function SVGCss() {
  return (
    <div>
      <div className="flex justify-around h-60 items-center">
        <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
          <rect
            width="250"
            height="50"
            stroke="#673ab7"
            stroke-width="2"
            fill="transparent"
          />
        </svg>
        <svg
          height="100%"
          width="100%"
          viewBox="-5 -5 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="50"
            cy="50"
            r="50"
            stroke="#000"
            stroke-width="1"
            fill="deeppink"
          />
        </svg>
        <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
          <rect className={styles.rect} />
        </svg>
      </div>
      <div className={'flex justify-around h-60 items-center ' + styles.svgs}>
        <svg xmlns="http://www.w3.org/2000/svg">
          <rect className={styles.rectSp1} />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg">
          <rect className={styles.rectSp2} />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg">
          <rect className={styles.rectSp3} />
        </svg>
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: 'SVG Css',
};

// SVG 中，stroke-dasharray 和 stroke-dashoffset。

// stroke-dasharray：值是一组数组，没数量上限，每个数字交替表示边框与间隔的宽度；
// stroke-dashoffset：表示的是边框线的偏移量。
