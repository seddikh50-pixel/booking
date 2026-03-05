import React from 'react'


interface AdminPanelProps {
    setIsAdmin: (isAdmin: boolean) => void;
}
const Header = ({ setIsAdmin }: AdminPanelProps) => {

      const signOut = async () => {
    const res = await fetch("http://localhost:4444/api/logout", {
      method: "POST", 
      credentials: "include"
    });

    if (res.ok) {
      setIsAdmin(false);
    }
  }
  return (
    <div>
        <button onClick={signOut} className='bg-blue-700 px-2 py-1'>Sign out </button>
    </div>
  )
}

export default Header
