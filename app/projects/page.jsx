// import React from "react";

// const Projects = () => {
//   const projectsData = [
//     {
//       image: "./img/pro01.png",
//       name: "AI-Based Resume Builder Application",
//       category: "Web App",
//     },
//     {
//       image: "./img/pro02.png",
//       name: "Clean YouTube Application",
//       category: "Web App",
//     },
//     {
//       image: "./img/pro03.png",
//       name: "Track Zone Application",
//       category: "Website",
//     },
//   ];

//   return (
//     <div class="w-full h-full mt-24 flex items-center justify-center">
//       <div class="w-11/12 h-full flex flex-col items-center justify-center gap-4">
//         {/* Heading */}
//         <div className="w-full">
//           <h3 className="font-bold text-center text-2xl">Works & Projects</h3>
//         </div>

//         {/* Projects Information */}
//         <div className="w-full pb-10 grid grid-cols-2 gap-3">
//           {projectsData.map((project, index) => (
//             <div
//               key={index}
//               className="w-full bg-cardcolor border border-gray-600/[0.5] p-3 rounded-xl"
//             >
//               {/* Image */}
//               <div className="w-full rounded-xl overflow-hidden">
//                 <img
//                   src={project.image}
//                   alt={project.name}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div className="w-full py-3 flex items-center justify-between">
//                 <div className="flex-1">
//                   <h3 className="font-bold text-xl">{project.name}</h3>
//                   <p className="text-sm text-gray-400">{project.category}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Projects;

import Link from "next/link";
import React from "react";

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
                    className="w-full h-full object-cover"
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
                    className="text-sm text-gray-400 hover:text-primarycolor transition-all ease-out duration-200"
                  >
                    Live Link
                  </Link>
                  {/* Source Code link */}
                  <Link
                    href={project.sourceUrl}
                    target="_blank"
                    className="text-sm text-gray-400 hover:text-primarycolor transition-all ease-out duration-200"
                  >
                    Source Code
                  </Link>
                  {/* Case-study link */}
                  <Link
                    href={project.caseStudyUrl}
                    target="_blank"
                    className="text-sm text-gray-400 hover:text-primarycolor transition-all ease-out duration-200"
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
