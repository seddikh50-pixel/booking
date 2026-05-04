"use client"
import { CirclePlus, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const page = () => {
    const [formData, setFormData] = useState({
        name: "",
        image: ""
    })
    const [preview, setPreview] = useState('/specialty.jpg')
    const [cancelImage, setCancelImage] = useState(false)

    const handelSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

        try {
            console.log("sending")
            e.preventDefault()
            const res = await fetch("http://localhost:4444/api/specialty/add", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
                credentials: "include",

            });
            console.log(res)
            const data = await res.json();
            console.log(data)
            if (data.success) return toast.success(data.msg)
            else {
                toast.error(data.msg)
            }

        } catch (error) {

        }

    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        const imageFile = (e.target as HTMLInputElement).files?.[0]
        if (imageFile) {
            const image = URL.createObjectURL(imageFile)
            setPreview(image)
            setCancelImage(true)

        }

        setFormData(prev => ({
            ...prev,
            [name]: value

        }))

    }
    return (
        <div className='pt-20 pr-62' >
            <form onSubmit={handelSubmit}>
                <div>
                    <label htmlFor="name" className=''>التخصص </label>
                    <input
                        onChange={handleChange}
                        id="name"
                        name="name"
                        type="text"
                        placeholder="الاسم الكامل"
                        className="block mb-5 border-gray-300 border-2 rounded-md py-1 px-4 w-full mt-2"
                    />
                </div>

                <div className=' relative overflow-hidden rounded-sm '>
                    {cancelImage &&
                        <div className='absolute right-1 top-1 z-10'>
                            <X onClick={() => {
                                setPreview('/specialty.jpg')
                                setCancelImage(false)
                            }} size={20} className='text-gray-300' />
                        </div>
                    }
                    <label htmlFor="image" className='block mb-5 w-50 h-50 relative '>

                        <Image src={preview} className='object-cover rounded-sm ' fill alt='' />
                    </label>
                    <input
                        id="image"
                        name="image"
                        type="file"
                        className=" mb-5 hidden border-gray-300 border-2 rounded-md py-1 px-4 w-full  mt-2"
                        onChange={handleChange}
                    />
                </div>

                <button
                    type="submit"
                    className="bg-green-600 text-white py-2 px-4 rounded-lg w-full"
                >
                    إضافة تخصص
                </button>

            </form>
        </div>
    )
}

export default page
