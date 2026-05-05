// import AddDoctor from "app/components/admin/addDoctor"


import AddDoctor from "app/components/admin/doctors/AddDoctor"
import { getSpecialties } from "lib/genFetcher"

const page = async () => {

  const specialties = await getSpecialties()




  return (
    <div className='pt-20  pr-70 w-full'>
        <AddDoctor specialties={specialties} />
 
    </div>
  )
}

export default page
