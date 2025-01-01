import { FaJs, FaReact, FaSass, FaBootstrap } from "react-icons/fa";
import {
  SiNextdotjs,
  SiRedux,
  SiStyledcomponents,
  SiMui,
  SiJest,
  SiTestinglibrary,
  SiExpress,
  SiStrapi,
  SiTypescript,
} from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

import Skill from "../ui/Skill";

const Skills = () => {
  return (
    <div className="w-7/12 rounded-xl p-6 min-h-52 bg-cardcolor border border-gray-600/[0.5]">
      <h2 className="text-xl font-semibold mb-6">Skills</h2>

      {/* Proficient */}
      <div className="mb-8">
        <h3 className="text-base text-gray-300 font-medium mb-2">Proficient</h3>
        <div className="flex flex-wrap gap-3">
          <Skill
            name={"JavaScript"}
            logo={<FaJs className="text-yellow-500" />}
          />
          <Skill
            name={"React.js"}
            logo={<FaReact className="text-blue-500" />}
          />
          <Skill
            name={"Redux Toolkit"}
            logo={<SiRedux className="text-violet-500" />}
          />
          <Skill
            name={"Express.js"}
            logo={<SiExpress className="text-gray-400" />}
          />
          <Skill
            name={"Tailwind CSS"}
            logo={<RiTailwindCssFill className="text-teal-400" />}
          />
        </div>
      </div>

      {/* Working Knowledge */}
      <div className="mb-8">
        <h3 className="text-base text-gray-300 font-medium mb-2">
          Working Knowledge
        </h3>
        <div className="flex flex-wrap gap-3">
          <Skill
            name={"Next.js"}
            logo={<SiNextdotjs className="text-white" />}
          />
          <Skill
            name={"Material UI"}
            logo={<SiMui className="text-blue-400" />}
          />
          <Skill
            name={"Strapi"}
            logo={<SiStrapi className="text-purple-600" />}
          />
          <Skill
            name={"Styled Components"}
            logo={<SiStyledcomponents className="text-pink-400" />}
          />
        </div>
      </div>

      {/* Familiar With */}
      <div>
        <h3 className="text-base text-gray-300 font-medium mb-2">
          Familiar With
        </h3>
        <div className="flex flex-wrap gap-3">
          <Skill
            name={"TypeScript"}
            logo={<SiTypescript className="text-blue-500" />}
          />
          <Skill name={"Sass"} logo={<FaSass className="text-pink-400" />} />
          <Skill
            name={"Bootstrap"}
            logo={<FaBootstrap className="text-purple-500" />}
          />
          <Skill name={"Jest"} logo={<SiJest className="text-red-500" />} />
          <Skill
            name={"Testing Library"}
            logo={<SiTestinglibrary className="text-orange-500" />}
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
