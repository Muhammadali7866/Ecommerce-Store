import React, { useEffect, useState } from "react";
import axios from "axios";

const Promotion = () => {
  return (
    <>
      <section class="product-promotion" id="product-promotion">
        <div class="promotion-first">
          <img src="prmotion-image.jpg" alt="" />
        </div>
        <div class="promotion-second">
          <div class="promotion-content">
            <span>PROMOTION</span>
            <h4>Hurry up! 40% OFF</h4>
            <p>Thousands of high tech are waiting for you</p>
          </div>
          <button type="button">
            <a href="/">Shop now </a>
          </button>
        </div>
      </section>
    </>
  );
};

export default Promotion;
