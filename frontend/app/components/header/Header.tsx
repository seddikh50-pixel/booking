"use client"
import React, { use } from 'react'
import Container from '../Container'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const Header = () => {
  const path = usePathname(); // Use usePathname hook to get the current path
  console.log({path})
  const links = [
    { name: "الرئيسية", href: "/" },
    { name: "قائمة الأطباء", href: "/doctors" },
    { name: "نبذة عنا", href: "/about" },
    { name: "تواصل معنا", href: "/contact" },
  ];

 

  return (
    <Container className=' text-3xl h-18  font-bold border-b-[1.5px] border-gray-400 flexy '>
      <div className='flexy max-w-20  '>

        <Image src={"/site logo/medLogo.png"} alt='logo' width={50} height={50} className=' inline-block mr-2  ' />
        <Link href={"/"} className='text-primary '>ميديكا</Link>

      </div>
      <div className='flexy gap-4'>
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="mx-2 text-gray-600 hover:text-primary text-lg relative"
          >
            {link.name}
           {path === link.href && (
              <span className="absolute -bottom-1 left-3  h-0.5 w-10 bg-primary rounded-full"></span>
            )}
          </Link>
        ))}
        <Link href={"/admin-panel"} className='text-sm text-gray-800 border  px-4 py-1 rounded-2xl border-gray-300'> صفحة الأدمين</Link>
      </div>
      <div>
        <Link href={"/login"} className='text-sm text-white bg-primary px-6 py-1 rounded-2xl'>تسجيل الدخول</Link>
      </div>
    </Container>
  )
}

export default Header
