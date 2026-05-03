"use client"
import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import { usePathname } from 'next/navigation'

const TopAndSideWrapper = () => {
    const pathname = usePathname()
    return (
        <div className={`w-full  fixed top-0 right-0  ${pathname === '/admin-panel/login' ? 'hidden' : 'block'}`} >
            <Header />
        </div>
    )
}

export default TopAndSideWrapper
