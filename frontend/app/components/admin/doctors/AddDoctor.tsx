"use client"
import { Switch } from '@/components/ui/switch'
import { CirclePlus, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { toast } from 'react-toastify'
import {
    Field,
    FieldDescription,
    FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

import { Textarea } from "@/components/ui/textarea"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"




const API_URL = process.env.NEXT_PUBLIC_API_URL;



type FormData = {
    fullName: string;
    email: string;
    phone: string;
    password: string;
    specialization: string;
    bio: string;
    experience: string;
    consultationFee: string;
    location: string;
    isAvailable: boolean;
};


interface Specialties {
    id: string;
    name: string;
    image: string
}

type Props = {
    specialties: Specialties[];
};



const AddDoctor = ({ specialties }: Props) => {

    const [file, setFile] = useState<File | null>(null)

    const [formData, setFormData] = useState<FormData>({
        fullName: '',
        email: '',
        phone: '',
        password: '',
        specialization: '',
        bio: '',
        experience: '',
        consultationFee: '',
        location: '',
        isAvailable: true
    });
    const [preview, setPreview] = useState("/add-doctor.jpg")
    const [cancelImage, setCancelImage] = useState(false)


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        console.log({ name: e.target.name })
        const selectedFile = (e.target as HTMLInputElement).files?.[0];
        if (selectedFile) {
            const image = URL.createObjectURL(selectedFile)
            setPreview(image)
            setCancelImage(true)
            setFile(selectedFile)
        }
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    }



    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        e.preventDefault();
        try {
            console.log(formData)
            const form = new FormData();
            Object.entries(formData).map(([key, value]) =>

                form.append(key, String(value))

            )

            if (file) {
                form.append("image", file)
            }

            const res = await fetch(`${API_URL}/doctor/add`, {
                method: "POST",
                body: form,
                credentials: "include",

            });
            const data = await res.json();
            if (data.success) return toast.success(data.msg)
            else {
                toast.error(data.msg)
                toast.error(data.errors.bio._errors)
            }


        } catch (error) {
            console.log(error)
        }

    }



    return (
        <div>

            <h1 className='pb-10 text-4xl'>    إضافة طبيب جديد</h1>
            <form onSubmit={handleSubmit} className='w-2/3  '>
                {/* الاسم */}
                <div className='flex gap-10 w-full '>
                    <div className='w-1/2 '>
                        <div className='mb-5'>
                            <Field>
                                <FieldLabel htmlFor="fullName">
                                    الاسم الكامل
                                </FieldLabel>

                                <Input
                                    onChange={handleChange}
                                    id="fullName"
                                    name="fullName"
                                    type="text"
                                    placeholder=" الاسم الكامل"
                                    className=""
                                />


                            </Field>
                        </div>

                        {/* البريد */}
                        <div className='mb-5'>

                            <Field>
                                <FieldLabel htmlFor="email">
                                    البريد الإلكتروني
                                </FieldLabel>

                                <Input
                                    onChange={handleChange}
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="email@example.com"
                                    className=""
                                />

                                {/* <FieldDescription>
                                    أدخل البريد الإلكتروني الخاص بك
                                </FieldDescription> */}
                            </Field>
                        </div>

                        {/* الهاتف */}
                        <div className='mb-5'>

                            <Field>
                                <FieldLabel htmlFor="phone">
                                    رقم الهاتف
                                </FieldLabel>

                                <Input
                                    onChange={handleChange}
                                    id="phone"
                                    name="phone"
                                    type="text"
                                    placeholder=" رقم الهاتف"
                                    className=""
                                />
                                {/* 
                                <FieldDescription>
                                    أدخل الاسم الكامل
                                </FieldDescription> */}
                            </Field>
                        </div>

                        {/* كلمة المرور */}
                        <div className='mb-5'>

                            <Field>
                                <FieldLabel htmlFor="phone">
                                    كلمة السر
                                </FieldLabel>

                                <Input
                                    onChange={handleChange}
                                    id="password"
                                    name="password"
                                    type="password"
                                    placeholder="كلمة السر "
                                    className=""
                                />

                            </Field>
                        </div>

                        {/* الاختصاص */}
                        <div  >


                            <Select dir='rtl'
                                onValueChange={(value) =>
                                    handleChange(
                                        {
                                            target: {
                                                name: "specialization",
                                                value
                                            }
                                        } as React.ChangeEvent<HTMLInputElement>
                                    )}
                            >
                                <SelectTrigger className="w-full max-w-48">
                                    <SelectValue placeholder="اختر التخصص" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>التخصصات</SelectLabel>


                                        {specialties.map((sp) => {
                                            return (
                                                <SelectItem key={sp.id} value={sp.id}>{sp.name} </SelectItem>
                                            )
                                        })}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div className='w-1/2 '>
                        {/* السيرة */}
                        <div>

                            <label htmlFor="bio">السيرة</label>
                            <Textarea
                                onChange={handleChange}
                                id="bio"
                                name="bio"
                                className="block mb-5 border-gray-300 border-2 rounded-md py-1 px-4 w-full  mt-2"
                                placeholder="نبذة عن الطبيب" />
                        </div>

                        {/* سنوات الخبرة */}
                        <div className='mb-5'>
                            <Field>
                                <FieldLabel htmlFor="experience">
                                    سنوات الخبرة
                                </FieldLabel>

                                <Input
                                    onChange={handleChange}
                                    id="experience"
                                    name="experience"
                                    type="number"
                                    placeholder="5"
                                    className=""
                                />
                            </Field>
                        </div>

                        {/* سعر الاستشارة */}
                        <div className='mb-5'>
                            <Field>
                                <FieldLabel htmlFor="consultationFee">
                                    سعر الاستشارة
                                </FieldLabel>
                                <Input
                                    onChange={handleChange}
                                    id="consultationFee"
                                    name="consultationFee"
                                    step="0.01"
                                    type="number"
                                    placeholder="2000"
                                    className=""
                                />
                            </Field>
                        </div>

                        {/* الموقع */}
                        <div className='mb-5'>
                                        
                                  <Field>
                                <FieldLabel htmlFor="location">
                                 العنوان
                                </FieldLabel>
                                <Input
                                    onChange={handleChange}
                                    id="location"
                                    name="location"
                                    step="0.01"
                                    type="text"
                                    placeholder="موقع الطبيب"
                                    className=""
                                />
                            </Field>
                        </div>

                        {/* متاح أو لا */}
                        <div className="mb-5 w-30 flex justify-between items-center    ">

                            <label htmlFor="airplane-mode">  متاح للعمل </label>
                            <Switch
                                onCheckedChange={(checked) =>
                                    setFormData({
                                        ...formData,
                                        isAvailable: checked
                                    })}
                                checked={formData.isAvailable} dir="ltr" id="airplane-mode" className="data-[state=checked]:bg-green-700 cursor-pointer   data-[state=unchecked]:bg-gray-500" />

                        </div>

                        {/* الصورة */}
                        <div className='relative mb-10  '>
                            {cancelImage &&
                                <div className='absolute right-1 top-1 z-1'>
                                    <X onClick={() => {
                                        setPreview("/add-doctor.jpg")
                                        setCancelImage(false)
                                    }} size={20} className='text-gray-300' />
                                </div>
                            }
                            <label className=' mb-2 relative border cursor-pointer overflow-hidden  h-40 w-40 rounded-sm block' htmlFor="image">
                                <Image src={preview} className='object-cover' fill alt='' />
                            </label>
                            <input
                                id="image"
                                name="image"
                                type="file"
                                className="hidden  border-gray-300 border-2 rounded-md py-1 px-4 w-full mt-2"
                                onChange={handleChange}
                            />

                        </div>

                    </div>

                </div>
                <button
                    type="submit"
                    className="bg-green-600 text-white py-2 px-4 rounded-lg w-full cursor-pointer"
                >
                    إضافة طبيب
                </button>

            </form>

        </div>
    )
}

export default AddDoctor
