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
                </div>
            )
        })}
      
    </div>
  )
}

export default Doctors
