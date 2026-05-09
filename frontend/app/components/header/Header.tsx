"use client"
import React, { use, useRef, useState } from 'react'
import Container from '../Container'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { toast } from 'react-toastify';
import { Logs } from 'lucide-react'
import MobileList from '../mobile/MobileList'

const Header = () => {
  const barRef = useRef<HTMLDivElement  | null>(null)
  const [viewListMobile, setViewListMobile] = useState<boolean>(false);

  const text = () => {
    toast('Wow so easy !');
  }
  const path = usePathname(); // Use usePathname hook to get the current path
  const links = [
    { name: "الرئيسية", href: "/" },
    { name: "قائمة الأطباء", href: "/doctors" },
    { name: "نبذة عنا", href: "/about" },
    { name: "تواصل معنا", href: "/contact" },
  ];



  return (
    <Container className={`px-5 text-3xl h-18  font-bold border-b-[1.5px] border-gray-400 flexy relative  `}>
      <MobileList viewListMobile={viewListMobile} setViewListMobile={setViewListMobile} barRef={barRef}  />
      <div className={`flex items-center justify-start gap-1    `}>
        <Image src={"/site logo/medLogo.png"} alt='logo' width={50} height={50} className=' inline-block mr-2  ' />
        <Link href={"/"} className='text-primary 2xl:text-3xl   xl:text-3xl lg:text-lg sm:text-md   md:text-md'>ميديكا</Link>
      </div>
      <div className='2xl:flex justify-between items-center xl:flex lg:flex gap-4 md:flex  sm:hidden  hidden  0 '>
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="mx-2 text-gray-600 hover:text-primary 2xl:text-lg xl:text-sm lg:text-sm  md:text-xs   relative"
          >
            {link.name}
            {path === link.href && (
              <span className="absolute -bottom-1 left-0  h-0.5 w-8 bg-primary rounded-full"></span>
            )}
          </Link>
        ))}
        <Link href={"/admin-panel"} className='2xl:text-sm xl:text-sm lg:text-sm md:text-xs text-gray-800 border  px-4 py-1 rounded-2xl border-gray-300'> صفحة الأدمين</Link>
      </div>
      <div className=' flex '>
        <Link href={"/register"} className=' whitespace-nowrap 2xl:text-lg py-1 px-2 bg-primary rounded-[2px] text-white xl:text-sm lg:text-sm md:text-xs sm:text-xs text-xs'>تسجيل الدخول</Link>
      </div>
      <div ref={barRef} className='2xl:hidden xl:hidden lg:hidden  md:hidden block cursor-pointer' onClick={() => setViewListMobile(true)}>
        <Logs size={30} />
      </div>
    </Container>
  )
}

export default Header
