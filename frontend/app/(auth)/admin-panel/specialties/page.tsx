// "use client"
import { getSpecialties } from 'lib/genFetcher'
import { CirclePlus } from 'lucide-react'
import Link from 'next/link'
// import React, { useEffect, useState } from 'react'

const page = async () => {
   const specialties = await getSpecialties()
  // const [specialties, setSpecialties] = useState<any[]>([])

  // useEffect(() => {

  //   try {
  //     const getAllSpecialties = async () => {
  //       const res = await fetch("http://localhost:4444/api/specialty/specialties", {
  //         method: "GET",
  //       });
  //       if (res.ok) {
  //         const data = await res.json();
  //         setSpecialties(data.specialties)
  //       }
  //     }

  //     getAllSpecialties()
  //   } catch (error) {
  //     console.log(error)
  //   }



  // }, []);
  return (
    <div className='pt-20 pr-62'>
      <Link href='/admin-panel/specialties/add' className='bg-green-600 text-white  py-1 cursor-pointer px-4 rounded-[2px] flex gap-2 '> <span>إضافة تخصص</span>  <CirclePlus /> </Link>
      {
        specialties.length  ? 
        specialties.map((spec : any) => {
        return (
          <div key={spec.id}>
            <h1>{spec.name} </h1>

          </div>
        )
      })
      : 
      <h1>لا توجد تخصصات </h1>
      }

    </div>
  )
}

export default page
