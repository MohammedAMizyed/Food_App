import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../Components/ui/carousel"
import Card from "../Components/Card"
import { useFood } from "@/Hooks/useFood"
import { Link } from "react-router-dom"

export default function CarouselFood() {
  const { data } = useFood()
  return (
    <div className=" cursor-pointer container">
      <h1 className="text-white font-semibold text-4xl">chicken:</h1>
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
        </CarouselContent>
      </Carousel>
    </div>
  )
}
