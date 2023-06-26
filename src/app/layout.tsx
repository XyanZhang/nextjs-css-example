import './globals.css'

export const metadata = {
  title: 'beauty css demo',
  description: 'a website to show beauty css demo~',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
