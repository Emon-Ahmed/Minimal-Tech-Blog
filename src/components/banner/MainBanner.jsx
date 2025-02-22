import React from "react";
import BannerBG from "../../assets/images/banner-bg.png";
import aiIcon from "../../assets/images/ai.svg";
import Tabs from "./Tabs";

export default function MainBanner() {
  return (
    <div className="bg-[#FAFBFC]">
      <div
        style={{ backgroundImage: `url(${BannerBG})` }}
        className="bg-cover bg-no-repeat bg-center"
      >
        <div className="p-20 flex  justify-center ">
          <div className="container font-apercu text-center">
            <div className="pb-12">
              <div className="flex justify-center items-center text-lg">
                <div className="mx-0.5">Blog</div>
                <img src={aiIcon} alt="AI Icon" className="w-4 h-4 mx-0.5" />
              </div>
              <div className="text-6xl  font-bold py-4">News and insights</div>
              <div className="w-1/2 mx-auto text-lg text-[#111111]/60">
                Learn about cryptocurrency, NFTs, and blockchain, discover our
                latest product updates, partnership announcements, user stories,
                and more.
              </div>
            </div>
            <div>
              <Tabs />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
