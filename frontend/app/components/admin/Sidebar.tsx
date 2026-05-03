"use client"
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
const Sidebar = () => {
 const path = usePathname()




  const links = [
    { name: 'لوحة التحكم', href: '/admin-panel' },
    { name: 'المواعيد', href: '/admin-panel/appointments' },
    { name: 'الأطباء', href: '/admin-panel/doctors' },
    { name: 'المرضى', href: '/admin-panel/patients' },
    { name: 'التخصصات', href: '/admin-panel/specialties' },
  ]
  return (
    <div>
      <div className='pt-5'>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`block py-2 px-4  ${path === link.href ? 'bg-black text-white' : ''}`}
          >
            {link.name}
          </Link>
        ))}
        
      </div>
    </div>
  )
}

export default Sidebar

