"use client"
import React from 'react'
import Sidebar from './Sidebar'
import { usePathname } from 'next/navigation'

const SideWrapper = () => {
  const pathname = usePathname()
 
  return (
    <div className={`w-60 h-[calc(100vh-4rem)] border-l-2 fixed bottom-0 ${pathname === '/admin-panel/login' ? 'hidden' : ''} `} >
        <Sidebar />   
    </div>
  )
}

export default SideWrapper
