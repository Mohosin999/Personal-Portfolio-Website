import { FaDownload } from "react-icons/fa6";
import { FaGithub, FaTwitter, FaLinkedin, FaFacebook } from "react-icons/fa";
import Counter from "./Counter";
import Services from "../services";

const Hero = () => {
  return (
    <div className="w-full h-full bg-secondarycolor flex flex-col items-center justify-center z-20">
      <div className="w-11/12 h-full pt-[40rem] flex items-center justify-center gap-4">
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
       *                      Social links
       ======================================================== */}
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
              <Counter from={0} to={100} />+
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
                <button className="w-14 h-14 rounded-full flex justify-center items-center bg-gray-700 border border-gray-600/[0.5] transition-all duration-200 ease-in-out hover:bg-primarycolor">
                  <FaGithub className="w-8 h-8 text-blue-300" />
                </button>
              </a>
            </li>
            {/* Twitter */}
            <li>
              <a href="#">
                <button className="w-14 h-14 rounded-full flex justify-center items-center bg-gray-700 border border-gray-600/[0.5] transition-all duration-200 ease-in-out hover:bg-primarycolor">
                  <FaTwitter className="w-8 h-8 text-blue-300" />
                </button>
              </a>
            </li>
            {/* Linkedin */}
            <li>
              <a href="#">
                <button className="w-14 h-14 rounded-full flex justify-center items-center bg-gray-700 border border-gray-600/[0.5] transition-all duration-200 ease-in-out hover:bg-primarycolor">
                  <FaLinkedin className="w-8 h-8 text-blue-300" />
                </button>
              </a>
            </li>
            {/* Facebook */}
            <li>
              <a href="#">
                <button className="w-14 h-14 rounded-full flex justify-center items-center bg-gray-700 border border-gray-600/[0.5] transition-all duration-200 ease-in-out hover:bg-primarycolor">
                  <FaFacebook className="w-8 h-8 text-blue-300" />
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hero;
