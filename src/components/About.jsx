import AboutImg from '../assets/Group 56.png'
import Circles from '../assets/Group 59.png'
import Img from '../assets/Group 58.png'
import Circle2 from '../assets/Group 57.png'
const About = () => {
  return (
    <div className="bg-[#E9E9EA] flex px-14 pt-10 justify-between relative">
      <div className="w-[40%]">
         <img src={Circles} />
         <p className='font-bold text-3xl py-6'>Why you will choose us</p>
         <p className='font-normal'>Choose React Hunter for an unparalleled data intelligence experience. Our cutting-edge product offers a seamless blend of powerful domain and employee verification capabilities, coupled with a user-friendly interface and robust features. With React Hunter, you gain the advantage of accurate and reliable data insights, empowering you to make informed decisions, streamline workflows, and forge stronger business relationships. Elevate your verification processes and unlock the potential of data-driven success with React Hunter.</p>
         <button className='bg-gradient-to-r from-purple-600 to-violet-700 rounded-lg py-2 px-4 text-white mt-5'>Sign up Now!!!</button>
      </div>
      <div className="w-[40%]">
         <img src={Img}/>
      </div>
      <div className='absolute bottom-10 left-[50%]'>
         <img className='w-1/2' src={Circle2}/>
      </div>
      {/* <div> */}
        <p className='absolute right-[50%] px-4 py-2 bg-purple-700 bg-opacity-50 rounded-[100px]'>About</p>
      {/* </div> */}
    </div>
  )
}

export default About
