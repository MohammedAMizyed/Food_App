import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../Components/ui/carousel"
import Card from "../Components/Card"
export default function CarouselFood() {
  return (
    <div className=" cursor-pointer container">
      <Carousel>
        <CarouselContent>
          <CarouselItem className="basis-[25%]">
            <Card
              price="150 EG"
              rated="4.5"
              title="Pork Chop with Apple Chutney"
            />
          </CarouselItem>
          <CarouselItem className="basis-[25%]">
            <Card
              price="150 EG"
              rated="4.5"
              title="Pork Chop with Apple Chutney"
            />
          </CarouselItem>{" "}
          <CarouselItem className="basis-[25%]">
            <Card
              price="150 EG"
              rated="4.5"
              title="Pork Chop with Apple Chutney"
            />
          </CarouselItem>{" "}
          <CarouselItem className="basis-[25%]">
            <Card
              price="150 EG"
              rated="4.5"
              title="Pork Chop with Apple Chutney"
            />
          </CarouselItem>{" "}
          <CarouselItem className="basis-[25%]">
            <Card
              price="150 EG"
              rated="4.5"
              title="Pork Chop with Apple Chutney"
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  )
}
