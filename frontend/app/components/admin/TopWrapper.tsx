"use client"
import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import { usePathname } from 'next/navigation'


type Props = {
  setIsAdmin: (value: boolean) => void;
};


const TopAndSideWrapper = ({setIsAdmin} : Props) => {
    const pathname = usePathname()
    return (
        <div className={`w-full  fixed top-0 right-0  ${pathname === '/admin-panel/login' ? 'hidden' : 'block'}`} >
            <Header setIsAdmin={setIsAdmin} />
        </div>
    )
}

export default TopAndSideWrapper
