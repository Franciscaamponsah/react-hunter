import facebook from "../assets/facebook.png";
import binance from "../assets/Binance.png";
import google from "../assets/google.png";
import airbnb from "../assets/airbnb.png";
import Navbar from "../components/Navbar";
import Description from "../components/Description";
import Aim from "../components/Aim";
import Button from "../components/Button";
import GrpImg from "../components/GrpImg";
import GrpText from "../components/GrpText";
import StagBtn from "../components/StagBtn";

const Home = () => {
  return (
    <div className="h-screen w-full">
      <div className=" w-full pt-8 bg-gradient-to-r from-violet-950 to-violet-500">
        <Navbar />
        <Description />
        <Aim />
        <Button />
        <div className="flex justify-between mx-14">
         <StagBtn />
          <GrpImg />
          <GrpText />
        </div>
      </div>
      <div className="h-[10.19rem] w-full bg-[#E9E9EA]">
       <div className="">
        <div><p>Trusted by</p></div>
       </div>
       <div>
       <img src={facebook}/>
       <img src={binance}/>
       <img src={google}/>
       <img src={airbnb}/>
       </div>
      </div>
    </div>
  );
};

export default Home;
