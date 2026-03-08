import { Link } from "react-router-dom"
import background from "../assets/747ba988e9e46d6503b1af4251a66afb588478fb.jpg"

import { Button } from "@/components/ui/button"
import { useCart } from "@/store/useCart"

export default function Cart() {
  const { cart, removeFromCart } = useCart()

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
          <span className="text-[#FFFFFF80]"> CART</span>
        </div>
      </div>
      <div className="container    text-white ">
        {cart.length === 0 ? (
          <div className="text-center my-30">
            <h2 className="secondaryFont text-[54px] font-medium">
              Your cart is currently empty.
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
          <div className="text-center text-white  my-30">
            <h1 className="text-[36px] font-medium">
              There IS{" "}
              <span className="text-red-500 font-bold">{cart.length}</span>{" "}
              Items Is Your Cart
            </h1>
            <div>
              {cart.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="flex gap-5 justify-center items-center"
                  >
                    <img
                      className="object-cover w-[157px] h-[109px] rounded-2xl  "
                      src={item.img}
                      alt=""
                    />
                    <div>
                      <h2 className="text-[20px] font-semibold">
                        {item.title}
                      </h2>
                      <h3>
                        From:{" "}
                        <span className="font-bold text-red-500">
                          {item.from}
                        </span>{" "}
                      </h3>
                      <h4>{item.quantity}</h4>
                      <Button onClick={() => removeFromCart(item.id)}>
                        Remove Meal
                      </Button>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
