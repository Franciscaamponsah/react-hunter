import AfricanWoman from '../assets/African Woman.png'
import Robot from '../assets/Robot.png'
import Whiteman from '../assets/Whiteman.png'
import Whiteman2 from '../assets/Whiteman2.png'
import Whiteman3 from '../assets/Whiteman3.png'
import WhiteWoman from '../assets/White Woman.png'
import Whitewoman from '../assets/Whitewoman.png'
import Whitewoman2 from '../assets/Whitewoman2.png'
import Whitewoman3 from '../assets/Whitewoman3.png'

const Testimonial = () => {
  return (
    <div className="mx-14">
    <div className="space-y-4">
      <div className="flex justify-center items-center text-center">
        <p className="px-4 py-2 bg-purple-700 bg-opacity-50 rounded-[100px] text-[#5709E0]">
          Testimonials
        </p>
      </div>
      <p className="text-[2.45rem] flex justify-center font-bold leading-[3.11rem]">
        What Our Clients Say About us
      </p>
      <div className="flex justify-center">
        <p className="w-[46.56rem] font-normal text-black opacity-[0.7] text-center leading-6 tracking-[0.02rem]">
          Discover what our satisfied clients have to say about our services.
          Read the testimonials and hear firsthand how our project has
          transformed their businesses, improved efficiency, and provided
          valuable insights. Join our growing list of happy customers and
          experience the benefits for yourself{" "}
        </p>
      </div>
      </div>
      <div>
        <img className='ml-10' src={AfricanWoman} alt="" />
        <img className='absolute left-[40%]' src={Robot} alt="" />
        <img className='ml-10' src={Whiteman} alt="" />
        <img className='' src={Whiteman2} alt="" />
        <img className='' src={Whiteman3} alt="" />
        <img className='' src={WhiteWoman} alt="" />
        <img className='' src={Whitewoman} alt="" />
        <img className='' src={Whitewoman2} alt="" />
        <img className='' src={Whitewoman3} alt="" />
      </div>
    </div>
  );
};

export default Testimonial;
