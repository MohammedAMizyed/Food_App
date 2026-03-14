import { Link } from "react-router-dom"
import landingImg from "../assets/41e8bda7a34a0afed94adb44b40d68910d5ddcf0.jpg"
import { Button } from "@/components/ui/button"
export default function Landing() {
  return (
    <div className="relative">
      <img
        className=" object-cover w-full h-screen lg:h-200"
        src={landingImg}
        alt="landingImg"
      />
      <div className="inset-0 absolute bg-[#000000a5]"></div>
      <div className="container absolute top-[50%] -translate-y-1/2 -translate-x-1/2 left-[50%]">
        <h1 className="secondaryFont   lg:text-[86px] m-auto  text-[30px] w-full   sm:max-w-[640px] lg:w-full lg:max-w-325 text-center font-bold text-white">
          Crafting your Exceptional Dining Reservations
        </h1>
        <h2 className="text-white  lg:w-240.75 w-full sm:maw-w-[640px] font-medium text-[20px] text-center m-auto">
          Reservation is a step into a world of gastronomic wonder. Reserve your
          table today and let us paint your culinary dreams into reality.
        </h2>
        <div className="text-center mt-10">
          <Link to={`/shope`}>
            <Button
              variant={"destructive"}
              className="text-[18px] sm:text-[20px] cursor-pointer bg-[#D62828] border-2 rounded-4xl  border-[#e67e7e] font-medium text-white "
            >
              Explore Products
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
