import Image from "next/image";
import Container from "./components/Container";
import Header from "./components/header/Header";

export default function Home() {
  return (
    <div className="">
      <Container className="flexy flex-col gap-6 mt-5">
       <div className="relative w-full h-140 bg-primary rounded-md flex justify-around items-center">
    
    
            <h1>seddik hamaidi</h1>
                <div className="relative w-1/2 h-9/10  -bottom-7 ">
          <Image src={"/doctor2.png"} alt='logo' fill className="object-contain rounded-md bottom-0  " />
        </div>

       </div>
      </Container>
    </div>
  );
}
