import React from 'react'

const page = () => {
    return (
        <div>
            <div className='flex items-center justify-center w-full h-screen shadow-2xl flex-col '>

                <div className='w-96 border-1 h-90 rounded-lg border-gray-200 shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex flex-col justify-center     items-center  '>
                    {/* <p className='font-bold text-2xl'>تسجيل دخول  <span className='text-primary '>{role ? "الإدارة" : "الطبيب"} </span></p> */}
                    <div className='flex flex-col gap-4 w-full justify-center items-center mt-5'>
                        <div className='flex flex-col gap-2 w-2/3'>
                            <label htmlFor="" className='text-gray-500'>أدخل الاسم</label>
                            <input
                                //   onChange={(e) => setEmail(e.target.value)}
                                className='border border-gray-300 rounded-md py-1 ' type="text" />

                        </div>
                        <div className='flex flex-col gap-2 w-2/3'>
                            <label htmlFor="" className='text-gray-500'>أدخل الايميل</label>
                            <input
                                //   onChange={(e) => setEmail(e.target.value)}
                                className='border border-gray-300 rounded-md py-1 ' type="text" />

                        </div>
                        <div className='flex flex-col w-2/3 gap-2'>
                            <label htmlFor="" className='text-gray-500'>أدخل كلمة المرور</label>
                            <input
                                //   onChange={(e) => setPassword(e.target.value)} 
                                className='border border-gray-300 rounded-md py-1 ' type="password" />

                        </div>

                        <button className='bg-primary text-white px-4 py-2 rounded-md w-2/3'>تسجيل </button>
                        <p className='cursor-pointer'>  هل لديك حساب ؟  <span className='underline text-primary'>     اضغط هنا </span> </p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default page
