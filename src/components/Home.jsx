import myLogo from "../assets/Hunter.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { RiSearchLine } from "react-icons/ri";

const Home = () => {
  return (
    <div className="h-screen w-full">
      <div className=" w-full pt-8 bg-gradient-to-r from-violet-950 to-violet-500">
        <div className="bg border-white border bg-white px-14 py-4 mx-14 rounded-full">
          <header className="flex justify-between items-center">
            <div className="logo">
              {/* <img src={Logo} />  */}
              <img src={myLogo} />
            </div>
            <ul className="flex space-x-24 list-none font-Archivo">
              <li className="active:text-violet-700 focus:outline-none focus:ring focus:ring-violet-700  cursor-pointer">
                Home
              </li>
              <li className="active:text-violet-700 focus:outline-none focus:ring focus:ring-violet-700 cursor-pointer">
                Features
              </li>
              <li className="active:text-violet-700 focus:outline-none focus:ring focus:ring-violet-700 cursor-pointer">
                About Us
              </li>
              <li className="active:text-violet-700 focus:outline-none focus:ring focus:ring-violet-700 cursor-pointer">
                Contact
              </li>
            </ul>
            <div className="space-x-5">
              <button className="py-2 px-5 rounded-md text-violet-700 border from-violet-950 to-violet-500">
                Login
              </button>
              <button className="bg-gradient-to-r from-violet-950 to-violet-500 py-2 px-5 rounded-md text-white">
                Sign Up
              </button>
            </div>
          </header>
        </div>
        <div className="mt-[4.3rem] text-2xl flex justify-center items-center">
          <p className="w-[54.5rem] text-center text-white text-[3rem] font-bold leading-[3.733rem] font-Archivo">
            Validating domains, finding emails and verifying employees just got
            easier with <span className="text-yellow-400">Hunter AI</span>.{" "}
          </p>
        </div>
        <div className="mt-[3rem] text-2xl flex justify-center items-center">
          <p className="w-[37.875rem] text-center text-white text-[1rem] font-Archivo leading-[1.5rem] tracking-[0.02rem]">
          Empower your business with the comprehensive data capabilities of Hunter API, enabling you to access verified domain information, discover relevant email addresses, and validate employee details.
          </p>
        </div>
        <div className="mt-[3rem] text-2xl flex justify-center items-center">
          <button className="w-[12.563rem] flex justify-center items-center text-center text-[1rem] rounded-md bg-yellow-500 font-medium leading-[1.5rem] tracking-[0.02rem] py-4 px-[0.75rem]">
            Get Started for free
            <FaArrowRightLong className="flex justify-center items-center text-black ml-2"/>
          </button>
        </div>
        <div className="space-y-4 mx-14">
          <button className="w-[12.563rem] flex justify-center items-center text-center text-[1rem] rounded-md bg-white font-medium leading-[1.5rem] tracking-[0.02rem] py-4 px-[0.75rem]">
            <RiSearchLine />
            Domain name search
          </button>
          <button className="w-[12.563rem] flex justify-center items-center text-center text-[1rem] rounded-md bg-white font-medium leading-[1.5rem] tracking-[0.02rem] py-4 px-[0.75rem]">
            Email tracking
          </button>
          <button className="w-[12.563rem] flex justify-center items-center text-center text-[1rem] rounded-md bg-white font-medium leading-[1.5rem] tracking-[0.02rem] py-4 px-[0.75rem]">
            hdfhdkhf
          </button>
        </div>
      </div>
      <div className="h-full w-full bg-green-600"></div>
    </div>
  );
};

export default Home;
