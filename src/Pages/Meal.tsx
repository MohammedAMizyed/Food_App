import { Link } from "react-router-dom"
import background from "../assets/747ba988e9e46d6503b1af4251a66afb588478fb.jpg"
import { useMeal } from "@/Hooks/useMeal"
import { useParams } from "react-router-dom"
export default function food() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { id } = useParams<{ id: string }>()

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data } = useMeal(id || 1)
  return (
    <div className="">
      <div className="relative">
        <img
          className="select-none h-[483px]  object-cover w-full  "
          src={background}
          alt="background"
        />
        <div className="inset-0 absolute bg-[#000000af]"></div>

        <div className=" absolute text-[#FFFFFF80] left-[50%] text-center text-[32px] font-medium  top-[50%] -translate-x-1/2 w-full">
          <Link to={"/home"}>HOME -</Link>
          <Link to={"/shope"}>
            <span className="text-[#FFFFFF80]"> SHOPE</span>
          </Link>
          <span className="  text-white ">- {data?.strMeal}</span>
        </div>
      </div>
      <div>
        <div className=" mt-10 w-full  text-white ">
          <div className="text-center mb-20">
            <h3 className="text-[20px] font-medium ">{data?.strCategory}</h3>
            <h2 className="secondaryFont text-[54px] font-medium">
              {data?.strMeal}
            </h2>
          </div>
        </div>
      </div>
      <div className="container  flex justify-center items-center gap-10">
        <img
          className="select-none object-cover rounded-xl lg:max-h-[500px] w-full "
          src={data?.strMealThumb}
          alt=""
        />
        <div className=" text-white">
          <h1 className="text-[36px] font-normal  text-white">
            {data?.strMeal}
          </h1>
          <h2 className="text-[20px] font-normal text-white">
            {data?.strInstructions}
          </h2>
          <h3>
            From:{" "}
            <span className="text-red-600 font-bold">{data?.strArea}</span>
          </h3>
          <div className="underline">
            {" "}
            <a target="_blank" href={data?.strSource}>
              Go To The Source
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
