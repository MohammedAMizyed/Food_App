import { Link } from "react-router-dom"
import background from "../assets/747ba988e9e46d6503b1af4251a66afb588478fb.jpg"

import { Button } from "@/components/ui/button"
import { useCart } from "@/store/useCart"
import { cn } from "@/lib/utils"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../components/ui/tooltip"

export default function Cart() {
  const { cart, removeFromCart, decreaseQuantity, increaseQuantity } = useCart()

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
            <div className="flex justify-between items-start gap-50">
              <div className="flex-1/2">
                {cart.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="flex mb-5 gap-5 justify-start items-center"
                    >
                      <Link to={`/meal/${item.id}`}>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger>
                              {" "}
                              <img
                                className="cursor-pointer select-none object-cover w-[167px] h-[119px] rounded-2xl  "
                                src={item.img}
                                alt=""
                              />
                            </TooltipTrigger>
                            <TooltipContent className="text-black bg-white">
                              <p className="">Go To Meal Information</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </Link>
                      <div className="flex-1">
                        <h2 className="text-start text-[20px] font-semibold">
                          {item.title}
                        </h2>
                        <h3 className="text-start my-2">
                          From:{" "}
                          <span className="font-bold text-red-500">
                            {item.from}
                          </span>{" "}
                        </h3>
                        <div className="flex justify-between items-center">
                          <Button
                            className="cursor-pointer"
                            variant={"destructive"}
                            onClick={() => removeFromCart(item.id)}
                          >
                            Remove Meal
                          </Button>
                          <div className="flex items-center gap-3">
                            Quantity:
                            <div className="flex items-center justify-center gap-2">
                              <Button
                                disabled={item.quantity === 0}
                                onClick={() => decreaseQuantity(item.id)}
                                className=" text-4xl cursor-pointer"
                              >
                                -
                              </Button>
                              <h4
                                className={cn(
                                  "text-2xl font-bold",
                                  item.quantity == 0
                                    ? "text-red-500"
                                    : "text-white",
                                )}
                              >
                                {item.quantity}
                              </h4>
                              <Button
                                onClick={() => increaseQuantity(item.id)}
                                className="text-4xl cursor-pointer "
                              >
                                +
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
              <div className="flex-3/7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                officiis excepturi tenetur sapiente quae. Facere unde dolores
                inventore corrupti voluptate aliquid nulla, velit quis ratione
                expedita quibusdam molestias quia nesciunt!
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
