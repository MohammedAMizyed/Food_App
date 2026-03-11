import { Link } from "react-router-dom"
import background from "../assets/747ba988e9e46d6503b1af4251a66afb588478fb.jpg"

import { Button } from "@/components/ui/button"
import { useFavorite } from "@/store/useFavorite"
export default function Favorite() {
  const { favoriteList, removeFromFavorite } = useFavorite()
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
        {favoriteList.length === 0 ? (
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
        ) : (
          <div className="mt-10 flex flex-wrap items-center justify-start gap-5 ">
            {favoriteList.map((meal) => {
              return (
                <div key={meal.id} className="basis-[24%]">
                  <div>
                    <img
                      className="rounded-2xl max-w-[350px] max-h-[250px] w-full h-full object-cover"
                      src={meal.img}
                      alt=""
                    />
                    <h3 className="text-[25px] my-1 font-semibold text-white">
                      {meal.title}
                    </h3>
                    <hr />
                    <Link to={`/meal/${meal.id}`}>
                      <Button
                        className="text-center w-full text-white cursor-pointer"
                        variant={"link"}
                      >
                        See More Information About Meal
                      </Button>
                    </Link>
                    <Button
                      onClick={() => {
                        removeFromFavorite(meal.id)
                      }}
                      variant={"destructive"}
                      className="text-center w-full cursor-pointer"
                    >
                      Remove From Favorite List
                    </Button>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
