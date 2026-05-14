import { toast } from 'react-toastify';
import { create } from 'zustand'
type Schedule = {
    dayOfWeek: string;
    morningStart?: string;
    morningEnd?: string;
    eveningStart?: string;
    eveningEnd?: string;
};

type BookingState = {
    doctorId: string;
    objSchedule: Schedule;
    schedules: Schedule[];
    updateObjScheduleField: (
        name: keyof Schedule,
        value: string
    ) => void;
    dailySchedule: () => void

    setDoctorId: (id: string) => void;
    // setObjSchedule: (schedule: Schedule) => void;

}

export const useBookingStore = create<BookingState>((set) => ({
    doctorId: "",
    objSchedule: {
        dayOfWeek: "0",
        morningStart: "08:00",
        morningEnd: "12:00",
        eveningStart: "14:00",
        eveningEnd: "17:00",
    },
    schedules: [],
    updateObjScheduleField: (name, value) =>
        set((state) => ({
            objSchedule: { ...state.objSchedule, [name]: value.slice(0, 5) }
        })),
    dailySchedule: () => set((state) => {
        const exist = state.schedules.some((s) => s.dayOfWeek === state.objSchedule.dayOfWeek)
        if (exist){
            toast.error('لقد اضفت هذا اليوم ')
            return state
        }
        console.log(state)
        return {
            schedules: [...state.schedules, { ...state.objSchedule }]

        }
    }),
    setDoctorId: (id) => set({ doctorId: id })






}))