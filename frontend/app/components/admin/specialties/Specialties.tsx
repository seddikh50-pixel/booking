"use client"
import { CirclePlus } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'

const API_URL = process.env.NEXT_PUBLIC_API_URL;

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"


interface Specialties {
    id: string;
    name: string;
    image: string
}


type Props = {
    specialties: Specialties[]
}
const Specialties = ({ specialties }: Props) => {
    const [allSpecialties, setAllSpecialties] = useState<Specialties[]>(specialties);



    const deleteSpecialty = async (spId: string) => {
        console.log(spId)
        const res = await fetch(`${API_URL}/specialty/delete_specialty`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                specialtyId: spId
            })
        })

        const data = await res.json()
        console.log(data)
        if (data.success) {
            setAllSpecialties((prev) =>
                prev.filter((s) =>
                    s.id !== spId
                )
            )
        }

    }
    return (
        <div>

            <Link href='/admin-panel/specialties/add' className='bg-green-600 text-white  py-1 cursor-pointer px-4 rounded-[2px] flex gap-2 max-w-30 whitespace-nowrap '> <span>إضافة تخصص</span>  <CirclePlus /> </Link>


            <Table className='overflow-hidden'>
                <TableCaption>قائمة الأطباء</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px] text-right">الصورة</TableHead>
                        <TableHead className="text-right w-[100px]">الاسم</TableHead>
                        <TableHead className="text-right w-[100px]">الاجراءات</TableHead>


                    </TableRow>
                </TableHeader>
                <TableBody className=''>


                    {allSpecialties.map((sp) => {
                        return (
                            <TableRow key={sp.id} className=''>
                                <TableCell className="font-medium "><Image width={70} height={50} alt='' src={sp.image} /></TableCell>
                                <TableCell className="font-medium">{sp.name}</TableCell>
                                <TableCell className='' >
                                    <button className='bg-red-500 ml-2 rounded-[2px] text-white px-2 py-1' onClick={() => deleteSpecialty(sp.id)}>حذف الطبيب</button>
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

export default Specialties
