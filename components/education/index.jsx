import React from "react";

const Education = () => {
  return (
    <div class="w-5/12 rounded-xl p-6 min-h-52 bg-cardcolor border border-gray-600/[0.5]">
      <h2 class="text-xl font-semibold mb-6">Education</h2>
      <div>
        {/* Honors */}
        <div class="flex items-start mb-8">
          <span class="block w-3 h-3 bg-primarycolor rounded-full mt-1.5"></span>
          <div class="ml-4">
            <h3 class="font-medium">Honors, Department of Chemistry</h3>
            <p class="text-sm text-gray-400">2019 - 2023</p>
            <p class="text-sm text-gray-300">
              National University of Bangladesh
            </p>
          </div>
        </div>
        {/* College */}
        <div class="flex items-start mb-8">
          <span class="block w-3 h-3 bg-primarycolor rounded-full mt-1.5"></span>
          <div class="ml-4">
            <h3 class="font-medium">
              Higher Secondary Certificate (HSC) - Science
            </h3>
            <p class="text-sm text-gray-400">2016 - 2018</p>
            <p class="text-sm text-gray-300">
              Agricultural University College (KB College), Mymensingh
            </p>
          </div>
        </div>
        {/* School */}
        <div class="flex items-start">
          <span class="block w-3 h-3 bg-primarycolor rounded-full mt-1.5"></span>
          <div class="ml-4">
            <h3 class="font-medium">Secondary School Certificate (SSC)</h3>
            <p class="text-sm text-gray-400">2011 - 2016</p>
            <p class="text-sm text-gray-300">
              Narayan Khola High School, Nakla, Sherpur
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
