
"use client"
// import Sidebar from "app/components/admin/Sidebar"
import Admin from "../../components/admin/Admin"
// import Header from "app/components/admin/Header"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { usePathname } from "next/navigation"

import { ReactNode } from "react";
import Header from "../../components/admin/Header";
import Sidebar from "../../components/admin/Sidebar";
import TopWrapper from "app/components/admin/TopWrapper";
import SideWrapper from "app/components/admin/SideWrapper"
import { ToastContainer } from "react-toastify"

type Props = {
  children: ReactNode;
};

export default function AuthLayout({ children }: Props) {
  const router = useRouter();
  useEffect(() => {
    const checkAdmin = async () => {

      try {
        const res = await fetch("http://localhost:4444/api/admin", {
          method: "GET",
          credentials: "include"
        });
        const data = await res.json();

        if (data.success) {

          router.push("/admin-panel")

        } else {
          router.push("/admin-panel/login")
        }
      } catch (err) {
        router.push("/admin-panel/login")
      }
    };

    checkAdmin();
  }, [])

  return (
    <div>
      {/* <ToastContainer /> */}
      <div className=""><TopWrapper /></div>
      <div className="flex"> 
        <SideWrapper />
        {children}
      </div>
    </div>
  );
}