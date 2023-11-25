import { Metadata } from 'next';
import styles from './index.module.scss';

export default function TransitionCSS() {
  return (
    <div>
      <div className="flex justify-around h-40 items-center">
        <div className={styles['g-container']}>
          <div className={styles['g-button']}>
              Button
              <ul>
                  <li>>> Lorem, ipsum dolor sit amet?</li>
                  <li>>> Lorem, ipsum dolor sit amet?</li>
                  <li>>> Lorem, ipsum dolor sit amet?</li>
                  <li>>> Lorem, ipsum dolor sit amet?</li>
              </ul>
          </div>
        </div>
        <div className={styles['hover-trans']}>按钮hover</div>
      </div>
      <div className={styles['guaguale']}>

      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: 'Transition Css',
};
