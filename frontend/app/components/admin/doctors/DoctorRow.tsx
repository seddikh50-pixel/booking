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
import { Switch } from '@/components/ui/switch'
import { redirect, useRouter } from 'next/navigation';

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from '@/components/ui/button';
import Image from 'next/image';


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
    doc: Doctors
    deleteDoctor: (id: string) => void
    changeStatus: (checked: boolean, id: string) => void
}



const DoctorRow = ({ doc, deleteDoctor, changeStatus }: Props) => {
    return (
      
            <TableRow  className=''>
                <TableCell className="font-medium  h-20 w-10  relative "><Image  className='object-cover' fill alt='' src={doc.image} /></TableCell>
                <TableCell className="font-medium">{doc.fullName}</TableCell>
                <TableCell>{doc.specialization.name} </TableCell>
                <TableCell>{doc.experience} </TableCell>
                <TableCell>{doc.location} </TableCell>
                <TableCell>{doc.isAvailable ? <h1 className='bg-green-200 text-green-800 py-1 w-20 flex justify-center items-center rounded-[2px] '>متاح</h1> : <h1 className='bg-red-200 py-1 rounded-[2px] text-red-800 w-20 flex justify-center items-center  '>غير متاح</h1>} </TableCell>
                <TableCell className='  ' >
                    <div className="mb-5 w-30 flex justify-between items-center mt-4  ">
                        <Switch
                            defaultChecked={doc.isAvailable} onCheckedChange={(checked) => changeStatus(checked, doc.id)} dir="ltr" id="airplane-mode" className={"data-[state=checked]:bg-green-500 cursor-pointer data-[state=unchecked]:bg-red-500"} />
                    </div>
                </TableCell>
                <TableCell className='' >
                    <AlertDialog   >
                        <AlertDialogTrigger asChild>
                            <Button className='ml-2 cursor-pointer' variant="destructive">حذف الطبيب </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>تحذف التخصص ؟</AlertDialogTitle>
                                <AlertDialogDescription>
                                    لا يمكن التراجع عن هذا الإجراء. سيؤدي ذلك إلى حذف العنصر نهائياً من القائمة.                                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter className=''>
                                <AlertDialogAction onClick={() => deleteDoctor(doc.id)} className="!bg-red-500 cursor-pointer text-white hover:bg-destructive/90">
                                    حذف
                                </AlertDialogAction>
                                <AlertDialogCancel className='cursor-pointer'>الغاء</AlertDialogCancel>

                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                    {/* <button className='bg-red-500 ml-2 rounded-[2px] text-white px-2 py-1' onClick={() => deleteDoctor(doc.id)}>حذف الطبيب</button> */}
                    <button className='bg-green-500 rounded-[2px]  text-white px-2 py-1'>تعديل  الطبيب</button>
                </TableCell>
            </TableRow>

    )
}

export default DoctorRow
