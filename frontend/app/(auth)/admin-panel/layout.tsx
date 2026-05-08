"use client";

import { useEffect, useState } from "react";
import { ReactNode } from "react";

import TopWrapper from "app/components/admin/TopWrapper";
import SideWrapper from "app/components/admin/SideWrapper";
import Login from "app/components/admin/Login";
import { LoaderCircle } from "lucide-react";

type Props = {
  children: ReactNode;
};

export default function AuthLayout({ children }: Props) {
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    console.log(isAdmin)
    const checkAdmin = async () => {
      try {
        const res = await fetch("http://localhost:4444/api/admin", {
          method: "GET",
          credentials: "include",
        });

        const data = await res.json();
       

        if (data.success) {
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      } catch (err) {
        setIsAdmin(false);
      } finally {
        setLoading(false);
      }
    };

    checkAdmin();
  }, []);

  if (loading) {
    return <div className="p-5 flex justify-center items-center h-screen w-screen"> <LoaderCircle color="green" size={50}/></div>;
  }

  return (
    <div>
      {isAdmin ? (
        <div>
          <TopWrapper setIsAdmin={setIsAdmin} />
          <div className="flex">
            <SideWrapper />
            {children}
          </div>
        </div>
      ) : (
        <Login setIsAdmin={setIsAdmin} />
      )}
    </div>
  );
}