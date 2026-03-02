import { CiCircleCheck } from "react-icons/ci"
import { Button } from "../Components/ui/button"
import { FaStar } from "react-icons/fa"

type Props = {
  title: string
  img?: string
  category?: string
  from?: string
}
export default function Card({
  category,

  title,
  img,
  from,
}: Props) {
  return (
    <div className=" bg-[#1D1D1D] p-2 select-none rounded-[16px]">
      <img
        className="rounded-[16px] h-[255px] w-full max-w-[351px] object-cover"
        src={img}
        alt="foodImg"
      />
      <div>
        <div className=" flex py-2 justify-between items-center">
          <h3 className="text-white text-[24px] font-semibold">{title}</h3>
          <div className=" flex items-center justify-center gap-2 ">
            <FaStar className="text-[#FFD700] text-2xl" />
            <FaStar className="text-[#FFD700] text-2xl" />
            <FaStar className="text-[#FFD700] text-2xl" />
          </div>
        </div>
        <hr className=" text-[#343434]" />
        <div className="flex justify-between my-2 items-center">
          <h3 className="text-[#D62828] text-[17px] font-semibold">
            <span className="text-white">Category: </span>
            {category}
          </h3>
        </div>
        <div className="text-white flex items-center gap-4">
          <CiCircleCheck className="text-xl text-red-500" />
          From {from}
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
