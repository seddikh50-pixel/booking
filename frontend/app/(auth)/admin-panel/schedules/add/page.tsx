import AddSchedule from "app/components/admin/schedules/AddSchedule"
import { getDoctors } from "lib/genFetcher"


const page = async () => {
    const doctors = await getDoctors()


  
    return (
        <div className='pt-20 pr-62 w-full'>
           <AddSchedule doctors={doctors} />

        </div>
    )
}

export default page
