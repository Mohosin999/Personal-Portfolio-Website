import Education from "@/components/education";
import Skills from "@/components/skills";
import PersonalInfo from "@/components/ui/PersonalInfo";

const About = () => {
  return (
    <div className="w-full h-full bg-secondarycolor flex flex-col items-center justify-center z-20">
      <div className="w-11/12 h-full pt-28 flex items-center justify-center gap-4">
        {/* Right side hero section */}
        <div className="w-7/12">
          <div className="text_container">
            <h2 className="text-4xl font-bold">About Me</h2>
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
            {/* Paragraph */}
            <p className="py-4 text-sm text-gray-400">
              Hi, I'm Mohosin Hasan Akash, a frontend web developer from
              Bangladesh. I specialize in building web applications using React
              and Express. My passion is crafting user-friendly and visually
              appealing digital experiences. I'm Mohosin Hasan Akash, a frontend
              web developer from Bangladesh. I specialize in building web
              applications using React and Express. My passion is crafting
              user-friendly and visually appealing digital experiences. Hi, I'm
              Mohosin Hasan Akash, a frontend web developer from Bangladesh. I
              specialize in building web applications using React and Express.
              My passion is crafting user-friendly and visually appealing
              digital experiences.
            </p>
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
       *               Personal info & Social links
       ======================================================== */}
      <PersonalInfo />

      {/* ========================================================
       *                    Education and Skills
       ======================================================== */}
      <div class="w-11/12 pb-10 flex items-start justify-center gap-5">
        {/* Education */}
        <Education />
        {/* Skills */}
        <Skills />
      </div>
    </div>
  );
};

export default About;
