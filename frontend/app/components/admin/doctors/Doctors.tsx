import Image from 'next/image';
import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"


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
    doctors: Doctors[]
}

const Doctors = ({ doctors }: Props) => {
    return (
        <div className='mt-10'>

            <Table className=''>
                <TableCaption>A list of your recent invoices.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px] text-right">الصورة</TableHead>

                        <TableHead className="text-right w-[100px]">الاسم</TableHead>
                        <TableHead className='text-right w-[100px]'>التخصص</TableHead>
                        <TableHead className="text-right w-[100px]">سنوات الخبرة </TableHead>
                        <TableHead className="text-right w-[100px]">المكان</TableHead>
                         <TableHead className="text-right w-[100px]">الحالة</TableHead>
                        <TableHead className="text-right w-[100px]">الاجراءات</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody className=''>


                    {doctors.map((doc) => {
                        return (
                            <TableRow key={doc.id} className=''>
                                <TableCell className="font-medium "><Image width={70} height={50} alt='' src={doc.image} /></TableCell>
                                <TableCell className="font-medium">{doc.fullName}</TableCell>
                                <TableCell>{doc.specialization.name} </TableCell>
                                <TableCell>{doc.experience} </TableCell>
                                <TableCell>{doc.location} </TableCell>
                                <TableCell>{doc.isAvailable ? <h1 className='bg-green-200 text-green-800 w-20 flex justify-center items-center  '>متاح</h1> : <h1 className='bg-red-200 text-red-800 w-20 flex justify-center items-center  '>غير متاح</h1>} </TableCell>
                                <TableCell > <button className='bg-red-700 text-white px-2 py-1'>حذف الطبيب</button></TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </div>
    )
}

export default Doctors
