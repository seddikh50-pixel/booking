import Image from "next/image";


import { ArrowBigDown, ArrowBigLeft, ArrowLeft, ArrowRight, Camera } from "lucide-react";
import Container from "./Container";
import Link from "next/link";

const Banner = () => {






  return (
    <div>
      <Container className="flexy flex-col gap-6 mt-5 overflow-hidden px-5">
        <div className="relative w-full h-140 bg-primary rounded-md flex sm:flex-col xl:flex-row lg:flex-row flex-col md:flex-row 2xl:flex-row justify-around items-center pt-10 px-20">
          <div className="flex flex-col gap-6 2xl:w-1/2 sm:w-120 w-80  ">

            <h1 className="2xl:text-6xl sm:text-3xl md:text-4xl lg:text-5xl text-2xl leading-snug font-bold text-white">
              احجز موعدًا مع أطباء موثوقين

            </h1>
            <p className="2xl:text-lg text-sm   text-white">
              تصفح ببساطة قائمتنا الواسعة من الأطباء الموثوقين، وحدد موعدك بكل سهولة وبدون أي تعقيدات.      </p>
            <Link href={"/"} className="max-w-40 w-30 2xl:w-40 whitespace-nowrap flex items-center  bg-gray-200 rounded-xl justify-center gap-2 2xl:px-4 px-2 py-2 ">
              <button className=" text-gray-600   ">احجز موعد  </button>
              <ArrowLeft size={20} className="text-gray-600" />
            </Link>


          </div>
          <div className="relative 2xl:w-1/3 md:w-130 sm:w-110   w-96    2xl:h-full sm:h-full h-full    bottom-0 ">
            <Image src={"/pub3.png"} alt='logo' fill className="object-cover rounded-md   " />
          </div>

        </div>
      </Container>

    </div>
  )
}


export default Banner
