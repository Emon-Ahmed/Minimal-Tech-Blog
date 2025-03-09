import React from "react";

export default function Tab({ text, active, setActive }) {
  return (
    <div
      className={`inline-block mx-1 px-4 py-2 ${
        active ? "bg-[#444BFF] text-white" : "bg-white text-black"
      } rounded cursor-pointer`}
      onClick={() => setActive(!active)}
    >
      {text}
    </div>
  );
}
