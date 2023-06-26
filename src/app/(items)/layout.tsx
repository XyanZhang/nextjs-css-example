import { Navigation } from "@/components/navigation";
import { navList } from "@/config/nav.config";
import styles from './layout.module.css'

export default function Layout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  //  bg-[var(--theme1-3)]
  return (
      <section className={`flex flex-row`}>
        <div className={`w-200px max-h-screen overflow-y-scroll max-md:w-0 ${styles.asideTransition}`}>
          <Navigation navLinks={navList}></Navigation>
        </div>
        <div className="flex-1">
          <div className="min-h-screen border-2 border-[var(--theme1-1)]">
            <h1 className="font-bold text-[var(--theme1-3)] text-3xl text-center">xxx</h1>
            {children}
          </div>
        </div>
      </section>
  )
}