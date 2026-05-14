"use client"
import React, { useEffect, useState } from 'react'

type Schedule = {
    dayOfWeek: number
    doctorId: string
    eveningEnd: string
    eveningStart: string
    morningEnd: string
    morningStart: string
}

interface SchedulesProps {
    schedules: Schedule[]
}





type DayItem = {
    dayOfMonth: number,
    dayOfWeek: number
}

const AvailalbleSchedules = ({ schedules }: SchedulesProps) => {
    console.log(schedules)



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
            console.log(loopDays)

        }
        getSevenDays()
    }, []);





    return (
        <div className='flex gap-2 mt-5'>
            {nextSevenDays.map((sc, index) =>
                schedules.some((item) => item.dayOfWeek === sc.dayOfWeek) ?
                    <button onClick={() => setIndexDay(sc.dayOfWeek)} className={`w-18 h-25 cursor-pointer transition-all duration-300  font-bold flex justify-center items-center flex-col px-3 border-gray-300 rounded-full text-xs space-y-2 border-2 ${indexDay === sc.dayOfWeek ? "bg-primary text-white " : "bg-white text-gray-800"}`} key={index}> <h1>{days[sc.dayOfWeek]?.day} </h1> <h1 className='text-lg'>{sc.dayOfMonth} </h1> </button>
                    : <button disabled className={`w-15 h-20 pointer-events-none  font-bold flex justify-center items-center flex-col px-3 border rounded-full text-xs space-y-2  text-gray-800/20`} key={index}> <h1>{days[sc.dayOfWeek]?.day} </h1> <h1>{sc.dayOfMonth} </h1> </button>
            )}



        </div>
    )
}

export default AvailalbleSchedules
