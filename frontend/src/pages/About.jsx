import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p className="font-bold">
          ABOUT <span className="text-gray-700 font-bold">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.about_image}
          alt=""
        />
        <div className="flex flex-col text-justify gap-6 md:w-4/4 text-base text-gray-600 font-semibold">
          <p>
            Welcome to Clino, where we’re redefining healthcare management to
            simplify your journey toward a healthier life. Our mission is to be
            your trusted partner in navigating the often complex landscape of
            medical appointments and health record management—so you can focus
            on what truly matters: your well-being. At Clino, we understand the
            challenges of managing appointments and tracking health history in
            today’s fast-paced world, and we’ve designed an intuitive,
            user-friendly platform to make healthcare more accessible,
            efficient, and reliable.
          </p>
          <p>
            With a strong commitment to excellence in healthcare technology, we
            continuously enhance Clino by incorporating cutting-edge features
            and functionality. Our team is dedicated to staying at the forefront
            of innovation, implementing the latest advancements to elevate your
            experience and deliver top-tier service. Wherever you are on your
            health journey, Clino is here to support you with convenience,
            security, and care, ensuring a seamless and personalized healthcare
            experience.
          </p>
          <b className="text-gray-800 text-lg">Our Vision</b>
          <p>
            At Clino, our vision is to make quality healthcare accessible and
            effortless for everyone. We aim to simplify health management,
            enabling users to book appointments, access records, and manage care
            seamlessly. Through innovation and a user-first approach, Clino is
            dedicated to transforming healthcare into a natural, worry-free
            experience.
          </p>
        </div>
      </div>

      <div className="text-2xl my-4">
        <p className="font-bold">
          WHY <span className="text-gray-500 font-bold">CHOOSE US</span>{" "}
        </p>
      </div>

      <div className="flex flex-col md:flex-row mb-20">
        <div className="border-4 px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-3 text-base hover:bg-blue-500 hover:text-white transition-all duration-300 text-gray-700 cursor-pointer">
          <b className="font-bold text-lg text-center">Efficiency</b>
          <p className="font-medium text-center">
            "Experience a faster, hassle-free way to book your appointments,
            designed to fit your busy schedule."
          </p>
        </div>
        <div className="border-4 px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-3 text-base hover:bg-blue-500 hover:text-white transition-all duration-300 text-gray-700 cursor-pointer">
          <b className="font-bold text-lg text-center">Convenience</b>
          <p className="font-medium text-center">
            "Find trusted healthcare professionals nearby with just a few
            clicks—healthcare made easy."
          </p>
        </div>
        <div className="border-4 px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-3 text-base hover:bg-blue-500 hover:text-white transition-all duration-300 text-gray-700 cursor-pointer">
          <b className="font-bold text-lg text-center">Personalization</b>
          <p className="font-medium text-center">
            "Get health reminders and tailored recommendations that adapt to
            your unique needs, helping you stay on track."
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
