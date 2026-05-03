import { CirclePlus } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='pt-20 pr-62'>
      
      <Link href='/admin-panel/doctors/add' className='bg-green-600 text-white  py-1 cursor-pointer px-4 rounded-[2px] flex gap-2 '> <span>إضافة طبيب</span>  <CirclePlus /> </Link>
      
    </div>
  )
}

export default page

