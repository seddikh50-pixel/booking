"use client"
import React, { useEffect, useState } from 'react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Field, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { ChevronDownIcon } from 'lucide-react';
import { toast } from 'react-toastify';
import { useBookingStore } from 'app/(main)/store/bookingStore';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

interface Specialization {
  id: string;
  name: string;
  image: string;
}

interface Doctors {
  id: string
  fullName: string;
  email: string;
  phone: string;
  password: string;
  specialization: Specialization;
  bio: string;
  experience: string;
  consultationFee: string;
  location: string;
  isAvailable: boolean;
  image: string

}

type Props = {
  doctors: Doctors[]
}

type Schedule = {
  dayOfWeek: string;
  morningStart?: string;
  morningEnd?: string;
  eveningStart?: string;
  eveningEnd?: string;
};

const AddSchedule = ({ doctors }: Props) => {

  const updateField = useBookingStore(s => s.updateObjScheduleField)
  const objSchedule = useBookingStore(b => b.objSchedule)
  const schedules = useBookingStore(s => s.schedules)
  const dailySchedule = useBookingStore(s => s.dailySchedule)
  const setDoctorId = useBookingStore(d => d.setDoctorId)
  const doctorId = useBookingStore(d => d.doctorId)



  const days = [
    { day: "الاحد", numOfDay: 0 },
    { day: "الاثنين", numOfDay: 1 },
    { day: "الثلاثاء", numOfDay: 2 },
    { day: "الأربعاء", numOfDay: 3 },
    { day: "الخميس", numOfDay: 4 },
    { day: "الجمعة", numOfDay: 5 },
    { day: "السبت", numOfDay: 6 },
  ]




  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {


      const res = await fetch(`${API_URL}/schedule/add`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          doctorId: doctorId,
          schedules
        }),
      });
      const data = await res.json()
      console.log(data)
    } catch (error) {

    }



  }




  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    updateField(e.target.name as keyof Schedule, e.target.value)
  };




  return (
    <div>
      <div>
        <p className='text-2xl font-bold p-5'>إضافة جدول عمل أسبوعي</p>
        <form action="" onSubmit={handleSubmit}>
          <div className='flex flex-col gap-7'>
            <div className='grid grid-cols-2 gap-2  w-70 '>
              <Select dir='rtl'
                name='dayOfWeek'
                onValueChange={(value) =>
                  handleChange(
                    {
                      target: {
                        name: "dayOfWeek",
                        value
                      }
                    } as React.ChangeEvent<HTMLInputElement>
                  )
                }
              >
                <SelectTrigger className="w-full max-w-48">
                  <SelectValue placeholder=" الأحد" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>الأيام</SelectLabel>


                    {days.map((day) => {
                      return (
                        <SelectItem key={day.numOfDay} value={String(day.numOfDay)}>{day.day} </SelectItem>
                      )
                    })}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>



            <div className='flex flex-col gap-5  justify-center items-start'>
              <div className='flex gap-10'>
                <div className='flex flex-col gap-2' >

                  <Field className="w-32">
                    <FieldLabel htmlFor="time-picker-optional">بداية الفترة الصباحية</FieldLabel>
                    <Input
                      onChange={handleChange}
                      name='morningStart'

                      type="time"
                      id="time-picker-optional"
                      step="1"
                      defaultValue="08:00:00"
                      className="appearance-none bg-background [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                    />
                  </Field>
                </div>

                <div className='flex flex-col gap-2' >
                  <Field className="w-32">
                    <FieldLabel htmlFor="time-picker-optional">نهاية الفترة الصباحية </FieldLabel>
                    <Input
                      onChange={handleChange}
                      name='morningEnd'

                      type="time"
                      id="time-picker-optional"
                      step="1"
                      defaultValue="12:00:00"
                      className="appearance-none bg-background [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                    />
                  </Field>
                </div>
              </div>

              <div className='flex gap-10'>
                <div className='flex flex-col  gap-2' >
                  <Field className="w-32">
                    <FieldLabel htmlFor="time-picker-optional">بداية الفترة المسائية </FieldLabel>
                    <Input
                      onChange={handleChange}
                      name='eveningStart'

                      type="time"
                      id="time-picker-optional"
                      step="1"
                      defaultValue="14:00:00"
                      className="appearance-none bg-background [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                    />
                  </Field>
                </div>

                <div className='flex flex-col gap-2' >

                  <Field className="w-32">
                    <FieldLabel htmlFor="time-picker-optional"> نهاية الفترة المسائية </FieldLabel>
                    <Input
                      onChange={handleChange}
                      name='eveningEnd'

                      type="time"
                      id="time-picker-optional"
                      step="1"
                      defaultValue="17:00:00"
                      className="appearance-none bg-background [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                    />
                  </Field>
                </div>

              </div>
              <Button onClick={dailySchedule} className='bg-violet-500' type='button'>اضافة جدول عمل يومي </Button>
            </div>

          </div >
          <div className='mt-10'>
            <Select dir='rtl'
              name='doctor'
              onValueChange={(value) =>
                setDoctorId(value)
              }
            >
              <SelectTrigger className="w-full max-w-48">
                <SelectValue placeholder="اختر الطبيب" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>الأطباء</SelectLabel>
                  {doctors.map((sp) => {
                    return (
                      <SelectItem key={sp.id} value={sp.id}>{sp.fullName} </SelectItem>
                    )
                  })}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <Button className='text-xl px-2 py-5 mt-5' >اضافة جدول أسبوعي للطبيب </Button>

        </form>
      </div>

    </div>
  )
}

export default AddSchedule

