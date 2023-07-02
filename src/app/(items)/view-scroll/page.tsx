import { Metadata } from "next"
import scssStyles from './index.module.scss';

export default function BackgroundCSS() {
  return (
    <div className={scssStyles.viewScroll}>
      <section className="g-img">IMG1</section>
      <section className="g-img">IMG2</section>
      <section className="g-img">IMG3</section>
    </div>
  )
}

// 以下会自动在对应页面的 <head> 中添加 <meta name="title" content="dashboard" />
export const metadata: Metadata = {
  title: 'loading css',
}
 