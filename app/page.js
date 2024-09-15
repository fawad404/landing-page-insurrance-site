"use client";
import React, { useState, useEffect } from "react";
import Herosecond from "./components/herosecond/Herosecond";
import Herothird from "./components/herothird/Herothird";
import Informationthird from "./components/informationthird/Informationthird";
import BannerSecond from "./components/bannerSecond/BannerSecond";
import Featured from "./components/featured/Featured";

const Home = () => {
  // State to hold the language, initialized to 'de' by default
  const [language, setLanguage] = useState('de');

  useEffect(() => {
    // This code only runs on the client side after the component mounts
    const storedLanguage = localStorage.getItem('language');
    if (storedLanguage) {
      setLanguage(storedLanguage);
    }
  }, []);

  useEffect(() => {
    // Update localStorage whenever the language changes
    localStorage.setItem('language', language);
  }, [language]);

  // Function to toggle the language
  const toggleLanguage = () => {
    setLanguage(prevLang => (prevLang === 'de' ? 'en' : 'de'));
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
