import { Link } from "react-router-dom"
import background from "../assets/747ba988e9e46d6503b1af4251a66afb588478fb.jpg"
import backgroundImg from "../assets/background.png"
import Card from "@/components/Card"
import { useState } from "react"
import { useCategorySearch } from "@/hooks/useCategorySearch"
import { Loader2 } from "lucide-react"
import CarouselCategories from "@/components/CarouselCategories"
export default function Shope() {
  const [selected, setSelected] = useState("Beef")
  const { data: meals, status } = useCategorySearch(selected)
  return (
    <div className="">
      <div className="relative">
        <img
          className="select-none h-[400px] sm:h-[483px]  object-cover w-full  "
          src={background}
          alt="background"
        />
        <div className="inset-0 absolute bg-[#000000af]"></div>

        <div className=" absolute left-[50%] text-center text-[32px] font-medium  top-[50%] -translate-x-1/2 w-full  text-white ">
          <Link to={"/home"}>HOME -</Link>
          <span className="text-[#FFFFFF80]"> SHOPE</span>
        </div>
      </div>
      <div className="relative">
        <img
          className="select-none absolute sm:h-[450px] object-cover w-full "
          src={backgroundImg}
          alt="backgroundImg"
        />

        <div className="container left-[50%] mt-10 -translate-x-1/2 w-full absolute text-white ">
          <div className="text-center mb-20">
            <h3 className=" text-[18px] sm:text-[20px] font-medium ">
              SHOP BY CATEGORY
            </h3>
            <h2 className="secondaryFont text-[30px] sm:text-[54px] font-medium">
              SHOP BY CATEGORY
            </h2>
          </div>
          <div className=" sm:hidden mb-25 flex  justify-center items-center gap-5 ">
            <CarouselCategories selected={selected} setSelected={setSelected} />
          </div>
          <div className=" container  hidden mb-25 sm:flex  justify-center items-center gap-5 ">
            <CarouselCategories
              style="px-40"
              selected={selected}
              setSelected={setSelected}
            />
          </div>
        </div>
      </div>
      <div className="mt-[500px] container flex flex-wrap items-center justify-start gap-5 ">
        {meals?.meals.map((item) => {
          return (
            <div key={item.idMeal} className="basis-full sm:flex-[23%]">
              <Card
                title={item.strMeal}
                img={item.strMealThumb}
                id={item.idMeal}
              />
            </div>
          )
        })}
        {status === "pending" && (
          <div className="text-white text-4xl flex justify-center items-center ">
            <Loader2 className="animate-spin text-5xl m-auto"></Loader2>
          </div>
        )}
      </div>
    </div>
  )
}
