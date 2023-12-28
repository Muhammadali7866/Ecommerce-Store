import React from "react";
import {
  RiInstagramFill,
  RiFacebookBoxFill,
  RiTwitterFill,
  RiFacebookFill,
} from "@remixicon/react";

const Footer = () => {
  return (
    <>
      <div className="main-Footer bg-black w-screen flex flex-col gap-10 text-white px-[10%] place-content-center  h-[210px]">
        <div className="flex flex-row justify-between">
          <div className="flex flex-row gap-4 items-baseline">
            <h2 className="text-xl">3legant</h2>
            <p>|</p>
            <p className="text-gray-400 text-xs">Headphone Store</p>
          </div>
          <div className="flex flex-row gap-10 text-base">
            <p>Home</p>
            <p>Shop</p>
            <p>Blog</p>
            <p>Contact Us</p>
          </div>
        </div>
        <div className="flex flex-row justify-between p-3 align-center">
          <div className="flex flex-row gap-3 items-baseline">
            <p className="mr-7 text-xs text-gray-400">
              Copyright © 2023 3legant. All rights reserved
            </p>
            <div className="text:sm flex flex-row text-xs gap-6">
              <p>Privacy Policy</p>
              <p>Terms of Use</p>
            </div>
          </div>
          <div className="flex flex-row gap-2">
            <RiInstagramFill />
            <RiFacebookFill />
            <RiTwitterFill />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
