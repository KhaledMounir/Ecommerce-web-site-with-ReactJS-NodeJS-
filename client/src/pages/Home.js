import React from "react";
import Anouncement from "../components/Anouncement";
import Categories from "../components/Categories";
import Nav from "../components/Nav";
import Products from "../components/Products";
import Slider from "../components/Slider";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Anouncement />
      <Nav />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
