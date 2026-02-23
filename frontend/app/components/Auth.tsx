
"use client"
import React, { useEffect, useState } from 'react'

const Auth = () => {
      const [role, setrole] = useState(false);
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");
      const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log("ssssssssssssssss")
    
        const res = await fetch("http://localhost:5000/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });
    
        const data = await res.json();
        console.log(data);
      };
    
    
      useEffect(() => {
    
        console.log(email, password)
      }, [email, password]);
    
  return (
       <div className='flex items-center justify-center w-full h-screen shadow-2xl flex-col '>

         <div className='w-96 border-1 h-90 rounded-lg border-gray-200 shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex flex-col justify-center     items-center  '>
        <p className='font-bold text-3xl'>لوحة  <span className='text-primary '>{role ? "الإدارة" : "الطبيب"} </span></p>
        <div className='flex flex-col gap-4 w-full justify-center items-center mt-5'>
          <div className='flex flex-col gap-2 w-2/3'>
            <label htmlFor="" className='text-gray-500'>أدخل الايميل</label>
            <input value={email}
              onChange={(e) => setEmail(e.target.value)} className='border border-gray-300 rounded-md py-1 ' type="text" />

          </div>
          <div className='flex flex-col w-2/3 gap-2'>
            <label htmlFor="" className='text-gray-500'>أدخل كلمة المرور</label>
            <input value={password}
              onChange={(e) => setPassword(e.target.value)} className='border border-gray-300 rounded-md py-1 ' type="password" />

          </div>

          <button onClick={handleSubmit} className='bg-primary text-white px-4 py-2 rounded-md w-2/3'>دخول </button>
          <p onClick={() => setrole(!role)} className='cursor-pointer'> الدخول كطبيب ؟  <span className='underline text-primary'>     اضغط هنا </span> </p>
        </div>
      </div>
      
    </div>
  )
}

export default Auth
