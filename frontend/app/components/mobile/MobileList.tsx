"use client"
import { X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { link } from 'node:fs';
import React, { HTMLElementType, useEffect, useRef } from 'react'

type MobileListProps = {
  viewListMobile: boolean;
  setViewListMobile: (viewListMobile: boolean) => void
  barRef: React.RefObject<HTMLDivElement | null>;
};

const MobileList = ({ viewListMobile, setViewListMobile, barRef }: MobileListProps) => {
  const boxRef = useRef<HTMLDivElement | null>(null);

  const path = usePathname(); // Use usePathname hook to get the current path
  const links = [
    { name: "الرئيسية", href: "/" },
    { name: "قائمة الأطباء", href: "/doctors" },
    { name: "نبذة عنا", href: "/about" },
    { name: "تواصل معنا", href: "/contact" },
  ];

  useEffect(() => {
    const haneleClick = (e: MouseEvent) => {
      const box = boxRef.current
      if (!box) return
      if (!box.contains(e.target as Node) && !barRef.current?.contains(e.target as Node)) {
        setViewListMobile(false)

      }

    }

    document.addEventListener('click', haneleClick)

    return () => {
      removeEventListener('click', haneleClick)
    }
  }, []);


  return (
    <div className={`fixed left-0 z-50 top-0 w-full h-screen bg-black/50  transition-all duration-400   ${viewListMobile ? "-translate-x-0" : "-translate-x-full"}`}>
      <div ref={boxRef} className={` fixed   w-full h-screen bg-primary z-50 top-0 left-0  transition-all duration-1000 ${viewListMobile ? "-translate-x-20" : "-translate-x-full"}    `}>
      <X className='absolute text-amber-100 right-5 top-5 ' onClick={() => setViewListMobile(false)} />
      
         <div className='flex flex-col mr-10 mt-15 gap-5'>
          {links.map((l,index)=> {
            return(
              <Link key={index} href={l.href} className='text-lg text-white' onClick={()=> setViewListMobile(false)} > {l.name}</Link>
            )
          })}
         </div>
    </div>
    </div>
      )
}

      export default MobileList
