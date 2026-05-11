import React from 'react'
import Container from './Container'
import Image from 'next/image'
import Link from 'next/link'

const SecondBanner = () => {
    return (
        <div className='p-10'>
            <Container>
                <div className='w-full   2xl:h-90 sm:h-140 md:h-105 h-150 pt-5 items-center justify-between  rounded-lg bg-primary mt-10 flex  flex-col 2xl:flex-row xl:flex-row lg:flex-row md:flex-row 2xl:justify-around sm:justify-between sm:items-center md:items-center gap-4 relative px-5 mb-10'>
                    <div className=''>
                        <h1 className='2xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-3xl  font-bold text-white pb-5 '>احجز موعدك الآن</h1>
                        <p className='text-xl text-gray-200 max-w-96'>قم بحجز موعدك مع أفضل الأطباء في منطقتك بكل سهولة ويسر عبر موقعنا.</p>
                        <Link href={"/login"} className='px-7 py-2 bg-gray-200 rounded-2xl text-gray-600 mt-5 inline-block'>
                            إنشاء حساب  </Link>
                    </div>  
                    <div className='2xl:w-1/3 w-full sm:w-2/3 lg:w-1/3 md:w-3/5 relative 2xl:bottom-8 bottom-0 xl:bottom-0 lg:bottom-0 md:bottom-0   2xl:h-[120%] md:h-100   h-96  '>
                        <Image fill src={"/second.png"} alt='doctors' className='object-cover' />
                    </div>

                </div>
            </Container>

        </div>
    )
}

export default SecondBanner
