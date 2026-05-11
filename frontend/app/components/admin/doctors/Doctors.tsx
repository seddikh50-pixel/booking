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

import DoctorRow from './DoctorRow';
import { useRouter } from 'next/navigation';

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
    console.log(doctors)
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
        console.log(data)
        if (!res.ok) {
            router.refresh()
            throw new Error('خطأ في الحذف ')

        }

        if (data.success) {
            setAllDoctors((prev) =>
                prev.map((d) =>
                    d.id === docId ?
                        { ...d, isAvailable: checked } :
                        d
                )
            )

        }


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

        const data = await res.json()


        if (data.success) {
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
                            <DoctorRow key={doc.id} doc={doc} deleteDoctor={deleteDoctor} changeStatus={changeStatus} />

                        )
                    })}
                </TableBody>
            </Table>
        </div>
    )
}

export default Doctors
