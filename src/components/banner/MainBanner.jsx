import React from "react";
import BannerBG from "../../assets/images/banner-bg.png";

export default function MainBanner() {
  return (
    <div className="bg-[#FAFBFC]">
      <div
        style={{ backgroundImage: `url(${BannerBG})` }}
        className=" bg-cover bg-no-repeat "
      >
        <div className="p-20">
          <div className="container text-center font-apercu">
            <div className="">Blog</div>
            <div className="text-6xl  font-bold">News and insights</div>
            <div className="">
              Learn about cryptocurrency, NFTs, and blockchain, discover our
              latest product updates, partnership announcements, user stories,
              and more.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
