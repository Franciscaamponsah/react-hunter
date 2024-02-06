import Navbar from "../components/Navbar";
import Description from "../components/Description";
import Aim from "../components/Aim";
import Button from "../components/Button";
import GrpImg from "../components/GrpImg";
import GrpText from "../components/GrpText";
import StagBtn from "../components/StagBtn";
import TrustedCom from "../components/TrustedCom";
import About from "../components/About";
import Sign from "../components/Sign";
import Features from "../components/Features";
import Content from "../components/Content";
import Testimonial from "../components/Testimonial";
import Subscribe from "../components/Subscribe";
import Team from "../components/Team";

const Home = () => {
  return (
    <div className="h-screen w-full font-Archivo">
      <div className="w-full pt-8 bg-gradient-to-r from-violet-950 to-violet-500">
        <Navbar />
        <Description />
        <Aim />
        <Button />
        <div className="flex justify-between mx-14 flex-col md:flex-row">
         <StagBtn />
          <GrpImg />
          <GrpText />
        </div>
      </div>
      <div className="h-[10.19rem] w-full bg-[#E9E9EA] flex justify-center items-center">
      <TrustedCom />
      </div>
        <Features />
    	  <About />
        <Sign />
        <Testimonial />
        <Subscribe />
        <Team />
    </div>
  );
};

export default Home;


// import Team1 from '../assets/Team1.png'
// import Team2 from '../assets/Team2.png'
// import Team3 from '../assets/Team3.png'
// import Team4 from '../assets/Team4.png'

// const Team = () => {
//   return (
//       <div className="space-y-4 mt-[4.94rem]">
//         <div className="flex justify-center items-center text-center">
//           <p className="px-4 py-2 bg-purple-700 bg-opacity-50 rounded-[100px] text-[#5709E0]">
//             Meet the team
//           </p>
//         </div>
//         <p className="text-[2.45rem] flex justify-center font-bold leading-[3.11rem]">
//           Meet the <span className="text-red-400">brains </span>behind <span className="text-purple-700 bg-opacity-50">Hunter</span>
//         </p>
//         <div className="flex items-center justify-center">
//           <p className="w-[60.63rem] font-normal text-black opacity-[0.7] text-center leading-6 tracking-[0.02rem]">
//             Meet our exceptional team of talented individuals who are passionate
//             about delivering top-notch solutions. With a diverse range of
//             expertise and a shared commitment to excellence, we work
//             collaboratively to bring innovative ideas to life and provide you
//             with the best possible outcomes. Get to know our dedicated team who
//             will go above and beyond to ensure your project's success.
//           </p>
//         </div>
//         <div className='flex space-x-3 overflow-x-hidden pt-10'>
//           <img className='' src={Team1} alt="" />
//           <img className='' src={Team2} alt="" />
//           <img className='' src={Team3} alt="" />
//           <img className='' src={Team4} alt="" />
//           <img className='' src={Team2} alt="" />
//         </div>
//       </div>
//   );
// };

// export default Team;
