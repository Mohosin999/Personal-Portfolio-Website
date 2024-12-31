import React from "react";

const Service = ({ src, title, params }) => {
  return (
    <div className="w-1/2">
      <div className="rounded-xl p-6 min-h-52 bg-cardcolor border border-gray-600/[0.5]">
        <div className="flex items-center gap-3">
          {/* Service's logo */}
          <div className="w-14 h-14">
            <img src={src} alt="service_one" className="w-full h-full" />
          </div>
          {/* Service's name */}
          <div>
            <h2 className="text-2xl font-bold">{title}</h2>
          </div>
        </div>
        {/* Description */}
        <div className="w-full py-3">
          <p className="text-sm text-gray-400">{params}</p>
        </div>
      </div>
    </div>
  );
};

export default Service;
