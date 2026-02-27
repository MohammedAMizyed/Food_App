import { Link } from "react-router-dom"
import background from "../assets/747ba988e9e46d6503b1af4251a66afb588478fb.jpg"
import backgroundImg from "../assets/background.png"
import Card from "@/Components/Card"
export default function Shope() {
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
          <div className="mb-25 flex  justify-center items-center gap-15 ">
            <div className="flex flex-col justify-center items-center gap-5">
              <img
                className="w-35 h-35 object-cover rounded-[50%] border-4 "
                src={background}
                alt=""
              />
              <h3 className="text-white text-[24px] font-semibold">
                Vegetarian
              </h3>
            </div>{" "}
            <div className="flex flex-col justify-center items-center gap-5">
              <img
                className="w-35 h-35 object-cover rounded-[50%] border-4 "
                src={background}
                alt=""
              />
              <h3 className="text-white text-[24px] font-semibold">
                Vegetarian
              </h3>
            </div>{" "}
            <div className="flex flex-col justify-center items-center gap-5">
              <img
                className="w-35 h-35 object-cover rounded-[50%] border-4 "
                src={background}
                alt=""
              />
              <h3 className="text-white text-[24px] font-semibold">
                Vegetarian
              </h3>
            </div>
            <div className="flex flex-col justify-center items-center gap-5">
              <img
                className="w-35 h-35 object-cover rounded-[50%] border-4 "
                src={background}
                alt=""
              />
              <h3 className="text-white text-[24px] font-semibold">
                Vegetarian
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-[500px] flex flex-wrap items-center justify-center gap-5 ">
        <Card price="150 EG" rated="4.5" title="Pork Chop with Apple Chutney" />{" "}
        <Card price="150 EG" rated="4.5" title="Pork Chop with Apple Chutney" />{" "}
        <Card price="150 EG" rated="4.5" title="Pork Chop with Apple Chutney" />{" "}
        <Card price="150 EG" rated="4.5" title="Pork Chop with Apple Chutney" />{" "}
        <Card price="150 EG" rated="4.5" title="Pork Chop with Apple Chutney" />{" "}
        <Card
          price="150 EG"
          rated="4.5"
          title="Pork Chop with Apple Chutney"
        />{" "}
      </div>
    </div>
  )
}
