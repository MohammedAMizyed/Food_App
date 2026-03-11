import { Link } from "react-router-dom"
import background from "../assets/747ba988e9e46d6503b1af4251a66afb588478fb.jpg"
import backgroundImg from "../assets/background.png"
import Card from "@/components/Card"
import { useCategories } from "@/Hooks/useCategories"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { useCategorySearch } from "@/Hooks/useCategorySearch"
import { FaCheck } from "react-icons/fa"
import { Loader2 } from "lucide-react"

export default function Shope() {
  const { data, status: statusOfCategories } = useCategories()
  const [selected, setSelected] = useState("Beef")
  const { data: meals, status } = useCategorySearch(selected)
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
          <span className="text-[#FFFFFF80]"> SHOPE</span>
        </div>
      </div>
      <div className="relative">
        <img
          className="select-none absolute h-[450px] object-cover w-full "
          src={backgroundImg}
          alt="backgroundImg"
        />

        <div className="container left-[50%] mt-10 -translate-x-1/2 w-full absolute text-white ">
          <div className="text-center mb-20">
            <h3 className="text-[20px] font-medium ">SHOP BY CATEGORY</h3>
            <h2 className="secondaryFont text-[54px] font-medium">
              SHOP BY CATEGORY
            </h2>
          </div>
          <div className="mb-25 flex  justify-center items-center gap-5 ">
            {data?.categories.slice(0, 7).map((item) => {
              return (
                <div
                  onClick={() => {
                    setSelected(item.strCategory)
                  }}
                  key={item.idCategory}
                  className="flex flex-col justify-center items-center gap-5"
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
              )
            })}
            {statusOfCategories === "pending" && (
              <div className="text-white text-4xl flex justify-center items-center ">
                <Loader2 className="animate-spin text-5xl m-auto"></Loader2>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="mt-[500px] flex flex-wrap items-center justify-start gap-5 ">
        {meals?.meals.map((item) => {
          return (
            <div key={item.idMeal} className="flex-[24%]">
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
