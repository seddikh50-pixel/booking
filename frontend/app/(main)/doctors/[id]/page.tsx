import Container from 'app/components/Container'
import AvailalbleSchedules from 'app/components/schedules/AvailalbleSchedules'
import { getDoctors } from 'lib/cachedFetcher'
import { OctagonAlert } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

type Prop = {
  params: {
    id: string
  }
}

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

const page = async ({ params }: Prop) => {


  const { id } = await params
  const doctors = await getDoctors()
  const doctorDetails = doctors.find((doc: Doctors) => id === doc.id)
  return (
    <div className='p-5'>
      <Container className='flex flex-col gap-10  '>
        <div className='flex gap-5'>
          <div className=' relative w-70 h-70 bg-primary rounded-md'>
            <Image fill src={doctorDetails.image} alt='' className='object-cover' />
          </div>
          <div className='  flex-1 h-70 border-1  border-gray-400 rounded-md pt-5 px-7'>
            <div className='flex justify-start items-center gap-3 mb-3 '>
              <h1 className='2xl:text-3xl font-bold text-gray-700'>د. {doctorDetails.fullName} </h1>
              <Image width={20} height={20} alt='' src={"data:image/svg+xml,%3csvg%20width='25'%20height='25'%20viewBox='0%200%2025%2025'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M9.4905%201.50034C9.1861%201.75975%209.03389%201.88948%208.87133%201.99843C8.4987%202.24818%208.08021%202.42152%207.64013%202.5084C7.44814%202.54632%207.24879%202.56222%206.8501%202.59403C5.84838%202.67398%205.3475%202.71394%204.92964%202.86154C3.96314%203.20292%203.20292%203.96314%202.86154%204.92964C2.71394%205.3475%202.67398%205.84838%202.59403%206.8501C2.56222%207.24879%202.54632%207.44814%202.5084%207.64013C2.42152%208.08021%202.24818%208.4987%201.99843%208.87133C1.88948%209.03389%201.75977%209.18609%201.50034%209.4905C0.848541%2010.2554%200.522628%2010.6378%200.331528%2011.0376C-0.110509%2011.9625%20-0.110509%2013.0375%200.331528%2013.9624C0.522641%2014.3623%200.848541%2014.7446%201.50034%2015.5095C1.75973%2015.8139%201.88948%2015.9661%201.99843%2016.1286C2.24818%2016.5013%202.42152%2016.9198%202.5084%2017.3599C2.54632%2017.5519%202.56222%2017.7513%202.59403%2018.1499C2.67398%2019.1516%202.71394%2019.6525%202.86154%2020.0704C3.20292%2021.0369%203.96314%2021.7971%204.92964%2022.1385C5.3475%2022.286%205.84838%2022.326%206.8501%2022.406C7.24879%2022.4378%207.44814%2022.4538%207.64013%2022.4916C8.08021%2022.5785%208.4987%2022.7519%208.87133%2023.0016C9.03389%2023.1105%209.18609%2023.2403%209.4905%2023.4996C10.2554%2024.1515%2010.6378%2024.4774%2011.0376%2024.6685C11.9625%2025.1105%2013.0375%2025.1105%2013.9624%2024.6685C14.3623%2024.4774%2014.7446%2024.1515%2015.5095%2023.4996C15.8139%2023.2403%2015.9661%2023.1105%2016.1286%2023.0016C16.5013%2022.7519%2016.9198%2022.5785%2017.3599%2022.4916C17.5519%2022.4538%2017.7513%2022.4378%2018.1499%2022.406C19.1516%2022.326%2019.6525%2022.286%2020.0704%2022.1385C21.0369%2021.7971%2021.7971%2021.0369%2022.1385%2020.0704C22.286%2019.6525%2022.326%2019.1516%2022.406%2018.1499C22.4378%2017.7513%2022.4538%2017.5519%2022.4916%2017.3599C22.5785%2016.9198%2022.7519%2016.5013%2023.0016%2016.1286C23.1105%2015.9661%2023.2403%2015.8139%2023.4996%2015.5095C24.1515%2014.7446%2024.4774%2014.3623%2024.6685%2013.9624C25.1105%2013.0375%2025.1105%2011.9625%2024.6685%2011.0376C24.4774%2010.6378%2024.1515%2010.2554%2023.4996%209.4905C23.2403%209.18609%2023.1105%209.03389%2023.0016%208.87133C22.7519%208.4987%2022.5785%208.08021%2022.4916%207.64013C22.4538%207.44814%2022.4378%207.24879%2022.406%206.8501C22.326%205.84838%2022.286%205.3475%2022.1385%204.92964C21.7971%203.96314%2021.0369%203.20292%2020.0704%202.86154C19.6525%202.71394%2019.1516%202.67398%2018.1499%202.59403C17.7513%202.56222%2017.5519%202.54632%2017.3599%202.5084C16.9198%202.42152%2016.5013%202.24818%2016.1286%201.99843C15.9661%201.88948%2015.8139%201.75977%2015.5095%201.50034C14.7446%200.848541%2014.3623%200.522641%2013.9624%200.331528C13.0375%20-0.110509%2011.9625%20-0.110509%2011.0376%200.331528C10.6378%200.522628%2010.2554%200.848541%209.4905%201.50034ZM17.9669%209.82893C18.3641%209.43163%2018.3641%208.7875%2017.9669%208.3902C17.5696%207.99292%2016.9254%207.99292%2016.5281%208.3902L10.4654%2014.453L8.47183%2012.4595C8.07454%2012.0623%207.4304%2012.0623%207.03312%2012.4595C6.63583%2012.8568%206.63583%2013.5009%207.03312%2013.8983L9.74598%2016.6111C10.1433%2017.0084%2010.7874%2017.0084%2011.1848%2016.6111L17.9669%209.82893Z'%20fill='%230016E1'/%3e%3c/svg%3e"} />
            </div>
            <div className='flex gap-3 justify-start items-center mb-3'>
              <p className='text-gray-700'>{doctorDetails.specialization.name} </p>
              <span className='px-2 rounded-lg border flex gap-1 text-gray-700'>{doctorDetails.experience}<span>سنة</span> </span>
            </div>
            <div>
              <div className='flex gap-2 justify-start items-center mb-3'>
                <h1>حول الطبيب</h1>
                <OctagonAlert color="#000000" strokeWidth={2} size={20} />
              </div>
              <p className='mb-3 text-gray-600'>{doctorDetails.bio} </p>
            </div>
            <div className='flex justify-start items-center gap-2'>
              <h1 className='text-lg font-bold text-gray-600'>رسوم الاستشارة :</h1>
              <h1 className='font-bold'>{doctorDetails.consultationFee} دج </h1>
            </div>

          </div>
        </div>

        <div>
          <h1 className='text-lg text-gray-600 font-bold'>مواعيد الحجز</h1>
          <div>
            <AvailalbleSchedules schedules={doctorDetails.schedules}  /> 

          </div>
        </div>


      </Container>

    </div>
  )
}

export default page
