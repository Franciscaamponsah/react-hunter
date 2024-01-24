import myLogo from "../assets/Hunter.png";

const Navbar = () => {
  return (
    <div className="bg border-white border items-center justify-center bg-white px-14 py-4 mx-14 rounded-full hidden md:block">
      <header className="flex justify-between items-center">
        <div className="">
          <img src={myLogo} />
        </div>
        <ul className="flex space-x-24 list-none font-Archivo">
          <li className="hover:text-violet-700 active:text-violet-700 focus:outline-none focus:ring focus:text-violet-700  cursor-pointer">
            Home
          </li>
          <li className="hover:text-violet-700 active:text-violet-700 focus:outline-none focus:ring focus:text-violet-700 cursor-pointer">
            Features
          </li>
          <li className="hover:text-violet-700 active:text-violet-700 focus:outline-none focus:ring focus:text-violet-700 cursor-pointer">
            About Us
          </li>
          <li className="hover:text-violet-700 active:text-violet-700 focus:outline-none focus:ring focus:text-violet-700 cursor-pointer">
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
  );
};

export default Navbar;
