'use client'
 
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export function Navigation({ navLinks }: { navLinks: any[] }) {
  return (
    <div className="flex flex-col h-screen bg-gray-200">
      {navLinks.map((link, index) => {
        return <NavItem key={link.title+index} link={link}></NavItem>
      })}
    </div>
  )
}

function NavItem({ link }: { link: any}) {
  const pathname = usePathname()
  const isActive = pathname.startsWith(link.url)
  return (
    <Link
      className={`${isActive ? 'text-red-800' : 'text-black'} m-0.5 block py-2 rounded-2 text-center font-semibold truncate`}
      href={link.url}
      key={link.title}
      target={link.target || '_self'}
    >
      {link.title}
    </Link>
  )
}