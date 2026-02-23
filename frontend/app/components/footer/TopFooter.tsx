import React from 'react'
import Container from '../Container'
import Image from 'next/image'
import Link from 'next/link'

const TopFooter = () => {
    return (
        <div>
            <Container>
                <div className='flex items-start justify-between gap-2 py-2'>
                    <div className='flex flex-col gap-2 py-2'>
                        <div className='flexy max-w-20  '>
                            <Image src={"/site logo/medLogo.png"} alt='logo' width={50} height={50} className=' inline-block mr-2  ' />
                            <Link href={"/"} className='text-primary '>ميديكا</Link>
                        </div>
                        <p className='max-w-120 text-gray-500' >موقعنا منصة إلكترونية متخصصة في حجز مواعيد الأطباء بكل سهولة وسرعة. يتيح للمستخدمين البحث عن الأطباء حسب التخصص، الموقع، أو التقييمات، مع إمكانية الاطلاع على معلومات الطبيب وساعات العمل وحجز الموعد إلكترونيًا في دقائق معدودة.</p>
                    </div>

                    <div>
                        <h1 className='text-xl font-bold text-gray-600'>روابط سريعة</h1>
                        <div className='flex flex-col gap-1 mt-2'>
                            <Link href={"/"} className='text-gray-600 hover:text-primary text-lg'>الرئيسية</Link>
                            <Link href={"/alldoctors"} className='text-gray-600 hover:text-primary text-lg'>قائمة الأطباء</Link>
                            <Link href={"/about"} className='text-gray-600 hover:text-primary text-lg'>نبذة عنا</Link>
                            <Link href={"/contact"} className='text-gray-600 hover:text-primary text-lg'>تواصل معنا</Link>
                        </div>
                    </div>
                    <div>
                        <h1 className='text-xl font-boldv text-gray-600'>تواصل معنا</h1>
                        <div className='flex flex-col gap-1 mt-2'>
                            <p className='text-gray-600'>الهاتف: 123456789</p>
                            <p className='text-gray-600'>البريد الإلكتروني: info@medica.com</p>
                        </div>
                    </div>
                </div>
            </Container>

        </div>
    )
}

export default TopFooter
