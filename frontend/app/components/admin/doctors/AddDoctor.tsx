"use client"
import { CirclePlus, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { toast } from 'react-toastify'


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


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement >) => {
        const selectedFile = (e.target as HTMLInputElement).files?.[0];
        if (selectedFile) {
            const image = URL.createObjectURL(selectedFile)
            setPreview(image)
            setCancelImage(true)
        }
        const { name, value, type } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
        }));
    }


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        try {

            e.preventDefault();
            const res = await fetch("http://localhost:4444/api/doctor/add", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
                credentials: "include",

            });
            const data = await res.json();
            if (data.success) return toast.success(data.msg)
            else {
                toast.error(data.msg)
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
                        <div>
                            <label htmlFor="fullName" className=''>الاسم الكامل</label>
                            <input
                                onChange={handleChange}
                                id="fullName"
                                name="fullName"
                                type="text"
                                placeholder="الاسم الكامل"
                                className="block mb-5 border-gray-300 border-2 rounded-md py-1 px-4 w-full mt-2"
                            />
                        </div>

                        {/* البريد */}
                        <div>
                            <label htmlFor="email">البريد الإلكتروني</label>
                            <input
                                onChange={handleChange}
                                id="email"
                                name="email"
                                type="email"
                                placeholder="email@example.com"
                                className="block mb-5 border-gray-300 border-2 rounded-md py-1 px-4 w-full  mt-2"
                            />
                        </div>

                        {/* الهاتف */}
                        <div>
                            <label htmlFor="phone">الهاتف</label>
                            <input
                                onChange={handleChange}
                                id="phone"
                                name="phone"
                                type="text"
                                placeholder="رقم الهاتف"
                                className="block mb-5 border-gray-300 border-2 rounded-md py-1 px-4 w-full  mt-2"
                            />
                        </div>

                        {/* كلمة المرور */}
                        <div>
                            <label htmlFor="password">كلمة المرور</label>
                            <input
                                onChange={handleChange}
                                id="password"
                                name="password"
                                type="password"
                                placeholder="********"
                                className="block mb-5 border-gray-300 border-2 rounded-md py-1 px-4 w-full  mt-2"
                            />
                        </div>

                        {/* الاختصاص */}
                        <div>
                            <select onChange={handleChange} 
                                id="specialization"
                                name="specialization">
                                     <option value="">اختر التخصص</option>
                                {specialties.map((sp) => {
                                    return (
                                        <option key={sp.id}  value={sp.id}>{sp.name} </option>
                                    )
                                })}
                            </select>
                            <label htmlFor="specialization">الاختصاص</label>
                            {/* <input
                                onChange={handleChange}
                                id="specialization"
                                name="specialization"
                                type="text"
                                placeholder="مثال: طبيب أسنان"
                                className="block mb-5 border-gray-300 border-2 rounded-md py-1 px-4 w-full  mt-2"
                            /> */}
                        </div>
                    </div>

                    <div className='w-1/2 '>
                        {/* السيرة */}
                        <div>
                            <label htmlFor="bio">السيرة</label>
                            <textarea
                                onChange={handleChange}
                                id="bio"
                                name="bio"
                                placeholder="نبذة عن الطبيب"
                                className="block mb-5 border-gray-300 border-2 rounded-md py-1 px-4 w-full  mt-2"
                            ></textarea>
                        </div>

                        {/* سنوات الخبرة */}
                        <div>
                            <label htmlFor="experience">سنوات الخبرة</label>
                            <input
                                onChange={handleChange}
                                id="experience"
                                name="experience"
                                type="number"
                                placeholder="5"
                                className="block mb-5 border-gray-300 border-2 rounded-md py-1 px-4 w-full  mt-2"
                            />
                        </div>

                        {/* سعر الاستشارة */}
                        <div>
                            <label htmlFor="consultationFee">سعر الاستشارة</label>
                            <input
                                onChange={handleChange}
                                id="consultationFee"
                                name="consultationFee"
                                type="number"
                                step="0.01"
                                placeholder="2000"
                                className="block mb-5 border-gray-300 border-2 rounded-md py-1 px-4 w-full  mt-2"
                            />
                        </div>

                        {/* الموقع */}
                        <div>
                            <label htmlFor="location">العنوان</label>
                            <input
                                onChange={handleChange}
                                id="location"
                                name="location"
                                type="text"
                                placeholder="المدينة / العيادة"
                                className="block mb-5 border-gray-300 border-2 rounded-md py-1 px-4 w-full  mt-2"
                            />
                        </div>

                        {/* متاح أو لا */}
                        <div className="mb-5">
                            <label className="mr-2">متاح للعمل</label>
                            <input type="checkbox" name="isAvailable" defaultChecked onChange={handleChange} />
                        </div>

                        {/* الصورة */}
                        <div className='relative mb-10 '>
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
                    className="bg-green-600 text-white py-2 px-4 rounded-lg w-full"
                >
                    إضافة طبيب
                </button>

            </form>

        </div>
    )
}

export default AddDoctor
