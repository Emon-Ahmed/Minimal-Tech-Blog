import React from "react";
import Logo from "../../assets/images/logo.png";

export default function Header() {
  return (
    <div className="container mx-auto my-auto">
      <div className="flex justify-around items-center py-6 ">
        <div className="cursor-pointer">
          <img className="w-36 h-9" src={Logo} alt="techBlog Logo" />
        </div>
        <div className="font-apercu text-sm flex cursor-pointer">
          <div className="px-7">Home</div>
          <div className="px-7">Blogs</div>
          <div className="px-7">Category</div>
          <div className="px-7">Author</div>
          <div className="px-7">Contact</div>
        </div>
        <div className="font-apercu text-sm flex items-center cursor-pointer">
          <div className="px-7">Log in</div>
          <div className="text-white rounded bg-[#444BFF] py-2 px-6">
            Sign Up
          </div>
        </div>
      </div>
    </div>
  );
}
