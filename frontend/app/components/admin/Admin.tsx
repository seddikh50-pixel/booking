"use client"
import React, { useEffect, useState } from 'react'
import Login from '../../components/admin/Login'
import AdminPanel from './AdminPanel';
import Header from './Header';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { Spinner } from "@/components/ui/spinner";




const Admin = () => {
    const router = useRouter();
    const [isAdmin, setIsAdmin] = useState<boolean | null>(null);

    return (
        <div className=' w-full '>
            <div>
                <div className='flex flex-col justify-between px-10 py-2 '>
                    {/* <Header setIsAdmin={setIsAdmin} /> */}
                    <AdminPanel />

                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum voluptates expedita unde consectetur dolores, consequatur voluptatum cupiditate.
                    Assumenda optio iste et provident magnam deserunt dolorum aperiam sit ab delectus? Nisi.

                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum voluptates expedita unde consectetur dolores, consequatur voluptatum cupiditate.
                    Assumenda optio iste et provident magnam deserunt dolorum aperiam sit ab delectus? Nisi.

                </div>
            </div>
        </div>
    )
}

export default Admin
