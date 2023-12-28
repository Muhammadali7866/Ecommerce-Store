import axios from "axios";
import React, { useEffect, useState } from "react";
import bestSCardImage1 from "../../imges/bestS-card-image-1.png";
import bestSCardImage2 from "../../imges/bestS-card-image-2.png";
import bestSCardImage3 from "../../imges/bestS-card-image-3.png";
import bestSCardImage4 from "../../imges/bestS-card-image-4.png";
import bestSCardImage5 from "../../imges/bestS-card-image-5.png";
import bestSCardImage6 from "../../imges/bestS-card-image-6.png";
import bestSCardImage7 from "../../imges/bestS-card-image-7.png";
import bestSCardImage8 from "../../imges/bestS-card-image-8.png";

const BestSeller = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/v1/discount/AllDiscount"
        );
        // console.log("response", response.data.doc.allproducts);
        let imagesLocation = [
          bestSCardImage1,
          bestSCardImage2,
          bestSCardImage3,
          bestSCardImage4,
          bestSCardImage5,
          bestSCardImage6,
          bestSCardImage7,
          bestSCardImage8,
        ];
        var productArray = response.data.doc.allproducts;
        for (let i = 0; i < productArray.length; i++) {
          productArray[i].image = imagesLocation[i];
        }

        console.log(productArray);
        setData(response.data.doc.allproducts);
        // setData(productArray);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchData();
  }, []);
  console.log(data);
  return (
    <>
      <section class="best-seller" id="best-seller">
        <p href="#">Best Seller</p>
        <div class="card-container">
          {data.map((product) => (
            <div class="card" key={product._id}>
              <div class="card-content-first">
                <div class="card-sale">
                  <p>HOT</p>
                </div>
                <div class="card-image">
                  <img src={product.image} alt="" />
                </div>
              </div>
              <div class="card-content-second">
                <div class="card-rating">
                  <i class="ri-star-s-fill"></i>
                  <i class="ri-star-s-fill"></i>
                  <i class="ri-star-s-fill"></i>
                  <i class="ri-star-s-fill"></i>
                  <i class="ri-star-s-fill"></i>
                </div>
                <div class="card-description">
                  {product.product.description}
                </div>
                <div class="card-price">{product.product.price}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default BestSeller;
