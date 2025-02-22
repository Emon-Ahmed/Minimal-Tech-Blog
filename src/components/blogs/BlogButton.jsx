import React from "react";
import { RiArrowRightSLine } from "@remixicon/react";

export default function BlogButton() {
  return (
    <div className="mt-6 flex items-center cursor-pointer">
      <div className="px-4 py-2 border-black hover:bg-black hover:text-white border-2 inline-block rounded text-lg">
        <div className="flex justify-center items-center">
          <span> Read more</span>
          <RiArrowRightSLine size={18} className="ms-1" />
        </div>
      </div>
    </div>
  );
}
