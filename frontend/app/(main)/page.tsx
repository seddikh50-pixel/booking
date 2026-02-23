import Banner from "../components/Banner";

import Doctors from "../components/Doctors";
import FindBy from "../components/FindBy";
import TopFooter from "../components/footer/TopFooter";
import SecondBanner from "../components/SecondBanner";


export default function Home() {
  return (
    <div className="">
      <Banner /> 
      <FindBy/>
      <Doctors/>
      <SecondBanner/>
      <TopFooter/>
 
    </div>
  );
}
