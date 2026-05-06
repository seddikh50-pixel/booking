import Image from 'next/image';
import React from 'react'

interface Doctors {
    id : string
    fullName: string;
    email: string;
    phone: string;
    password: string;
    specialization: string;
    bio: string;
    experience: string;
    consultationFee: string;
    location: string;
    isAvailable: boolean;
    image : string

}

type Props  = {
    doctors : Doctors[]
}

const Doctors = ({doctors} : Props) => {
  return (
    <div>
        { doctors.map((doc)=> {
            return (
                <div key={doc.id}>
                    <h1>{doc.fullName} </h1>
                          <Image width={100} height={100} alt='' src={"http://res.cloudinary.com/dwb8qhsjj/image/upload/v1778020850/lwddknuq5sl1va6eylsh.png"} />
                </div>
            )
        })}
      
    </div>
  )
}

export default Doctors
