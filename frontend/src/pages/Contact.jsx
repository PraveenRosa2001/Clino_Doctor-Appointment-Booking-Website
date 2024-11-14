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
        <img  className="w-full md:max-w-[360px]" src={assets.contact_image} alt="" />
      

        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-bold text-lg text-gray-600">Our OFFICE</p>
          <p className="text-gray-500">No.128 <br/> Abc, Gampaha, SRI LANKA</p>
          <p className="text-gray-500">Tel: +94 750 104 549 <br/> Email: rosapraveen1@gmail.com</p>
          <p className="font-bold text-lg text-gray-600">Careers at CLINO</p>
          <p className="text-gray-500">Learn more about our teams and job openings.</p>

          <button className="border border-black px-8 py-4 text-base hover:bg-black hover:text-white transition-all duration-500">Explore Jobs</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
