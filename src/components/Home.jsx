// import Logo from "./Hunter.png"
import myLogo from "../assets/Hunter.png"

const Home = () => {
  return (
    <div className='h-screen w-full'>
       <div className='h-full w-full pt-8 bg-gradient-to-r from-violet-950 to-violet-500'>
        <div className="bg border-white border bg-white px-14 py-4 mx-5 rounded-full">
          <header className='flex justify-between items-center'>
            <div className="logo">
             {/* <img src={Logo} />  */}
             <img src={myLogo} /> 
            </div>
            <ul className="flex space-x-24 list-none ">
          <li className="active:text-violet-700 focus:outline-none focus:ring focus:ring-violet-700  cursor-pointer">Home</li>
          <li className="active:text-violet-700 focus:outline-none focus:ring focus:ring-violet-700 cursor-pointer">Features</li>
          <li className="active:text-violet-700 focus:outline-none focus:ring focus:ring-violet-700 cursor-pointer">About Us</li>
          <li className="active:text-violet-700 focus:outline-none focus:ring focus:ring-violet-700 cursor-pointer">Contact</li>
            </ul>
          <div className="space-x-5">
            <button className="py-2 px-5 rounded-md text-violet-700 border from-violet-950 to-violet-500">Login</button>
            <button className="bg-gradient-to-r from-violet-950 to-violet-500 py-2 px-5 rounded-md text-white">Sign Up</button>
          </div>
          </header>
        </div>
      </div>
       <div className='h-full w-full bg-green-600'>
      
      </div>
    </div>
  )
}

export default Home
