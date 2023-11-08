import React from "react";

const Wrapper = ({ children, className = "" }) => {
  return (
    <div
      className={`w-full px-32 py-8 xl:p-24 lg:p-16 md:p-12 sm:p-8 ${className}`}
    >
      {children}
    </div>
  );
};

export default Wrapper;
