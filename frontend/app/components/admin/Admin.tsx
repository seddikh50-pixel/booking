"use client"
import React, { useEffect, useState } from 'react'
import Login from '../../components/admin/Login'
import AdminPanel from './AdminPanel';
import Header from './Header';
import { usePathname } from 'next/navigation';

import { Spinner } from "@/components/ui/spinner";




const Admin = () => {
    const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
    const [loading, setLoading] = useState(true);

    const pathname = usePathname()
    useEffect(() => {
        const checkAdmin = async () => {
            try {
                const res = await fetch("http://localhost:4444/api/admin", {
                    method: "GET",
                    credentials: "include"
                });
                if (res.ok) {
                    const data = await res.json();
                    setIsAdmin(data.success);
                  
                } else {
                    setIsAdmin(false);
                }
            } catch (err) {
                setIsAdmin(false);
            }finally {
                setLoading(false);
            }
        };

        checkAdmin();
    }, [])

    if (loading) {
        return <div className='flex items-center justify-center w-full h-screen shadow-2xl flex-col '>
            <p className='font-bold text-2xl flex justify-center items-center gap-1'>  <span> انتظار ....</span>  <Spinner /> </p>
        </div>
    }
    return (
        <div className=' w-full h-screen '>

            {isAdmin ?
                <div>
                    <div className='flex flex-col justify-between px-10 py-2 '>
                        <Header setIsAdmin={setIsAdmin} />
                        <AdminPanel />
                    </div>
                </div> :
                <Login setIsAdmin={setIsAdmin} />
            }
        </div>
    )
}

export default Admin
