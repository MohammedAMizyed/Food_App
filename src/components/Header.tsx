import logo from "../assets/logo-small-inverse 1.svg"
import { IoCartOutline } from "react-icons/io5"
import { FaHeart } from "react-icons/fa6"
import { VscListSelection } from "react-icons/vsc"
import { useLocation } from "react-router"
import { cn } from "../lib/utils"
import { Link } from "react-router-dom"
import { useCart } from "@/store/useCart"
import { useFavorite } from "@/store/useFavorite"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
export default function Header() {
  const links = [
    { id: 1, name: "HOME", path: "/home" },
    { id: 2, name: "ABOUT", path: "/about" },
    { id: 3, name: "SHOPE", path: "/shope" },
    { id: 4, name: "CONTACT", path: "/contact" },
  ]
  const location = useLocation()
  const { cart } = useCart()
  const { favoriteList } = useFavorite()

  return (
    <div className="container relative -mb-[83px] mt-3 z-50 flex justify-between items-center">
      <Link to={"/home"}>
        <TooltipProvider>
          {" "}
          <Tooltip>
            <TooltipTrigger>
              {" "}
              <img
                className="sm:w-full w-[50px] cursor-pointer "
                src={logo}
                alt=""
              />
            </TooltipTrigger>
            <TooltipContent className="text-black bg-white">
              <p>Go To Home Page</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </Link>
      <Sheet>
        <SheetTrigger asChild>
          <div className="sm:hidden block text-white cursor-pointer">
            <VscListSelection className="text-3xl" />
          </div>
        </SheetTrigger>

        <SheetContent
          side="right"
          className="bg-black text-white text-center w-[200px]"
        >
          <div className="flex flex-col gap-6 mt-10">
            {links.map((link) => (
              <Link
                key={link.id}
                to={link.path}
                className="text-xl font-medium"
              >
                {link.name}
              </Link>
            ))}

            {/* FAVORITE */}
            <Link to="/favorite">
              <div className="flex justify-center items-center gap-3">
                <FaHeart className="text-2xl" />
                <span>Favorite ({favoriteList.length})</span>
              </div>
            </Link>

            {/* CART */}
            <Link to="/cart">
              <div className="flex justify-center items-center gap-3">
                <IoCartOutline className="text-2xl" />
                <span>Cart ({cart.length})</span>
              </div>
            </Link>
          </div>
        </SheetContent>
      </Sheet>
      <ul className="hidden sm:flex justify-center items-center gap-7">
        {links.map((link) => {
          return (
            <Link to={link.name.toLowerCase()}>
              <TooltipProvider>
                {" "}
                <Tooltip>
                  <TooltipTrigger>
                    {" "}
                    <li
                      key={link.id}
                      className={cn(
                        "font-medium text-[20px] cursor-pointer hover:text-[#ffffffb7] hover:underline hover:underline-offset-8",
                        location.pathname == link.path
                          ? "text-white underline underline-offset-8 "
                          : "text-[#FFFFFF80] ",
                      )}
                    >
                      {link.name}
                    </li>{" "}
                  </TooltipTrigger>
                  <TooltipContent className="text-black bg-white">
                    <p>Go To {link.name} Page</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Link>
          )
        })}
      </ul>
      <div className="hidden sm:flex justify-end-safe  items-center gap-3">
        <Link to={"/favorite"}>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                {" "}
                <div className="relative">
                  <FaHeart className=" text-white  border-2 rounded-[50%] p-1 text-4xl cursor-pointer" />
                  <span className="absolute bg-[#D62828] rounded-[50%]  -top-2 -right-2 text-white text-center h-[25px] w-[25px]">
                    {favoriteList.length}
                  </span>
                </div>
              </TooltipTrigger>
              <TooltipContent className="text-black bg-white">
                <p>Go To Cart Page</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </Link>

        <Link to={"/cart"}>
          <TooltipProvider>
            {" "}
            <Tooltip>
              <TooltipTrigger>
                {" "}
                <div className="relative">
                  <IoCartOutline className="text-white border-2 rounded-[50%] p-1 text-4xl cursor-pointer" />
                  <span className="absolute bg-[#D62828] rounded-[50%]  -top-2 -right-2 text-white text-center h-[25px] w-[25px]">
                    {cart.length}
                  </span>
                </div>
              </TooltipTrigger>
              <TooltipContent className="text-black bg-white">
                <p>Go To Favorite Page</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </Link>
      </div>
    </div>
  )
}
