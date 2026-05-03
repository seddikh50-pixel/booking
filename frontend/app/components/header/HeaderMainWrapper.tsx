"use client"
import React from 'react'
import Header from './Header'
import { usePathname } from 'next/navigation'

const HeaderMainWrapper = () => {
  const path = usePathname();
  return (
    <div className={`${path === "/register" ? "hidden" : "block"} `}>
      <Header />
    </div>
  )
}

export default HeaderMainWrapper
