"use client"
import { CirclePlus } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const page = () => {

    const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {

        try {
            e.preventDefault()
        } catch (error) {
            
        }

    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        console.log(e.target)

    }
  return (
    <div  className='pt-20 pr-62' >
          <form  onSubmit={handelSubmit}>
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

              <div>
          <label htmlFor="image">الصورة</label>
          <input
            id="image"
            name="image"
            type="file"
            className="block mb-5 border-gray-300 border-2 rounded-md py-1 px-4 w-full  mt-2"
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
