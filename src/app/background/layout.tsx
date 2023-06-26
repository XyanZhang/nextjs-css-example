import { Navigation } from "@/components/navigation";
import { navList } from "@/config/nav.config";
import styles from './layout.module.css'

export default function BackgroundLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
      <section className="flex flex-row">
        <div className={`w-200px max-md:w-0 overflow-hidden ${styles.asideTransition}`}>
          <Navigation navLinks={navList}></Navigation>
        </div>
        <div className="flex-1">
          {children}
        </div>
      </section>
  )
}