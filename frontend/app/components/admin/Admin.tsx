"use client"
import React, { useEffect, useState } from 'react'
import Login from '../../components/admin/Login'
import AdminPanel from './AdminPanel';
import Header from './Header';
import { usePathname } from 'next/navigation';


const Admin = () => {
    const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
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
                    console.log(data)

                } else {
                    setIsAdmin(false);
                }
            } catch (err) {
                setIsAdmin(false);
            }
        };

        checkAdmin();
    }, []);
    return (
        <div className=' w-full h-screen '>

            {isAdmin ?
                <div>
                    <Header setIsAdmin={setIsAdmin} />
                    <AdminPanel />
                </div> :
                <Login setIsAdmin={setIsAdmin} />
            }
        </div>
    )
}

export default Admin
