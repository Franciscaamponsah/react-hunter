import Navbar from "../components/Navbar";
import Description from "../components/Description";
import Aim from "../components/Aim";
import Button from "../components/Button";
import GrpImg from "../components/GrpImg";
import GrpText from "../components/GrpText";
import StagBtn from "../components/StagBtn";
import TrustedCom from "../components/TrustedCom";
import Features from "../components/Features";
import Content from "../components/Content";

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
      <div className="w-full py-24">
        <Features />
      </div>
    </div>
  );
};

export default Home;
