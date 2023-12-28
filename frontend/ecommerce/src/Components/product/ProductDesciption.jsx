import React from "react";
import { RiStarFill } from "@remixicon/react";
const ProductDesciption = () => {
  return (
    <>
      <div class="product-detail p-7  h-screen">
        <div class="flex justify-between  bg-main-color">
          <img
            class="object-cover w-[430px] h-[440px] rounded-lg ml-6"
            src={require("../../imges/bestS-card-image-1.png")}
            alt=""
          />
          <div class="p-description mr-9 w-[650px] flex flex-col gap-3 mt-9">
            <div class="p-title text-black font-semibold text-3xl">
              Airbud 550 Slide Earbuds
            </div>
            <div className="text-md text-gray-600">
              Buy one or buy a few and make every space where you sit more
              convenient. Light and easy to move around with removable tray top,
              handy for serving snacks.
            </div>
            <div class="p-price p-title text-black font-semibold text-xl ">
              $100.0
            </div>
            <div class="p-rating flex flex-row gap-1">
              Reviews:
              <span class="flex flex-row">
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
              </span>
            </div>

            <div class="p-carts flex justify-start">
              <div class="px-10 py-2 text-white rounded-md bg-black mr-2 hover:bg-main-color">
                ADD TO CART
              </div>
            </div>

            <p class="text-black  text-[12px]">SKU:1872</p>
            <p class=" text-[12px]">
              Category:<span>123</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDesciption;
