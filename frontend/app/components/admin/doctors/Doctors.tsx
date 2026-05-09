"use client"
import Image from 'next/image';
import React, { useState } from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Switch } from '@/components/ui/switch'
import { redirect, useRouter } from 'next/navigation';

const API_URL = process.env.NEXT_PUBLIC_API_URL;



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
    const [allDoctors, setAllDoctors] = useState<Doctors[]>(doctors)
    // const [isAvailable, setIsAvailable] = useState<Doctors[]>(doctors)

    const router = useRouter()



    const changeStatus = async (checked: boolean, docId: string) => {
        const res = await fetch(`${API_URL}/doctor/change_status`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                isAvailable: checked,
                doctorId: docId
            })
        })
        const data = await res.json();
        if (!res.ok) {
            router.refresh()
            throw new Error('خطأ في الحذف ')

        }
        setAllDoctors((prev) =>
            prev.map((d) =>
                d.id === docId ?
                    { ...d, isAvailable: checked } :
                    d
            )
        )
        console.log(allDoctors)

    }


    const deleteDoctor = async (docId: string) => {
        const res = await fetch(`${API_URL}/doctor/delete_doctor`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                doctorId: docId
            })
        })
      
        const data  = await res.json()

      
        if(data.success){
              setAllDoctors((prev) =>
            prev.filter((d) =>
                d.id !== docId
            ))
        }
    }
    return (
        <div className='mt-10'>

            <Table className=''>
                <TableCaption>قائمة الأطباء</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px] text-right">الصورة</TableHead>

                        <TableHead className="text-right w-[100px]">الاسم</TableHead>
                        <TableHead className='text-right w-[100px]'>التخصص</TableHead>
                        <TableHead className="text-right w-[100px]">سنوات الخبرة </TableHead>
                        <TableHead className="text-right w-[100px]">المكان</TableHead>
                        <TableHead className="text-right w-[100px]">الحالة</TableHead>
                        <TableHead className="text-right w-[100px]">تغيير الحالة </TableHead>
                        <TableHead className="text-right w-[100px]">الاجراءات</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody className=''>


                    {allDoctors.map((doc) => {
                        return (
                            <TableRow key={doc.id} className=''>
                                <TableCell className="font-medium "><Image width={70} height={50} alt='' src={doc.image} /></TableCell>
                                <TableCell className="font-medium">{doc.fullName}</TableCell>
                                <TableCell>{doc.specialization.name} </TableCell>
                                <TableCell>{doc.experience} </TableCell>
                                <TableCell>{doc.location} </TableCell>
                                <TableCell>{doc.isAvailable ? <h1 className='bg-green-200 text-green-800 py-1 w-20 flex justify-center items-center rounded-[2px] '>متاح</h1> : <h1 className='bg-red-200 py-1 rounded-[2px] text-red-800 w-20 flex justify-center items-center  '>غير متاح</h1>} </TableCell>
                                <TableCell className='  ' >
                                    <div className="mb-5 w-30 flex justify-between items-center mt-4 ">
                                        <Switch
                                            defaultChecked={doc.isAvailable} onCheckedChange={(checked) => changeStatus(checked, doc.id)} dir="ltr" id="airplane-mode" className={"data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-red-500"} />
                                    </div>
                                </TableCell>
                                <TableCell className='' >
                                    <button className='bg-red-500 ml-2 rounded-[2px] text-white px-2 py-1' onClick={() => deleteDoctor(doc.id)}>حذف الطبيب</button>
                                    <button className='bg-green-500 rounded-[2px]  text-white px-2 py-1'>تعديل  الطبيب</button>
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </div>
    )
}

export default Doctors
