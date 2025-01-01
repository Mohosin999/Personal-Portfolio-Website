import React from "react";

const Resume = () => {
  return (
    <div class="w-full mt-24 flex flex-col items-center justify-center">
      <div class="w-6/12 mb-8 rounded-xl p-6 min-h-52 bg-cardcolor border border-gray-600/[0.5]">
        <h2 class="text-xl font-semibold mb-4">Education</h2>
        <div>
          <div class="flex items-start mb-4">
            <span class="block w-3 h-3 bg-orange-500 rounded-full mt-1.5"></span>
            <div class="ml-4">
              <h3 class="font-medium">
                Bachelor of Technology in Computer Science
              </h3>
              <p class="text-sm text-gray-400">2015 - 2018</p>
              <p class="text-sm">ABC University</p>
            </div>
          </div>
          <div class="flex items-start">
            <span class="block w-3 h-3 bg-gray-400 rounded-full mt-1.5"></span>
            <div class="ml-4">
              <h3 class="font-medium">Higher Secondary Education (Science)</h3>
              <p class="text-sm text-gray-400">2013 - 2015</p>
              <p class="text-sm">XYZ High School</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 class="text-xl font-semibold mb-4">Skills</h2>
        <div class="flex flex-wrap gap-3">
          <span class="px-3 py-1 bg-gray-800 text-sm rounded-full">React</span>
          <span class="px-3 py-1 bg-gray-800 text-sm rounded-full">
            Next.js
          </span>
          <span class="px-3 py-1 bg-gray-800 text-sm rounded-full">Node</span>
          <span class="px-3 py-1 bg-gray-800 text-sm rounded-full">HTML</span>
          <span class="px-3 py-1 bg-gray-800 text-sm rounded-full">CSS</span>
          <span class="px-3 py-1 bg-gray-800 text-sm rounded-full">
            JavaScript
          </span>
          <span class="px-3 py-1 bg-gray-800 text-sm rounded-full">Java</span>
          <span class="px-3 py-1 bg-gray-800 text-sm rounded-full">PHP</span>
          <span class="px-3 py-1 bg-gray-800 text-sm rounded-full">
            Laravel
          </span>
        </div>
      </div>
    </div>
  );
};

export default Resume;
