import React from "react";

const NewsLetter = () => {
  const emailStyle = {
    marginRight: "0.6rem",
  };
  return (
    <>
      <section class="newsLetter" id="newsLetter">
        <div class="newsletter-content">
          <div class="newsLetter-content">
            <img src="newsLetter-1.png" alt="" />
          </div>
          <div class="newsLetter-content2">
            <div class="newsLetter-description">
              <h2>Join Our Newsletter</h2>
              <p>Sign up for deals, new products and promotions</p>
            </div>
            <div class="newsLetter-mail">
              <p>
                <i style={emailStyle} class="ri-mail-line"></i>Email Address
              </p>
              <p>Signup</p>
            </div>
          </div>
          <div class="newsLetter-content">
            <img src="newsLetter-2.png" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsLetter;
