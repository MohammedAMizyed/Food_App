import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../Components/ui/carousel"
import Card from "../Components/Card"
import { useFood } from "@/Hooks/useFood"
import { Link } from "react-router-dom"
import { Loader2 } from "lucide-react"

export default function CarouselFood({ search }: { search: string }) {
  const { data, status } = useFood(search)
  return (
    <div className=" cursor-pointer container">
      <h1 className="text-white font-semibold text-4xl mb-5">{search}:</h1>

      <Carousel>
        <CarouselContent>
          {data?.meals?.map((item, index: number) => {
            return (
              <CarouselItem key={index} className="basis-[25%]">
                <Link to={`/meal/${item.idMeal}`}>
                  <Card
                    img={item.strMealThumb}
                    title={item.strMeal}
                    category={item.strCategory}
                    from={item.strArea}
                  />
                </Link>
              </CarouselItem>
            )
          })}
          {status === "pending" && (
            <div className=" animate-spin text-white text-6xl">
              <Loader2 />
            </div>
          )}
        </CarouselContent>
      </Carousel>
    </div>
  )
}
