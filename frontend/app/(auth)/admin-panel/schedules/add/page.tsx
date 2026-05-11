"use client"
import React, { useEffect, useState } from 'react'

const page = () => {
    const [selectedDays, setSelectedDays] = useState<number[]>([]);

    const days = [
        { day: "الاحد", numOfDay: 0 },
        { day: "الاثنين", numOfDay: 1 },
        { day: "الثلاثاء", numOfDay: 2 },
        { day: "الأربعاء", numOfDay: 3 },
        { day: "الخميس", numOfDay: 4 },
        { day: "الجمعة", numOfDay: 5 },
        { day: "السبت", numOfDay: 6 },
    ]

    const toggleDays = (day: number) => {
        setSelectedDays(prev =>
            selectedDays.includes(day) ?
                prev.filter((d) => d !== day) :
                [...prev, day]

        )



    }

  
    return (
        <div className='pt-20 pr-62 w-full'>
            <div>
                <form action="">
                    <div className='flex'>
                        <div className='grid grid-cols-2 gap-5'>
                        {days.map((day) =>
                            <div key={day.numOfDay}>
                                <button type='button' className={`${selectedDays.includes(day.numOfDay) ? 'bg-primary' : "bg-white"} w-20 border-2 rounded`} onClick={() => toggleDays(day.numOfDay)} >{day.day} </button>
                            </div>
                        )}
                    </div>

                    </div>
                    
                </form>
            </div>

        </div>
    )
}

export default page
