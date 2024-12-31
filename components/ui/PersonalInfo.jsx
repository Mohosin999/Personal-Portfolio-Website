import React from "react";
import Counter from "./Counter";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const PersonalInfo = () => {
  return (
    <div className="w-11/12 h-fit pb-10 pt-14 flex items-center justify-center gap-5">
      {/* Left section */}
      <div className="w-7/12 py-6 flex items-center justify-around bg-secondarycolor p-3 rounded-3xl border border-gray-600/[0.5] shadow-md">
        {/* Time of experience */}
        <div className="flex items-center justify-center gap-3 border-r-2 border-gray-400 w-full">
          <div className="font-bold text-5xl text-primarycolor flex items-center justify-center">
            <Counter from={0} to={3} />+
          </div>
          <div>
            <h4 className="text-sm">
              Years of <br /> Experience
            </h4>
          </div>
        </div>
        {/* Number of completed projects */}
        <div className="flex items-center justify-center w-full gap-3">
          <div className="font-bold text-5xl text-primarycolor flex items-center justify-center">
            <Counter from={0} to={10} />+
          </div>
          <div>
            <h4 className="text-sm">
              Projects <br /> Completed
            </h4>
          </div>
        </div>
      </div>

      {/* Right section */}
      <div className="w-5/12 py-5 flex items-center justify-around bg-secondarycolor p-3 rounded-3xl border border-gray-600/[0.5] shadow-md">
        <ul className="flex items-center justify-center gap-6">
          {/* GitHub */}
          <li>
            <a href="#">
              <button className="w-14 h-14 rounded-full flex justify-center items-center bg-cardcolor border border-gray-600/[0.5] transition-all duration-200 ease-in-out hover:bg-primarycolor">
                <FaGithub className="w-8 h-8" />
              </button>
            </a>
          </li>
          {/* Twitter */}
          <li>
            <a href="#">
              <button className="w-14 h-14 rounded-full flex justify-center items-center bg-cardcolor border border-gray-600/[0.5] transition-all duration-200 ease-in-out hover:bg-primarycolor">
                <FaTwitter className="w-8 h-8" />
              </button>
            </a>
          </li>
          {/* Linkedin */}
          <li>
            <a href="#">
              <button className="w-14 h-14 rounded-full flex justify-center items-center bg-cardcolor border border-gray-600/[0.5] transition-all duration-200 ease-in-out hover:bg-primarycolor">
                <FaLinkedin className="w-8 h-8" />
              </button>
            </a>
          </li>
          {/* Facebook */}
          <li>
            <a href="#">
              <button className="w-14 h-14 rounded-full flex justify-center items-center bg-cardcolor border border-gray-600/[0.5] transition-all duration-200 ease-in-out hover:bg-primarycolor">
                <FaFacebook className="w-8 h-8" />
              </button>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PersonalInfo;
