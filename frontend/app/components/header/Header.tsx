import React from 'react'
import Container from '../Container'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  const links = [
    { name: "الرئيسية", href: "/" },
    { name: "قائمة الأطباء", href: "/alldoctors" },
    { name: "نبذة عنا", href: "/about" },
    { name: "تواصل معنا", href: "/contact" },
  ];
  return (
    <Container className=' text-3xl h-18  font-bold border-b-[1.5px] border-gray-400 flexy '>
      <div className='flexy max-w-20  '>

        <Image src={"/site logo/medLogo.png"} alt='logo' width={50} height={50} className=' inline-block mr-2  ' />
        <Link href={"/"} className='text-primary'>ميديكا</Link>

      </div>
      <div className='flexy gap-4'>
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="mx-2 text-gray-600 hover:text-primary text-sm"
          >
            {link.name}
          </Link>
        ))}
        <Link href={"/login"} className='text-sm text-gray-800 border  px-4 py-1 rounded-2xl border-gray-300'> صفحة الأدمين</Link>
      </div>
      <div>
        <Link href={"/login"} className='text-sm text-gray-800 bg-primary px-6 py-1 rounded-2xl'>تسجيل الدخول</Link>
      </div>
    </Container>
  )
}

export default Header
