"use client"
import React from 'react'
import { redirect, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';


interface AdminPanelProps {
  setIsAdmin?: (isAdmin: boolean) => void;
}
const Header = ({ setIsAdmin }: AdminPanelProps) => {


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
      <h1 className='text-2xl font-bold text-gray-700'> صفحة الإدارة</h1>
      <Button onClick={signOut} className='bg-red-700'>تسجيل الخروج</Button>
     
    </div>
  )
}

export default Header
