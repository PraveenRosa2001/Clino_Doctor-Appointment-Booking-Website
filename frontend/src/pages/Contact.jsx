import React from "react";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p className="font-bold">
          CONTACT <span className="text-gray-700 font-bold">US</span>
        </p>
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-base">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.contact_image}
          alt=""
        />

        <div className="flex flex-col justify-center items-start gap-4">
          <p className="font-bold text-lg text-gray-800">OUR OFFICE</p>
          <p className="text-gray-600">
            <span className="text-gray-800 font-medium">Location:</span> No.128, Abc, Gampaha, SRI LANKA. <br />
            <span className="text-gray-800 font-medium">Email:</span> rosapraveen1@gmail.com <br/><span className="text-gray-800 font-medium">Tel:</span> +94 750 104 549. <br/> 
          </p>

          <p className="font-bold text-lg text-gray-800">Careers at CLINO</p>
          <p className="text-gray-600">
            Learn more about our teams and job openings.
          </p>

          <button className="border border-black px-8 py-4 text-base hover:bg-black hover:text-white transition-all duration-500">
            Explore Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
