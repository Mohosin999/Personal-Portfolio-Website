import { FaDownload } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-11/12 h-full flex items-center justify-center">
        {/* Right side hero section */}
        <div className="flex-1">
          <div className="text_container">
            <h5 className="text-gray-400 text-base">Hey there!</h5>
            <h2 className="text-6xl font-bold">
              I'm <span className="text-primarycolor">Mohosin Hasan</span>{" "}
              <br /> a Web Developer
            </h2>
            {/* Paragraph */}
            <p className="py-4 text-sm text-gray-400">
              Hi, I'm Mohosin Hasan Akash, a frontend web developer from
              Bangladesh. I specialize in building web applications using React
              and Express. My passion is crafting user-friendly and visually
              appealing digital experiences.
            </p>
            {/* Download resume button */}
            <a href="./resume.pdf" target="_blank">
              <button className="flex items-center justify-center gap-3 text-primarycolor px-5 py-2 my-3 text-sm border-2 border-primarycolor transition-all ease-in-out duration-200 hover:bg-primarycolor hover:text-white">
                <FaDownload /> Download Resume
              </button>
            </a>
          </div>
        </div>

        {/* Left side hero section */}
        <div className="flex-1"></div>
      </div>
    </div>
  );
};

export default Hero;
