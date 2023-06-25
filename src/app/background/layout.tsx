import { Navigation } from "@/components/navigation";
import { navList } from "@/config/nav.config";

export default function BackgroundLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <Navigation navLinks={navList}></Navigation>
      {children}
    </section>
  )
}