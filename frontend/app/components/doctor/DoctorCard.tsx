import { CircleSmall } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'


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

type Props = {
    doctor: Doctors
    // deleteDoctor: (id: string) => void
    // changeStatus: (checked: boolean, id: string) => void
}


const DoctorCard = ({doctor} : Props) => {
    return (
        <Link href={`/doctors/${doctor.id}`} className='sm:w-full w-3/4 2xl:w-full  xl:w-full lg:w-full md:w-full  border-green-300 border-[1px] rounded-lg overflow-hidden text-right pb-3 hover:-translate-y-2 transition-all duration-500 cursor-pointer  ' >
            <div className='relative w-full h-70 bg-green-100'>
                <Image src={doctor.image} fill alt='' className='object-cover' />
            </div>
            <div className='flex justify-start pr-4  pt-2'>

                {doctor.isAvailable ?
                    <div className='flex justify-center items-center gap-2'><CircleSmall fill='#00a803' size={12} color='#00a803' /><h1 className='text-[#00a803] text-sm font-bold'>يعمل </h1> </div> :
                    <div className='flex justify-center items-center gap-2'>  <CircleSmall fill='red' size={12} color='red' /><h2 className='text-sm text-red-700 font-bold'> لا يعمل </h2></div>}
            </div>
            <div className='pr-4 flex flex-col gap-2 '>
                <h1 className='font-bold text-[15px] text-gray-700 '>  د . {doctor.fullName} </h1>
                <h1 className='text-gray-600 whitespace-nowrap text-[12px]'>{doctor.specialization.name.slice(0,35)} </h1>

            </div>



        </Link>
    )
}

export default DoctorCard
