import AfricanWoman from "../assets/African Woman.png";
import Robot from "../assets/Robot.png";
import Whiteman from "../assets/Whiteman.png";
import Whiteman2 from "../assets/Whiteman2.png";
import Whiteman3 from "../assets/Whiteman3.png";
import WhiteWoman from "../assets/White Woman.png";
import Whitewoman from "../assets/Whitewoman.png";
import Whitewoman2 from "../assets/Whitewoman2.png";
import Whitewoman3 from "../assets/Whitewoman3.png";

const Testimonial = () => {
  return (
    <div className="mx-14 ">
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
            experience the benefits for yourself
          </p>
        </div>
      </div>
      <div className="relative flex mt-10   h-[30rem]">
        <img
          className="ml-10 w-[7.625rem] h-[7.625rem]"
          src={AfricanWoman}
          alt=""
        />
        <img
          className="w-[4.75rem] h-[4.75rem] absolute left-[40%] top-8"
          src={Robot}
          alt=""
        />
        <img className="w-[12.875rem] absolute top-48" src={Whiteman} alt="" />
        <img
          className="w-[8.5rem] h-[8.5rem] absolute top-20 left-[50%]"
          src={Whiteman2}
          alt=""
        />
        <img
          className="w-[7.625rem] h-[7.625rem] absolute top-20 left-[30%]"
          src={Whiteman3}
          alt=""
        />
        <img
          className="w-[12.875rem] h-[12.875rem] absolute left-[67%]"
          src={WhiteWoman}
          alt=""
        />
        <img
          className="w-[4.75rem] h-[4.75rem] absolute top-60 left-[75%]"
          src={Whitewoman}
          alt=""
        />
        <img
          className="w-[8.5rem] h-[8.5rem] absolute top-52 left-[45%]"
          src={Whitewoman2}
          alt=""
        />
        <img
          className="w-[8.5rem] h-[8.5rem] mr-10 absolute top-36 left-[92%]"
          src={Whitewoman3}
          alt=""
        />
      </div>
      <div className="hidden">
        <div className="w-[20rem] p-4 rounded-md border absolute leading-6 tracking-[0.02rem] text-center items-center font-normal">
          <p className="">
            "I was blown away by the level of accuracy and convenience offered
            by the project. It has revolutionized how we verify domains and
            employee affiliations, saving us valuable time and providing us with
            reliable data insights. This project is an absolute game-changer for
            our business!"
          </p>
          <p className="">- John Smith,</p>
          <p className="">CEO of XYZ Company</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
