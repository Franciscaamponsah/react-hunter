import { RiSearchLine } from "react-icons/ri";
import symbol from "../assets/Symbol.png";
const StagBtn = () => {
  return (
    <div className="flex space-x-4 ">
    <span className=""><img className="flex" src={symbol}/></span>
    <div className="space-y-4 ">
    <button className="w-[12.563rem] flex justify-center items-center text-center text-[1rem] rounded-md bg-yellow-600 font-medium leading-[1.5rem] tracking-[0.02rem] py-4 px-[0.75rem]">
      <RiSearchLine className=" bg-red-600"/>
      Domain name search
    </button>
    <button className="w-[12.563rem] flex justify-center items-center text-center text-[1rem] rounded-md bg-white font-medium leading-[1.5rem] tracking-[0.02rem] py-4 px-[0.75rem]">
      Email tracking
    </button>
    <button className="w-[12.563rem] flex justify-center items-center text-center text-[1rem] rounded-md bg-white font-medium leading-[1.5rem] tracking-[0.02rem] py-4 px-[0.75rem]">
      Email verifier
    </button>
    </div>
  </div>
)
}

export default StagBtn