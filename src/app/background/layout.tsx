import { Navigation } from "@/components/navigation";
import { navList } from "@/config/nav.config";
export default function BackgroundLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
      <section className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/6">
          <Navigation navLinks={navList}></Navigation>
        </div>
        <div className="w-full md:w-3/4">
          {children}
        </div>
      </section>
  )
}