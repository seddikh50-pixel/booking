// "use client"

// import { useState } from "react"

// const days = [
//   { name: "الأحد", value: 0 },
//   { name: "الإثنين", value: 1 },
//   { name: "الثلاثاء", value: 2 },
//   { name: "الأربعاء", value: 3 },
//   { name: "الخميس", value: 4 },
//   { name: "الجمعة", value: 5 },
//   { name: "السبت", value: 6 },
// ]

// export default function CreateSchedule() {
//   const [doctorId, setDoctorId] = useState("")
//   const [selectedDays, setSelectedDays] = useState<number[]>([])
//   const [startTime, setStartTime] = useState("")
//   const [endTime, setEndTime] = useState("")
//   const [loading, setLoading] = useState(false)

//   // 🟡 اختيار/إلغاء يوم
//   const toggleDay = (day: number) => {
//     setSelectedDays((prev) =>
//       prev.includes(day)
//         ? prev.filter((d) => d !== day)
//         : [...prev, day]
//     )
//   }

//   // 🟢 إرسال البيانات
//   const handleSubmit = async () => {
//     setLoading(true)

//     try {
//       const res = await fetch("http://localhost:3000/api/schedules/bulk", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           doctorId,
//           days: selectedDays,
//           startTime,
//           endTime,
//         }),
//       })

//       const data = await res.json()

//       if (!res.ok) {
//         alert(data.message || "Error")
//         return
//       }

//       alert("تم إنشاء الجدول بنجاح")
//       setSelectedDays([])
//       setDoctorId("")
//       setStartTime("")
//       setEndTime("")
//     } catch (error) {
//       alert("Server error")
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <div className="max-w-xl mx-auto p-6 space-y-6">

//       <h1 className="text-2xl font-bold">
//         إنشاء جدول طبيب
//       </h1>

//       {/* Doctor ID */}
//       <input
//         placeholder="Doctor ID"
//         value={doctorId}
//         onChange={(e) => setDoctorId(e.target.value)}
//         className="w-full border p-3 rounded-xl"
//       />

//       {/* Days */}
//       <div>
//         <h2 className="font-semibold mb-2">اختر الأيام</h2>

//         <div className="grid grid-cols-2 gap-2">
//           {days.map((day) => (
//             <button
//               key={day.value}
//               type="button"
//               onClick={() => toggleDay(day.value)}
//               className={`p-2 border rounded-xl transition ${
//                 selectedDays.includes(day.value)
//                   ? "bg-blue-600 text-white"
//                   : "bg-white"
//               }`}
//             >
//               {day.name}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Time */}
//       <div className="grid grid-cols-2 gap-3">
//         <input
//           type="time"
//           value={startTime}
//           onChange={(e) => setStartTime(e.target.value)}
//           className="border p-3 rounded-xl"
//         />

//         <input
//           type="time"
//           value={endTime}
//           onChange={(e) => setEndTime(e.target.value)}
//           className="border p-3 rounded-xl"
//         />
//       </div>

//       {/* Submit */}
//       <button
//         onClick={handleSubmit}
//         disabled={loading}
//         className="w-full bg-blue-600 text-white p-3 rounded-xl"
//       >
//         {loading ? "جاري الحفظ..." : "حفظ الجدول"}
//       </button>

//     </div>
//   )
// }