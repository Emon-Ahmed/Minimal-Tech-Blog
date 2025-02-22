import React from "react";
import { RiArrowRightSLine, RiArrowLeftSLine } from "@remixicon/react";

export default function Pagination() {
  return (
    <div className="pb-20 flex justify-center items-center font-apercu">
      <div className="bg-white inline-block px-4 py-2 mx-2 border-2 border-[#111111]/10 rounded text-sm hover:bg-[#444BFF] hover:text-white hover:border-[#444BFF] cursor-pointer">
        <RiArrowLeftSLine size={20} />
      </div>
      <div className="bg-[#444BFF] text-white inline-block px-4 py-2 mx-2 border-2 border-[#444BFF] rounded  text-sm  cursor-pointer">
        1
      </div>
      <div className="bg-white inline-block px-4 py-2 mx-2 border-2 border-[#111111]/10 rounded text-sm hover:bg-[#444BFF] hover:text-white hover:border-[#444BFF] cursor-pointer">
        2
      </div>
      <div className="bg-white inline-block px-4 py-2 mx-2 border-2 border-[#111111]/10 rounded text-sm hover:bg-[#444BFF] hover:text-white hover:border-[#444BFF] cursor-pointer">
        3
      </div>
      <div className="bg-white inline-block px-4 py-2 mx-2 border-2 border-[#111111]/10 rounded text-sm hover:bg-[#444BFF] hover:text-white hover:border-[#444BFF] cursor-pointer">
        4
      </div>
      <div className="bg-white inline-block px-4 py-2 mx-2 border-2 border-[#111111]/10 rounded text-sm hover:bg-[#444BFF] hover:text-white hover:border-[#444BFF] cursor-pointer">
        5
      </div>
      <div className="bg-white inline-block px-4 py-2 mx-2 border-2 border-[#111111]/10 rounded text-sm hover:bg-[#444BFF] hover:text-white hover:border-[#444BFF] cursor-pointer">
        <RiArrowRightSLine size={20} />
      </div>
    </div>
  );
}
