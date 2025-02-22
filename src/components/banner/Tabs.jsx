import React from "react";
import Tab from "./Tab";

export default function Tabs() {
  return (
    <div className="p-2 border-2 border-[#111111]/8 inline-block items-center justify-center rounded ">
      <div className="px-4 py-2 bg-[#444BFF] text-white rounded inline-block cursor-pointer">
        View all
      </div>
      <Tab text="Crypto" />
      <Tab text="Blockchain" />
      <Tab text="Announcements" />
      <Tab text="People" />
      <Tab text="Engineering" />
      <Tab text="NFT" />
    </div>
  );
}
