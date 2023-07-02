"use client"
import { Navigation } from "@/components/navigation";
import { navList } from "@/config/nav.config";
import { usePathname } from "next/navigation";
import styles from './layout.module.css'

export default function Layout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  // 获取当前path
  const pathname = usePathname();
  let currentNav = navList.find(item => pathname.startsWith(item.url));
  return (
      <section className={`flex flex-row`}>
        <div className={`w-200px max-h-screen overflow-y-scroll max-md:w-0 ${styles.asideTransition}`}>
          <Navigation navLinks={navList}></Navigation>
        </div>
        <div className="flex-1">
          <div className="max-h-screen overflow-y-scroll border-2 border-transparent">
            <h1 className="font-bold text-[var(--theme1-3)] text-3xl text-center">{currentNav?.title}</h1>
            {children}
          </div>
        </div>
      </section>
  )
}