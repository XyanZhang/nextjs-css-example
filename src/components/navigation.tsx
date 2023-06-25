'use client'
 
import { usePathname } from 'next/navigation'
import Link from 'next/link'

export function Navigation({ navLinks }: { navLinks: any[] }) {
  const pathname = usePathname()
 
  return (
    <>
      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.url)
        console.log(isActive)
        return (
          <Link
            className={isActive ? 'text-red-800' : 'text-black'}
            href={link.url}
            key={link.title}
          >
            {link.title}
          </Link>
        )
      })}
    </>
  )
}