import CarouselFood from "@/Components/CarouselFood"
import Landing from "../Components/Landing"
import background from "../assets/background.png"
export default function Home() {
  return (
    <div className="">
      <Landing />
      <div className="relative">
        <img
          className="select-none h-[200px] absolute object-cover w-full  "
          src={background}
          alt="background"
        />
        <div className="left-[50%] mt-10 -translate-x-1/2 w-full absolute text-white ">
          <div className="text-center">
            <h3 className="text-[20px] font-medium ">MOST SELLING</h3>
            <h2 className="secondaryFont text-[54px] font-medium">
              MOST SELLING
            </h2>
          </div>
        </div>
      </div>
      <div className="mt-[250px]">
        <CarouselFood />
      </div>
    </div>
  )
}
