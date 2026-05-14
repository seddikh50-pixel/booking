"use client"
import React, { useEffect, useState } from 'react'



interface SchedulesProps {
    schedules: Schedule[]
}





type DayItem = {
    dayOfMonth: number,
    dayOfWeek: number
}


type Schedule = {
  id: string;
  dayOfWeek: number;
  morningStart: string;
  morningEnd: string;
  eveningStart: string;
  eveningEnd: string;
};

type Specialization = {
  id: string;
  name: string;
  image: string;
};

export type Doctor = {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  password: string;
  bio: string;
  image: string;
  location: string;
  experience: number;
  consultationFee: number;
  isAvailable: boolean;
  rating: number | null;

  specializationId: string;
  specialization: Specialization;

  schedules: Schedule[];

};

type Props = {
  doctorDetails: Doctor;
};



const AvailalbleSchedules = ({ doctorDetails }: Props) => {



    const days = [
        { day: "الاحد", numOfDay: 0 },
        { day: "الاثنين", numOfDay: 1 },
        { day: "الثلاثاء", numOfDay: 2 },
        { day: "الأربعاء", numOfDay: 3 },
        { day: "الخميس", numOfDay: 4 },
        { day: "الجمعة", numOfDay: 5 },
        { day: "السبت", numOfDay: 6 },
    ]


    const [nextSevenDays, setNextSevenDays] = useState<DayItem[]>([]);
    const [indexDay, setIndexDay] = useState<number>(new Date().getDay());

    useEffect(() => {
        const getSevenDays = () => {
            const loopDays: DayItem[] = [];
            const date = new Date()
            for (let index = 0; index < 7; index++) {
                const today = new Date(date)
                today.setDate(today.getDate() + index)
                loopDays.push({ dayOfMonth: today.getDate(), dayOfWeek: today.getDay() })
            }
            setNextSevenDays(loopDays)

        }
        getSevenDays()
    }, []);





    return (
        <div className='flex gap-2 mt-5'>
            {nextSevenDays.map((sc, index) =>
                doctorDetails.schedules.some((item) => item.dayOfWeek === sc.dayOfWeek) ?
                    <button onClick={() => setIndexDay(sc.dayOfWeek)} className={`w-18 h-25 cursor-pointer transition-all duration-300  font-bold flex justify-center items-center flex-col px-3 border-gray-300 rounded-full text-xs space-y-2 border-2 ${indexDay === sc.dayOfWeek ? "bg-primary text-white " : "bg-white text-gray-800"}`} key={index}> <h1>{days[sc.dayOfWeek]?.day} </h1> <h1 className='text-lg'>{sc.dayOfMonth} </h1> </button>
                    : <button disabled className={`w-15 h-20 pointer-events-none  font-bold flex justify-center items-center flex-col px-3 border rounded-full text-xs space-y-2  text-gray-800/20`} key={index}> <h1>{days[sc.dayOfWeek]?.day} </h1> <h1>{sc.dayOfMonth} </h1> </button>
            )}



        </div>
    )
}

export default AvailalbleSchedules
