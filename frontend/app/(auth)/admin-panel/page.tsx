"use client"
import Sidebar from "app/components/admin/Sidebar"
import Admin from "../../components/admin/Admin"
import Header from "app/components/admin/Header"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { usePathname } from "next/navigation"



const page = () => {
  const router = useRouter();





  return (
    <div className='flex items-center justify-center w-full   flex-col pt-20 pr-55  '>
      <Admin /> 
    </div>
  )
}

export default page
