import logo from "../assets/logo-small-inverse 1.svg"
import { IoCartOutline } from "react-icons/io5"
import { FaHeart } from "react-icons/fa6"

import { useLocation } from "react-router"
import { cn } from "../lib/cn"
import { Link } from "react-router-dom"
import { useCart } from "@/store/useCart"
export default function Header() {
  const links = [
    { id: 1, name: "HOME", path: "/home" },
    { id: 2, name: "ABOUT", path: "/about" },
    { id: 3, name: "SHOPE", path: "/shope" },
    { id: 4, name: "CONTACT", path: "/contact" },
  ]
  const location = useLocation()
  const { cart } = useCart()

  return (
    <div className="container relative -mb-[83px] mt-3 z-50 flex justify-between items-center">
      <Link to={"/home"}>
        <img className="cursor-pointer " src={logo} alt="" />
      </Link>
      <ul className="flex justify-center items-center gap-7">
        {links.map((link) => {
          return (
            <Link to={link.name.toLowerCase()}>
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
              </li>
            </Link>
          )
        })}
      </ul>
      <div className="flex justify-end-safe  items-center gap-3">
        <Link to={"/favorite"}>
          <div className="relative">
            <FaHeart className=" text-white  border-2 rounded-[50%] p-1 text-4xl cursor-pointer" />
            <span className="absolute bg-[#D62828] rounded-[50%]  -top-2 -right-2 text-white text-center h-[25px] w-[25px]">
              0
            </span>
          </div>
        </Link>
        <Link to={"/cart"}>
          <div className="relative">
            <IoCartOutline className="text-white border-2 rounded-[50%] p-1 text-4xl cursor-pointer" />
            <span className="absolute bg-[#D62828] rounded-[50%]  -top-2 -right-2 text-white text-center h-[25px] w-[25px]">
              {cart.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  )
}
