import logo from "../assets/logo-small-inverse 1.svg"
import { IoCartOutline } from "react-icons/io5"
import { FaHeart } from "react-icons/fa6"

import { useLocation } from "react-router"
import { cn } from "../lib/cn"
import { Link } from "react-router-dom"
export default function Header() {
  const links = [
    { id: 1, name: "HOME", path: "/home" },
    { id: 2, name: "ABOUT", path: "/about" },
    { id: 3, name: "HOPE", path: "/shop" },
    { id: 4, name: "CONTACT", path: "/contact" },
  ]
  const location = useLocation()
  return (
    <div className="container relative -mb-[83px] mt-3 z-50 flex justify-between items-center">
      <Link to={"/home"}>
        <img className="cursor-pointer " src={logo} alt="" />
      </Link>
      <ul className="flex justify-center items-center gap-7">
        {links.map((link) => {
          return (
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
          )
        })}
      </ul>
      <div className="flex justify-end-safe  items-center gap-3">
        <FaHeart className="text-white text-3xl" />
        <IoCartOutline className="text-white text-3xl" />
      </div>
    </div>
  )
}
