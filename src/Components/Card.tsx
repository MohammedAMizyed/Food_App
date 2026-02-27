import { CiCircleCheck } from "react-icons/ci"
import { Button } from "./ui/button"
type Props = {
  price: string
  rated: string
  title: string
}
export default function Card({ price, rated, title }: Props) {
  return (
    <div>
      <img src="" alt="" />
      <div>
        <h3>{price}</h3>
        <div className="underline underline-offset-2">
          <img src="" alt="" />
          <h1>{rated}</h1>
        </div>
        <h1>{title}</h1>
        <div className="text-white flex items-center gap-4">
          <CiCircleCheck className="text-red-500" />4 Pieces
        </div>
        <div className="text-white flex items-center gap-4">
          <CiCircleCheck className="text-red-500" />4 Pieces
        </div>
      </div>
      <Button className="bg-none rounded-[14px] text-white border-2 border-white">
        Add To Cart
      </Button>
    </div>
  )
}
