import Link from "next/link";

const Projects = () => {
  const projectsData = [
    {
      image: "./img/pro01.png",
      name: "AI-Based Resume Builder Application",
      liveUrl: "https://www.twitter.com",
      sourceUrl: "https://github.com/source-01",
      caseStudyUrl: "https://github.com/case-stusy-01",
    },
    {
      image: "./img/pro02.png",
      name: "Clean YouTube Application",
      liveUrl: "https://www.youtube.com",
      sourceUrl: "https://github.com/source-02",
      caseStudyUrl: "https://github.com/case-stusy-02",
    },
    {
      image: "./img/pro03.png",
      name: "Track Zone Application",
      liveUrl: "https://www.facebook.com",
      sourceUrl: "https://github.com/source-03",
      caseStudyUrl: "https://github.com/case-stusy-03",
    },
  ];

  return (
    <div class="w-full h-full mt-24 flex items-center justify-center">
      <div class="w-11/12 h-full flex flex-col items-center justify-center gap-4">
        {/* Heading */}
        <div className="w-full">
          <h3 className="font-bold text-center text-2xl">Works & Projects</h3>
        </div>

        {/* Projects Information */}
        <div className="w-full pb-10 grid grid-cols-2 gap-4">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="w-full bg-cardcolor border border-gray-600/[0.5] p-4 rounded-xl"
            >
              {/* Image */}
              <div className="w-full rounded-xl overflow-hidden">
                <Link href={project.liveUrl} target="_blank">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover hover:scale-105 transition-all duration-200 ease-in-out"
                  />
                </Link>
              </div>

              {/* Project's description */}
              <div className="w-full pt-3 flex flex-col justify-center">
                {/* Name */}
                <h3 className="font-bold text-xl pb-2">{project.name}</h3>

                {/* Links */}
                <div className="flex gap-6">
                  {/* Live link */}
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    className="text-sm text-gray-400 hover:text-primarycolor transition-all ease-out duration-200 select-none"
                  >
                    Live Link
                  </Link>
                  {/* Source Code link */}
                  <Link
                    href={project.sourceUrl}
                    target="_blank"
                    className="text-sm text-gray-400 hover:text-primarycolor transition-all ease-out duration-200 select-none"
                  >
                    Source Code
                  </Link>
                  {/* Case-study link */}
                  <Link
                    href={project.caseStudyUrl}
                    target="_blank"
                    className="text-sm text-gray-400 hover:text-primarycolor transition-all ease-out duration-200 select-none"
                  >
                    Case Study
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
