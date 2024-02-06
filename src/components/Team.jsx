import Team1 from "../assets/Team1.png";
import Team2 from "../assets/Team2.png";
import Team3 from "../assets/Team3.png";
import Team4 from "../assets/Team4.png";

const Team = () => {
  return (
    <div className="space-y-4 mt-[4.94rem]">
      <div className="flex justify-center items-center text-center">
        <p className="px-4 py-2 bg-purple-700 bg-opacity-50 rounded-[100px] text-[#5709E0]">
          Meet the team
        </p>
      </div>
      <p className="text-[2.45rem] flex justify-center font-bold leading-[3.11rem]">
        Meet the <span className="text-red-400">brains </span>behind{" "}
        <span className="text-purple-700 bg-opacity-50">Hunter</span>
      </p>
      <div className="flex items-center justify-center">
        <p className="w-[60.63rem] font-normal text-black opacity-[0.7] text-center leading-6 tracking-[0.02rem]">
          Meet our exceptional team of talented individuals who are passionate
          about delivering top-notch solutions. With a diverse range of
          expertise and a shared commitment to excellence, we work
          collaboratively to bring innovative ideas to life and provide you with
          the best possible outcomes. Get to know our dedicated team who will go
          above and beyond to ensure your project's success.
        </p>
      </div>
      <div className="flex overflow-x-hidden pt-10 space-x-4">
        <div className="relative  ">
          <div className="absolute top-[78%] left-[25%] text-white">
            <p className="">Jane Cooper</p>
            <p className="">Web Designer</p>
          </div>
          <img className="" src={Team1} alt="" />
        </div>
        <div className="relative ">
          <div className="absolute top-[78%] left-[25%] text-white">
            <p className="">Jenny Wilson</p>
            <p className="">Web Developer</p>
          </div>
          <img className="" src={Team4} alt="" />
        </div>
        <div className="relative ">
          <div className="absolute top-[78%] left-[25%] text-white">
            <p className="">Wade Warren</p>
            <p className="">UI/UX designer</p>
          </div>
          <img className="" src={Team2} alt="" />
        </div>
        <div className="relative ">
          <div className="absolute top-[78%] left-[25%] text-white">
            <p className="">Kristin Watson</p>
            <p className="">Frontend Developer</p>
          </div>
          <img className="" src={Team3} alt="" />
        </div>
        <div className="relative ">
          <div className="absolute top-[78%] left-[25%] text-white">
            <p className="">Ronald Richards</p>
            <p className="">Fullstack developer</p>
          </div>
          <img className="" src={Team2} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Team;
