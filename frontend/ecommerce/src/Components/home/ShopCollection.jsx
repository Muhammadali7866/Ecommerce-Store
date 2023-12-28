import React from "react";

const ShopCollection = () => {
  return (
    <>
      <section class="shop-collection" id="shop-collection">
        <div class="collection-title">Shop Collection</div>
        <div class="collection">
          <div class="left-main">
            <div class="img-container">
              <img src={require("../../imges/collection-1.png")} alt="" />
            </div>
            <div class="content1">
              <h2>HeadBand</h2>
              <a href="/">
                Collection<i class="ri-arrow-right-line"></i>
              </a>
            </div>
          </div>
          <div class="right-first">
            <div class="content">
              <h2>EarBuds</h2>
              <a href="/">
                Collection<i class="ri-arrow-right-line"></i>
              </a>
            </div>
            <div class="right-img-container1">
              <img src={require("../../imges/collection-2.png")} alt="" />
            </div>
          </div>
          <div class="right-second">
            <div class="content">
              <h2>Accessories</h2>
              <a href="/">
                Collection<i class="ri-arrow-right-line"></i>
              </a>
            </div>
            <div class="right-img-container2">
              <img src={require("../../imges/collection-3.png")} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopCollection;
