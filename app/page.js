'use client'
import React, { useState } from "react";
import Herosecond from "./components/herosecond/Herosecond";
import Herothird from "./components/herothird/Herothird";
import Informationthird from "./components/informationthird/Informationthird";
import BannerSecond from "./components/bannerSecond/BannerSecond";
import Featured from "./components/featured/Featured";

const Home = () => {
  const [language, setLanguage] = useState('de'); // 'de' for German, 'en' for English

  // Function to toggle the language
  const toggleLanguage = () => {
    setLanguage(prevLang => (prevLang === 'de' ? 'en' : 'de'));
    console.log(language);
  };

  return (
    <>
      <Featured language={language} toggleLanguage={toggleLanguage} />
      <BannerSecond language={language} />
      <Herosecond language={language} />
      <Herothird language={language} />
      <Informationthird language={language} />
    </>
  );
};

export default Home;
