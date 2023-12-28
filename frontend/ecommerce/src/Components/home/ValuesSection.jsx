import React from "react";

const ValuesSection = () => {
  return (
    <>
      <section class="values" id="values">
        <div class="main-values">
          <div class="values-card">
            <i class="ri-truck-line"></i>
            <div class="values-content">
              <p>Free Shiping</p>
              <span>order above 1200$</span>
            </div>
          </div>
          <div class="values-card">
            <i class="ri-bank-card-line"></i>
            <div class="values-content">
              <p>Money-Back</p>
              <span>30 days guarantee</span>
            </div>
          </div>
          <div class="values-card">
            <i class="ri-secure-payment-line"></i>
            <div class="values-content">
              <p>Secure Payments</p>
              <span>Secured by Stripe</span>
            </div>
          </div>
          <div class="values-card">
            <i class="ri-phone-line"></i>
            <div class="values-content">
              <p>24/7 Support</p>
              <span>Phone and Email support</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ValuesSection;
