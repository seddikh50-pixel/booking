"use client"
import { X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import React, { HTMLElementType, useEffect, useRef } from 'react'

type MobileListProps = {
  viewListMobile: boolean;
  setViewListMobile: (viewListMobile: boolean) => void
  barRef : React.RefObject<HTMLDivElement | null>;
};

const MobileList = ({ viewListMobile, setViewListMobile ,barRef }: MobileListProps) => {
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
    <div ref={boxRef} className={` fixed   w-full h-screen bg-primary z-50 top-0 left-0  transition-all duration-1000 ${viewListMobile ? "-translate-x-30" : "-translate-x-full"}    `}>
      <X className='absolute right-5 top-5 ' onClick={() => setViewListMobile(false)} />

    </div>
  )
}

export default MobileList
