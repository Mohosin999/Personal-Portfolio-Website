import React from "react";

const Skill = ({ name, logo }) => {
  return (
    <span class="px-3 py-1 bg-secondarycolor text-base rounded-lg flex items-center justify-center gap-1 border border-primarycolor shadow-sm">
      {logo} {name}
    </span>
  );
};

export default Skill;
