import Image from "next/image";


import { ArrowBigDown, ArrowBigLeft, ArrowLeft, ArrowRight, Camera } from "lucide-react";
import Container from "./Container";

const Banner = () => {






  return (
    <div>
             <Container className="flexy flex-col gap-6 mt-5">
        <div className="relative w-full h-140 bg-primary rounded-md flex justify-around items-center px-52">
          <div className="flex flex-col gap-6 w-1/2">

            <h1 className="text-6xl leading-snug font-bold text-white">
              احجز موعدًا مع أطباء موثوقين

            </h1>
            <p className="text-lg text-white">
              تصفح ببساطة قائمتنا الواسعة من الأطباء الموثوقين، وحدد موعدك بكل سهولة وبدون أي تعقيدات.      </p>
            <div className="max-w-40 flex items-center bg-white rounded-xl justify-center gap-2 px-4 py-2 ">
              <button className=" text-gray-600   ">احجز موعد  </button>
              <ArrowLeft size={20} className="text-gray-600" />
            </div>


          </div>
          <div className="relative w-1/2 h-full  ">
            <Image src={"/pub3.png"} alt='logo' fill className="object-contain rounded-md bottom-0  " />
          </div>

        </div>
      </Container>
      
    </div>
  )
}


export default Banner
