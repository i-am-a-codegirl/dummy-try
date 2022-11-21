import Navabar from "../components/Navbar";
import Footer from "../components/Footer";
import Bestseller from "../components/Bestseller";
import HomeCategory from "../components/homeCategory";
import HomeAnimation from "../components/homeAnimation";
import React from "react";

const Home = () => {
  return (
    <div className="container">
      <Navabar />

      <button type="button" className="btn btn-fab">
        <i className="fa fa-bars"> </i>
      </button>
      <HomeAnimation />
      <Bestseller />

      <HomeCategory />

      <Footer />
    </div>
  );
};

export default Home;
