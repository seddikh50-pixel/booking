"use client"
import React from 'react'
import { redirect, useRouter } from 'next/navigation';


interface AdminPanelProps {
  setIsAdmin?: (isAdmin: boolean) => void;
}
const Header = ({ setIsAdmin }: AdminPanelProps) => {
  const router = useRouter();


  const signOut = async () => {
    const res = await fetch("http://localhost:4444/api/logout", {
      method: "POST",
      credentials: "include"
    });
    const data = await res.json()
    console.log(res.ok)
    if (res.ok) {
      setIsAdmin?.(false)
    }
  }
  return (
    <div className='flex justify-between items-center px-10 h-16 border-b'>
      <h1> صفحة الإدارة</h1>
      <button onClick={signOut} className='bg-red-500 text-white rounded-sm px-2 py-1'>تسجيل الخروج</button>
    </div>
  )
}

export default Header
