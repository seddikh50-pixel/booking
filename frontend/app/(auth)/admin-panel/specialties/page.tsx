// "use client"
import Specialties from 'app/components/admin/specialties/Specialties'
import { getSpecialties } from 'lib/genFetcher'
import { CirclePlus } from 'lucide-react'
import Link from 'next/link'
// import React, { useEffect, useState } from 'react'

const page = async () => {
   const specialties = await getSpecialties()


  return (
    <div className='pt-20 pr-62 w-full'>
      <Specialties specialties={specialties} /> 
    </div>
  )
}

export default page
