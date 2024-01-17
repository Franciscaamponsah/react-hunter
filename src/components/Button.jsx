import { FaArrowRightLong } from "react-icons/fa6";

const Button = () => {
  return (
      <div className="mt-[3rem] text-2xl flex justify-center items-center">
          <button className="w-[12.563rem] flex justify-center items-center text-center text-[1rem] rounded-md bg-yellow-500 font-medium leading-[1.5rem] tracking-[0.02rem] py-4 px-[0.75rem]">
            Get Started for free
            <FaArrowRightLong className="flex justify-center items-center text-black ml-2"/>
          </button>
    </div>
  )
}

export default Button
