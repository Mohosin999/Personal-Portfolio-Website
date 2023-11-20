import React from "react";
import Link from "next/link";
// import PropTypes from 'prop-types';

const CaseStudyLink = ({ link, text, className }) => {
  return (
    <Link
      href={link}
      className={`rounded-lg bg-gray-900 hover:scale-105 active:scale-100 duration-300 text-gray-200 p-2 px-6 font-semibold text-lg select-none sm:px-4 sm:text-base ${className}`}
    >
      {text}
    </Link>
  );
};

// ResponsiveLink.propTypes = {
//   link: PropTypes.string.isRequired,
//   text: PropTypes.string.isRequired,
//   className: PropTypes.string,
// };

export default CaseStudyLink;
