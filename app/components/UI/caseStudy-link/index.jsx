// import React from "react";
// import Link from "next/link";

// const CaseStudyLink = ({ link, text, className }) => {
//   return (
//     <Link
//       href={link}
//       className={`rounded-lg bg-gray-900 hover:scale-105 active:scale-100 duration-300 text-gray-200 p-2 px-6 font-semibold text-lg select-none sm:px-4 sm:text-base dark:bg-gray-200 dark:text-gray-900 ${className}`}
//     >
//       {text}
//     </Link>
//   );
// };

// export default CaseStudyLink;

import React from "react";
import Link from "next/link";

const CaseStudyLink = ({ link, text, className }) => {
  return (
    <Link
      href={link}
      className={`rounded-lg bg-gray-900 hover:scale-105 active:scale-100 duration-300 text-gray-200 p-2 md:p-1 px-6 md:px-4 font-semibold text-lg md:text-sm select-non dark:bg-gray-200 dark:text-gray-900 ${className}`}
    >
      {text}
    </Link>
  );
};

export default CaseStudyLink;
