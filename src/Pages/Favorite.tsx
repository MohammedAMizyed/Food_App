import { Link } from "react-router-dom"
import background from "../assets/747ba988e9e46d6503b1af4251a66afb588478fb.jpg"

import { Button } from "@/components/ui/button"

export default function Favorite() {
  return (
    <div className="">
      <div className="relative">
        <img
          className="select-none h-[483px]  object-cover w-full  "
          src={background}
          alt="background"
        />
        <div className="inset-0 absolute bg-[#000000af]"></div>

        <div className=" absolute left-[50%] text-center text-[32px] font-medium  top-[50%] -translate-x-1/2 w-full  text-white ">
          <Link to={"/home"}>HOME -</Link>
          <span className="text-[#FFFFFF80]"> FAVORITE</span>
        </div>
      </div>
      <div className="container    text-white ">
        <div className="text-center my-30">
          <h2 className="secondaryFont text-[54px] font-medium">
            Your WhishList is currently empty.{" "}
          </h2>
          <Link to={"/shope"}>
            <Button
              className="font-medium text-[20px] cursor-pointer rounded-[26px] px-10 mt-5 border-2"
              variant={"destructive"}
            >
              RETURN TO SHOP
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
