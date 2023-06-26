'use client'
 
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export function Navigation({ navLinks }: { navLinks: any[] }) {
  return (
    <div className="flex flex-col">
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
      className={`${isActive ? 'text-white' : 'text-[var(--theme1-2)]'} m-0.5 py-2 block rounded-md text-center font-semibold truncate bg-[var(--theme1-3)]`}
      href={link.url}
      key={link.title}
      target={link.target || '_self'}
    >
      {link.title}
    </Link>
  )
}