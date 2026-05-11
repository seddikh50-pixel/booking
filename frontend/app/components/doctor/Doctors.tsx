import React from 'react'
import Container from '../Container'
import Link from 'next/link'
import { getDoctors } from 'lib/cachedFetcher'
import DoctorWrapper from './DoctorWrapper'
import Image from 'next/image'
import { CircleSmall } from 'lucide-react'
import DoctorCard from './DoctorCard'


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
  return (
    <div>
      <Container className='mt-10'>
        <h1 className='2xl:text-4xl text-xl font-bold text-center text-gray-600'>الأطباء</h1>
        <div className='2xl:text-lg xl:text-md text-sm text-center mt-2 flex justify-center items-center flex-col  '>
          <p className=' 2xl:w-120 xl:w-120 lg:w-120 md:w-100 w-80 text-lg text-gray-600 rounded-md p-4'>
            نحن نقدم لك قائمة شاملة من الأطباء المتخصصين في مختلف المجالات الطبية
          </p>
          <div className='grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 px-10 w-full gap-5 '>
            {doctors.map((doc: Doctors) => {
              return  <div key={doc.id}  className='w-full flex justify-center items-center'><DoctorCard   doctor={doc} /> </div>
            })}
          </div>
          <Link href={"/doctors"} className='px-7 py-1 bg-gray-200 rounded-2xl text-gray-600 mt-5 inline-block '>المزيد</Link>

        </div>


      </Container>

    </div>
  )
}

export default Doctors
