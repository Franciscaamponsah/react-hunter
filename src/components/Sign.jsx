import Girl from "../assets/Girl.png";
const Sign = () => {
  return (
    <div className="mx-14 my-20 bg-gradient-to-r from-purple-600 to-violet-700 rounded-[5.313rem] font-Archivo ">
      <div className="flex justify-between relative">
        <div className="">
          <img src={Girl} />
        </div>
    <div className="py-20 absolute left-[50%] top-16">
    <div className="flex">
          {/* <p className="text-white text-8xl ">"</p> */}
          <span className="text-8xl text-white self-start">"</span>
          <p className="text-white text-center w-[29.63rem] ">
            Empowering businesses to navigate the digital landscape with
            confidence, our project harnesses the power of data verification,
            enabling users to unlock valuable insights, streamline processes,
            and make informed decisions. With a seamless user experience and
            comprehensive features, we provide the tools needed to ensure
            credibility, boost productivity, and achieve success in the
            ever-evolving business landscape.
          </p>
            <span className="text-8xl text-white self-end align-bottom">"</span>
          {/* <p className="text-white text-8xl text-end">"</p> */}
        </div>
          <div className="flex justify-center mt-5">
            <button className="rounded-lg py-2 px-4 bg-yellow-300 ">
              Sign Up Now!!!
            </button>
          </div>
    </div>
      </div>
    </div>
  );
};

export default Sign;
