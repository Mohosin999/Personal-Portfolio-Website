import { FaDownload } from "react-icons/fa6";
import Services from "../services";
import PersonalInfo from "./PersonalInfo";

const Hero = () => {
  return (
    <div className="w-full h-full bg-secondarycolor flex flex-col items-center justify-center z-20">
      <div className="w-11/12 h-full pt-[52.4rem] flex items-center justify-center gap-4">
        {/* Right side hero section */}
        <div className="w-7/12">
          <div className="text_container">
            <h5 className="text-gray-400 text-base">Hey there!</h5>
            <h2 className="text-6xl font-bold">
              I'm <span className="text-primarycolor">Mohosin Hasan</span>{" "}
              <br /> a Frontend Developer
            </h2>
            {/* Paragraph */}
            <p className="py-4 text-sm text-gray-400">
              Hi, I'm Mohosin Hasan Akash, a frontend web developer from
              Bangladesh. I specialize in building web applications using React
              and Express. My passion is crafting user-friendly and visually
              appealing digital experiences. I'm Mohosin Hasan Akash, a frontend
              web developer from Bangladesh. I specialize in building web
              applications using React and Express. My passion is crafting
              user-friendly and visually appealing digital experiences.
            </p>
            {/* Download resume button */}
            <a href="./resume.pdf" target="_blank" className="flex w-fit">
              <button className="flex items-center justify-center gap-3 text-primarycolor px-5 py-2 my-3 text-sm border-2 border-primarycolor transition-all ease-in-out duration-200 hover:bg-primarycolor hover:text-white">
                <FaDownload /> Download Resume
              </button>
            </a>
          </div>
        </div>

        {/* Left side hero section */}
        <div className="w-5/12 flex items-center justify-center">
          <div className="hero_img_container w-full max-w-md bg-secondarycolor p-3 rounded-full border border-gray-600/[0.5] shadow-md">
            <img
              src="./img/hero.jpg"
              alt="profile_image"
              className="w-full h-full rounded-full"
            />
          </div>
        </div>
      </div>

      {/* ========================================================
       *                      services
       ======================================================== */}
      <Services />

      {/* ========================================================
       *                Personal info & Social links
       ======================================================== */}
      <PersonalInfo email={true} />
    </div>
  );
};

export default Hero;
