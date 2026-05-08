import Doctors from 'app/components/admin/doctors/Doctors'
import { getDoctors } from 'lib/genFetcher'
import { CirclePlus } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const page = async() => {
  const doctors = await getDoctors()

  return (
    <div className='pt-20 pr-62 w-full'>

      <Link href='/admin-panel/doctors/add' className='bg-green-600 text-white max-w-38  py-1 cursor-pointer px-4 rounded-[2px] flex gap-2 '> <span>إضافة طبيب</span>  <CirclePlus /> </Link>
      <Doctors doctors={doctors} />

    </div>
  )
}

export default page

