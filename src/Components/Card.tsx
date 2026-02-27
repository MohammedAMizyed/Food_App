import { CiCircleCheck } from "react-icons/ci"
import { Button } from "../Components/ui/button"
import { FaStar } from "react-icons/fa"

import foodImg from "../assets/porgar.jpg"
type Props = {
  price: string
  rated: string
  title: string
}
export default function Card({ price, rated, title }: Props) {
  return (
    <div className=" bg-[#1D1D1D] p-2 select-none rounded-[16px]">
      <img
        className="rounded-[16px] h-[255px] w-full max-w-[351px] object-cover"
        src={foodImg}
        alt="foodImg"
      />
      <div>
        <div className=" flex py-2 justify-between items-center">
          <h3 className="text-[#D62828] text-[24px] font-semibold">{price}</h3>
          <div className=" flex items-center justify-center gap-2 ">
            <FaStar className="text-[#FFD700] text-2xl" />
            <h1 className="text-[24px] text-white font-normal">{rated}</h1>
          </div>
        </div>
        <hr className=" text-[#343434]" />
        <h1 className="py-2 text-[20px] text-white font-semibold">{title}</h1>
        <div className="text-white flex items-center gap-4">
          <CiCircleCheck className="text-xl text-red-500" />4 Pieces
        </div>
        <div className="text-white flex  items-center gap-4">
          <CiCircleCheck className="text-xl text-red-500" />4 Pieces
        </div>
      </div>
      <Button className="w-full my-5 hover:bg-black cursor-pointer bg-none rounded-[14px] text-white border-2 border-white">
        Add To Cart
      </Button>
    </div>
  )
}
