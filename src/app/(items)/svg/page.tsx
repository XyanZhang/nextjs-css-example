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
    </div>
  );
}

export const metadata: Metadata = {
  title: 'SVG Css',
};
