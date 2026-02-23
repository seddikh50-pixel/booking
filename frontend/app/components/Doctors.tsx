import React from 'react'
import Container from './Container'
import Link from 'next/link'

const Doctors = () => {
  return (
    <div>
        <Container className='mt-10'>
        <h1 className='text-4xl font-bold text-center text-gray-600'>الأطباء</h1>
        <div className='text-lg text-center mt-2 flex justify-center items-center flex-col '>
            <p className=' w-120 text-gray-600 rounded-md p-4'>
               نحن نقدم لك قائمة شاملة من الأطباء المتخصصين في مختلف المجالات الطبية 
            </p>
            <h1> doctors from api </h1>
                <Link  href={"/doctors"} className='px-7 py-1 bg-gray-200 rounded-2xl text-gray-600 mt-5 inline-block '>المزيد</Link>

        </div>

    
        </Container>
      
    </div>
  )
}

export default Doctors
