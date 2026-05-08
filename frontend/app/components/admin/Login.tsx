
"use client"

import { LoaderCircle } from 'lucide-react';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { toast } from 'react-toastify';

type Props = {
  setIsAdmin: (value: boolean) => void;
};


const Login = ({ setIsAdmin }: Props) => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await fetch("http://localhost:4444/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
        credentials: "include",
      });

      const data = await res.json();

      console.log(data);

      if (data.success) {
        setIsAdmin(true);
        toast.success("تم تسجيل الدخول بنجاح");
        // router.push("/admin-panel");
      } else {
        setIsAdmin(false);
        toast.error("بيانات الدخول غير صحيحة");
      }

    } catch (error) {
      console.error("Error during login:", error);
      toast.error("حدث خطأ أثناء تسجيل الدخول");
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className='w-full h-screen'>





      <div className='flex items-center justify-center w-full h-screen shadow-2xl flex-col '>

        <div className='w-96 border-1 h-90 rounded-lg border-gray-200 shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex flex-col justify-center     items-center  '>
          <p className='text-2xl font-bold'>تسجيل دخول الأدمين</p>

          <form
            onSubmit={handleSubmit}
            className='flex flex-col gap-4 w-full justify-center items-center mt-5'
          >

            <div className='flex flex-col gap-2 w-2/3'>
              <label className='text-gray-500'>أدخل الايميل</label>

              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='border border-gray-300 rounded-md py-1 pr-2'
                type="text"
              />
            </div>

            <div className='flex flex-col w-2/3 gap-2'>
              <label className='text-gray-500'>أدخل كلمة المرور</label>

              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='border border-gray-300 rounded-md py-1 pr-2'
                type="password"
              />
            </div>

            <button
              type="submit"
              className='bg-primary text-white px-4 py-2 rounded-md w-2/3'
            >
              {loading ? "جاري الدخول..." : "دخول"}
            </button>

          </form>
        </div>
      </div>


    </div>
  )
}

export default Login

