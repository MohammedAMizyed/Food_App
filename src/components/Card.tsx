import { CiCircleCheck } from "react-icons/ci"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { FaHeart } from "react-icons/fa6"
import { cn } from "@/lib/utils"
import { useCart } from "@/store/useCart"
import { useFavorite } from "@/store/useFavorite"
type Props = {
  title: string
  img?: string
  category?: string
  from?: string
  id?: string
}
export default function Card({ category, id, title, img, from }: Props) {
  const { addToCart } = useCart()
  const { addToFavorite, favoriteList } = useFavorite()
  return (
    <div className=" bg-[#1D1D1D] p-2 select-none rounded-[16px]">
      <div className="relative">
        <img
          className="rounded-[16px] h-[255px] w-full max-w-[351px] object-cover"
          src={img}
          alt="foodImg"
        />
        <div
          onClick={() => {
            addToFavorite({
              img,
              id: id!,
              title,
              category,
              from,
            })
          }}
          className={cn(
            "cursor-pointer absolute top-4 left-4 flex justify-center items-center text-[20px] w-[50px] h-[50px]  rounded-[50%] border-[3px] ",
            favoriteList.find((meal) => meal.id === id)
              ? "bg-red-500 text-white border-red-500"
              : "bg-white border-[#D6282880]  text-red-500",
          )}
        >
          <FaHeart />
        </div>
      </div>
      <div>
        <div className=" flex py-2 justify-between items-center">
          <h3 className="text-white text-[24px] font-semibold max-w-[350px] flex-wrap">
            {title}
          </h3>
          <Link to={`/meal/${id}`}>
            <span className="hover:text-red-400 duration-200 text-white underline cursor-pointer mr-2">
              See More
            </span>
          </Link>
        </div>
        <hr className=" text-[#343434]" />
        {category && (
          <div className="flex justify-between my-2 items-center">
            <h3 className="text-[#D62828] text-[17px] font-semibold">
              <span className="text-white">Category: </span>
              {category}
            </h3>
          </div>
        )}
        <div className="text-white flex items-center gap-4">
          <CiCircleCheck className="text-xl text-red-500" />
          From {from}
        </div>
        <div className="text-white flex  items-center gap-4">
          <CiCircleCheck className="text-xl text-red-500" />4 Pieces
        </div>
      </div>
      <Button
        onClick={() => {
          addToCart({
            title,
            category,
            from,
            img,
            id: id!,
          })
        }}
        className="w-full my-5 hover:bg-black cursor-pointer bg-none rounded-[14px] text-white border-2 border-white"
      >
        Add To Cart
      </Button>
    </div>
  )
}
