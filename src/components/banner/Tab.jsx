import React from "react";

export default function Tab({ text }) {
  return (
    <div className="inline-block mx-1 px-4 py-2 hover:bg-[#444BFF] hover:text-white rounded cursor-pointer">
      {text}
    </div>
  );
}
