import React from 'react'
import Container from './Container'
import Image from 'next/image'
import Link from 'next/link'

const SecondBanner = () => {
    return (
        <div>
            <Container>
                <div className='w-full h-90 rounded-lg bg-primary mt-10 flex items-center justify-around  gap-4 relative px-5 mb-40'>

                    <div>
                        <h1 className='text-6xl font-bold text-white pb-5'>احجز موعدك الآن</h1>
                        <p className='text-xl text-gray-200 max-w-96'>قم بحجز موعدك مع أفضل الأطباء في منطقتك بكل سهولة ويسر عبر موقعنا.</p>
                        <Link href={"/login"} className='px-7 py-2 bg-gray-200 rounded-2xl text-gray-600 mt-5 inline-block'>
                            إنشاء حساب  </Link>
                    </div>
                    <div className='w-1/3 relative bottom-9   h-[120%] '>
                        <Image fill src={"/second.png"} alt='doctors' className='object-cover' />
                    </div>


                </div>
            </Container>

        </div>
    )
}

export default SecondBanner
