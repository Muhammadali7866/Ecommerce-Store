import React from "react";

const Hero = () => {
  return (
    <>
      <section class="hero" id="hero">
        <div class="main-hero">
          <div class="main-image">
            <img src={require("../../imges/hero-imgg.png")} alt="" />
          </div>
          <div class="main-text">
            <h1>Listen to</h1>
            <h1>the amazing</h1>
            <h1>music sound</h1>
            <p>Experice music like never before</p>
            <button type="button" class="btn">
              Shopping Now
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
