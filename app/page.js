import React from "react";
import Herosecond from "./components/herosecond/Herosecond";
import Herothird from "./components/herothird/Herothird";
import Informationthird from "./components/informationthird/Informationthird";
import BannerSecond from "./components/bannerSecond/BannerSecond";


const Home = () => {
  return (
    <>
    <BannerSecond />
    <Herosecond />
    <Herothird />
    <Informationthird />
    </>
  );
};

export default Home;
