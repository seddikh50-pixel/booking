import { getSpecialties } from "lib/cachedFetcher";
import Banner from "../components/Banner";

import Doctors from "../components/doctor/Doctors";
import FindBy from "../components/FindBy";
import TopFooter from "../components/footer/TopFooter";
import SecondBanner from "../components/SecondBanner";



export default async function Home () {
  const specialties = await getSpecialties()
  return (
    <div className="">
      
      <Banner />
      <FindBy specialties={specialties} />
      <Doctors />
       <SecondBanner />
      <TopFooter />
  


    </div>
  );
}
