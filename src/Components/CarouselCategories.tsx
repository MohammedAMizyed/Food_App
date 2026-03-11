import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel"
import { cn } from "@/lib/utils"
import { useCategories } from "@/Hooks/useCategories"
import { FaCheck } from "react-icons/fa6"

export default function CarouselCategories({
  selected,
  setSelected,
  style,
}: {
  selected: string
  setSelected: (arg0: string) => void
  style?: string
}) {
  const { data } = useCategories()

  return (
    <div className={cn(" cursor-pointer   w-full", style)}>
      <Carousel>
        <CarouselContent>
          {data?.categories.map((item, index) => {
            return (
              <CarouselItem key={index} className="basis-[50%] sm:basis-[14%]">
                <div
                  onClick={() => {
                    setSelected(item.strCategory)
                  }}
                  key={item.idCategory}
                  className="flex flex-col justify-center items-center gap-5 "
                >
                  <div className="relative">
                    <img
                      className={cn(
                        "cursor-pointer w-35 h-35 object-cover rounded-[50%] border-4 ",
                        selected === item.strCategory
                          ? "border-red-500"
                          : "border-white",
                      )}
                      src={item.strCategoryThumb}
                      alt=""
                    />

                    {selected === item.strCategory && (
                      <div className="absolute flex justify-center items-center  text-white bg-red-500 top-0 right-0 rounded-[50%] h-[35px] w-[35px]">
                        <FaCheck />
                      </div>
                    )}
                  </div>
                  <h3 className="text-white text-[24px] font-semibold">
                    {item.strCategory}
                  </h3>
                </div>
              </CarouselItem>
            )
          })}
        </CarouselContent>
      </Carousel>
    </div>
  )
}
