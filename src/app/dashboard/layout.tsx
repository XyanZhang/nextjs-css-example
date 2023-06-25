import Template from "../template"

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  let routeParam = "some-route-param";
  return (
    <section>
      <nav>哈哈哈</nav>
      <Template key={routeParam}>
        {children}
      </Template>
    </section>
  )
}