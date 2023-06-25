export default function BackgroundLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  let routeParam = "some-route-param";
  return (
    <section>
      <nav></nav>
      {children}
    </section>
  )
}