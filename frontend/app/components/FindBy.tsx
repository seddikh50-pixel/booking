import React from 'react'
import Container from './Container'
import Image from 'next/image'

type Specialties = {
    id: string,
    name: string,
    image: string
}

type Props = {
    specialties: Specialties[]
}

const FindBy = ({ specialties }: Props) => {



    return (
        <div className='mt-10'>
            <Container>
                <h1 className='2xl:text-4xl text-2xl font-bold text-center text-gray-600'>ابحث حسب التخصص </h1>
                <div className='2xl:text-lg xl:text-lg lg:text-lg md:text-lg text-sm  text-center mt-2 flex justify-center items-center '>
                    <p className=' w-120 text-gray-600 rounded-md p-4'>
                        استخدم محرك البحث الخاص بنا للعثور على الأطباء المتخصصين في مجالات مختلفة، وقم بحجز موعدك بكل سهولة.
                    </p>
                </div>

                <div className='w-full flex justify-center items-center'>
                    <div className='grid w-3/4 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-3 grid-cols-2   justify-center items-center gap-10'>
                        {specialties.map((item, index) => (
                            <div key={index} className='flex items-center justify-center gap-4 mt-6 flex-col hover:-translate-y-2 cursor-pointer transition-all duration-500 '>

                                <div className='relative w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center'>
                                    <Image fill src={item.image} alt={item.name} className='w-16 h-16 object-contain' />
                                </div>
                                <h1 className='text-sm font-semibold text-gray-700'>{item.name}</h1>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>


        </div>
    )
}

export default FindBy
