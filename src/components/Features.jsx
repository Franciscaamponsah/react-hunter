import React from "react";

const Features = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <li className="w-[4.065rem] h-[1.5rem] flex justify-center items-center bg-[#7f23e275] text-[#5709E0] border-[rgba(127, 35, 226, 0.46)] py-6 px-14 rounded-full">
          Features
        </li>
      </div>
      <div className="flex justify-center items-center">
        <p className="text-[2.488rem] mt-8 font-bold">Explore Our Features</p>
      </div>
      <div className="flex justify-center items-center">
        <p className="w-[45.938rem] text-[1rem] mt-5 font-normal text-center leading-[1.5rem]">
          Key features of this project include secure user login and
          authentication, password reset functionality, domain name verification
          with detailed information retrieval, employee affiliation
          verification, and a user-friendly interface design.
        </p>
      </div>
      <div className="flex justify-center items-center bg-red-600 mt-10">
        <div className="mx-14">
          <button className="">Domain name search</button>
          <button className="">Email tracking</button>
          <button className="">Email verifier</button>
        </div>
        <div className="bg-green-600">
          <img src="" alt="" />
          <p>Domain name search</p>
          <p className="bg-yellow-600">
            Streamline your domain name search process with our powerful search
            functionality. Easily verify domain names and gain access to a
            wealth of comprehensive details, including registration information,
            domain age, and DNS records. Make informed decisions and ensure the
            credibility of domains with our robust domain name search feature.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
