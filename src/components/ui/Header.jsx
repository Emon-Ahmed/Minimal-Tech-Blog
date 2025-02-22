import React from "react";
import Logo from "../../assets/images/logo.png";

export default function Header() {
  return (
    <div className="container mx-auto my-auto">
      <div className="flex justify-between items-center py-6">
        <div className="cursor-pointer">
          <img className="w-36 h-9" src={Logo} alt="techBlog Logo" />
        </div>
        <div className="font-apercu text-sm flex cursor-pointer">
          <div className="px-7 hover:underline">Home</div>
          <div className="px-7 hover:underline">Blogs</div>
          <div className="px-7 hover:underline">Category</div>
          <div className="px-7 hover:underline">Author</div>
          <div className="px-7 hover:underline">Contact</div>
        </div>
        <div className="font-apercu text-sm flex items-center cursor-pointer">
          <div className="px-7 hover:underline">Log in</div>
          <div className="text-white rounded bg-[#444BFF] py-2 px-6">
            Sign Up
          </div>
        </div>
      </div>
    </div>
  );
}
