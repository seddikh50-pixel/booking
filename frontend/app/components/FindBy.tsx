import React from 'react'
import Container from './Container'
import Image from 'next/image'

const FindBy = () => {
    const listSpecialties = [
        {
            name: "طبيب عام ",
            image: '/specialties/doctor.png'
        },
        {
            name: " طبيب النساء والتوليد",
            image: '/specialties/Gynecologist.png'
        },
        {
            name: "طبيب الجلدية",
            image: '/specialties/dermatologist.png'
        },
        {
            name: "طبيب الأطفال",
            image: '/specialties/pediatrics.png'
        },
        {
            name: "طبيب الأعصاب",
            image: '/specialties/Neurologist Doctor.png'
        },
        {
            name: "طبيب الجهاز الهظمي",
            image: '/specialties/gastroenterologist.png'
        }

    ]


    return (
        <div className='mt-10'>
            <Container>
                <h1 className='text-4xl font-bold text-center text-gray-600'>ابحث حسب التخصص </h1>
                <div className='text-lg text-center mt-2 flex justify-center items-center '>
                    <p className=' w-120 text-gray-600 rounded-md p-4'>
                        استخدم محرك البحث الخاص بنا للعثور على الأطباء المتخصصين في مجالات مختلفة، وقم بحجز موعدك بكل سهولة.
                    </p>
                </div>

                <div className='flex justify-center items-center gap-10'>
                    {listSpecialties.map((item, index) => (
                        <div key={index} className='flex items-center gap-4 mt-6 flex-col hover:-translate-y-2 cursor-pointer transition-all duration-500 '>
            
                            <div className='relative w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center'>
                                <Image fill src={item.image} alt={item.name} className='w-16 h-16 object-contain' />
                            </div>
                            <h1 className='text-sm font-semibold text-gray-700'>{item.name}</h1>
                        </div>
                    ))}
                </div>
        </Container>


        </div>
    )
}

export default FindBy
