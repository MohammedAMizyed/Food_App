import Header from "../Components/Heder"
import Landing from "../Components/Landing"
import background from "../assets/background.png"
export default function Home() {
  return (
    <div>
      <Header />
      <Landing />
      <div className="relative">
        <img
          className="absolute  object-cover w-full h-screen "
          src={background}
          alt="background"
        />
        <div className="left-[50%] text-center mt-10 -translate-x-1/2 absolute text-white ">
          <h3 className="text-[20px] font-medium ">MOST SELLING</h3>
          <h2 className="secondaryFont text-[64px] font-medium">
            MOST SELLING
          </h2>
        </div>
      </div>
    </div>
  )
}
