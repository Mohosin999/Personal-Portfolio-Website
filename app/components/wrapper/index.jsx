import React from "react";

const Wrapper = ({ children, className = "" }) => {
  return <div class={`w-full px-32 py-8 ${className}`}>{children}</div>;
};

export default Wrapper;
