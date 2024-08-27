"use client";
import React, { useState } from 'react';
import TestFirst from '../components/testFirst/TestFirst';
import TestSecond from '../components/testSecond/TestSecond';
import TestThird from '../components/testThird/TestThird';
import TestFourth from '../components/testFourth/TestFourth';
import TestFifth from '../components/testFifth/TestFifth';
import TestSix from '../components/testSix/TestSix';
import TestSeven from '../components/testSeven/TestSeven';
import TestEight from '../components/testEight/TestEight';
import TestNine from '../components/testNine/TestNine';
import TestTen from '../components/testTen/TestTen';
import TestEleven from '../components/testEleven/TestEleven';
import TestTwelve from '../components/testTwelve/TestTwelve';
import TestThirteen from '../components/testThirteen/TestThirteen';
import TestFourteen from '../components/testFourteen/TestFourteen';
import TestFifteen from '../components/testFifteen/TestFifteen';
import TestSixteen from '../components/testSixteen/TestSixteen';
import TestSeventeen from '../components/testSeventeen/TestSeventeen';
import TestFooter from '../components/testFooter/TestFooter';
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();
  const [currentComponentIndex, setCurrentComponentIndex] = useState(0);
  const [formData, setFormData] = useState({});

  const handleNext = () => {
    if (currentComponentIndex < components.length - 1) {
      setCurrentComponentIndex(currentComponentIndex + 1);
    }
  };

  const handleBack = () => {
    if (currentComponentIndex > 0) {
      setCurrentComponentIndex(currentComponentIndex - 1);
    }
  };

  const handleInputChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log('Form Data Parent', formData);
  };

  const handleSubmit = () => {
    console.log("Form Data:", formData);
    router.push("/success");
  };

  const components = [
    <TestFirst key="TestFirst" data={formData} onChange={handleInputChange} />,
    <TestSecond key="TestSecond" data={formData} onChange={handleInputChange} />,
    <TestThird key="TestThird" data={formData} onChange={handleInputChange} />,
    <TestFourth key="TestFourth" data={formData} onChange={handleInputChange} />,
    <TestFifth key="TestFifth" data={formData} onChange={handleInputChange} />,
    <TestSix key="TestSix" data={formData} onChange={handleInputChange} />,
    <TestSeven key="TestSeven" data={formData} onChange={handleInputChange} />,
    <TestEight key="TestEight" data={formData} onChange={handleInputChange} />,
    <TestNine key="TestNine" data={formData} onChange={handleInputChange} />,
    <TestTen key="TestTen" data={formData} onChange={handleInputChange} />,
    <TestEleven key="TestEleven" data={formData} onChange={handleInputChange} />,
    <TestTwelve key="TestTwelve" data={formData} onChange={handleInputChange} />,
    <TestThirteen key="TestThirteen" data={formData} onChange={handleInputChange} />,
    <TestFourteen key="TestFourteen" data={formData} onChange={handleInputChange} />,
    <TestFifteen key="TestFifteen" data={formData} onChange={handleInputChange} />,
    <TestSixteen key="TestSixteen" data={formData} onChange={handleInputChange} />,
  ];

  const progressBarWidth = ((currentComponentIndex + 1) / components.length) * 100;

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        {components[currentComponentIndex]}
        <div className="flex justify-around px-4 md:px-20 items-center mt-8 mx-4 md:mx-8">
          {currentComponentIndex > 0 ? (
            <button
              onClick={handleBack}
              className="bg-[#c04f15] text-white font-semibold py-2 px-6 rounded-lg hover:bg-orange-700 focus:outline-none"
            >
              Zurück
            </button>
          ) : (
            <div className="w-24"></div>
          )}
          
          {currentComponentIndex < components.length - 1 ? (
            <button
              onClick={handleNext}
              className="bg-[#c04f15] text-white font-semibold py-2 px-6 rounded-lg hover:bg-orange-700 focus:outline-none"
            >
              Weiter
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="bg-[#c04f15]  text-white font-semibold py-2 px-6 rounded-lg hover:bg-orange-700 focus:outline-none"
            >
              Abschicken
            </button>
          )}
        </div>
        
        <div className="w-1/2 bg-gray-200 rounded-full h-1.5 mt-16 mx-auto">
          <div
            className="bg-[#c04f15] h-1.5 rounded-full"
            style={{ width: `${progressBarWidth}%` }}
          ></div>
        </div>
        
        <div className="mt-4 mb-8">
          <p className="text-center text-[#c04f15]">
            Frage {currentComponentIndex + 1} von {components.length}
          </p>
        </div>
      </div>

      <TestFooter />
    </div>
  );
};

export default Page;
