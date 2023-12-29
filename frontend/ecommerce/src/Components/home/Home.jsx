import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import NewsLetter from "./NewsLetter";
import NewArrival from "./NewArrival";
import NewsFeed from "./NewsFeed";
import Promotion from "./Promotion";
import ShopCollection from "./ShopCollection";
import ValuesSection from "./ValuesSection";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <NewArrival />
      <ShopCollection />
      <Promotion />
      <NewsFeed />
      <ValuesSection />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Home;
