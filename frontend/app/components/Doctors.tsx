import React from 'react'
import Container from './Container'
import Link from 'next/link'
import { getDoctors } from 'lib/cachedFetcher'
import DoctorWrapper from './DoctorWrapper'
import Image from 'next/image'
import { CircleSmall } from 'lucide-react'


interface Specialization {
  id: string;
  name: string;
  image: string;
}

interface Doctors {
  id: string
  fullName: string;
  email: string;
  phone: string;
  password: string;
  specialization: Specialization;
  bio: string;
  experience: string;
  consultationFee: string;
  location: string;
  isAvailable: boolean;
  image: string

}


const Doctors = async () => {
  const doctors = await getDoctors()
  console.log(doctors)
  return (
    <div>
      <Container className='mt-10'>
        <h1 className='text-4xl font-bold text-center text-gray-600'>الأطباء</h1>
        <div className='text-lg text-center mt-2 flex justify-center items-center flex-col '>
          <p className=' w-120 text-gray-600 rounded-md p-4'>
            نحن نقدم لك قائمة شاملة من الأطباء المتخصصين في مختلف المجالات الطبية
          </p>
          <div className='grid grid-cols-6 w-full gap-5 '>
            {doctors.map((doc: Doctors) => {
              return (
                <div className='w-full border-green-300 border-[1px] rounded-sm overflow-hidden text-right pb-3 hover:-translate-y-2 transition-all duration-500 cursor-pointer  ' key={doc.id} >
                  <div className='relative w-full h-70 bg-green-100'>
                    <Image src={doc.image} fill alt='' className='object-cover' />
                  </div>
                  <div className='flex justify-start pr-4  pt-2'>

                    {doc.isAvailable ?
                      <div className='flex justify-center items-center gap-2'><CircleSmall fill='#00a803' size={12} color='#00a803' /><h1 className='text-[#00a803] text-sm font-bold'>يعمل </h1> </div> :
                      <div className='flex justify-center items-center gap-2'>  <CircleSmall fill='red' size={12} color='red' /><h2 className='text-sm text-red-700 font-bold'> لا يعمل </h2></div>}
                  </div>
                  <div className='pr-4'>
                    <h1 className='font-bold'> د. {doc.fullName} </h1>
                    <h1 className='text-gray-600'>{doc.specialization.name} </h1>

                  </div>



                </div>
              )
            })}
          </div>
          <Link href={"/doctors"} className='px-7 py-1 bg-gray-200 rounded-2xl text-gray-600 mt-5 inline-block '>المزيد</Link>

        </div>


      </Container>

    </div>
  )
}

export default Doctors
