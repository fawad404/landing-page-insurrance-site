"use client";
import React, { useState } from 'react';
import TestFirst from '../components/testFirst/TestFirst';
import TestSecond from '../components/testSecond/TestSecond';
import TestThird from '../components/testThird/TestThird';
import TestFourth from '../components/testFourth/TestFourth';
import TestFifth from '../components/testFifth/TestFifth';
import TestSix from '../components/testSix/TestSix';
import TestFooter from '../components/testFooter/TestFooter';
import TestSeven from '../components/testSeven/TestSeven';
import TestEight from '../components/testEight/TestEight';
import TestNine from '../components/testNine/TestNine';
import TestTen from '../components/testTen/TestTen';
import TestTwelve from '../components/testTwelve/TestTwelve';
import TestThirteen from '../components/testThirteen/TestThirteen';
import TestFourteen from '../components/testFourteen/TestFourteen';
import TestFifteen from '../components/testFifteen/TestFifteen';

const Page = () => {
  const [currentComponentIndex, setCurrentComponentIndex] = useState(0);
  const [formData, setFormData] = useState({
    berufStatus: '',
    // Add more fields as needed
  });


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
    console.log(formData);
  };

  
  const components = [
    <TestFirst key="TestFirst" data={formData} onChange={handleInputChange} />,
    <TestSecond key="TestSecond" data={formData} onChange={handleInputChange} />,
    <TestThird key="TestThird" data={formData} onChange={handleInputChange} />,
    <TestFourth key="TestFourth" data={formData} onChange={handleInputChange} />,
    <TestFifth key="TestFifth" data={formData} onChange={handleInputChange} />,
    <TestSix key="TestSix" data={formData} onChange={handleInputChange} />,
    <TestSeven key="TestSix" data={formData} onChange={handleInputChange} />,
    <TestEight key="TestSix" data={formData} onChange={handleInputChange} />,
    <TestNine key="TestSix" data={formData} onChange={handleInputChange} />,
    <TestTen key="TestSix" data={formData} onChange={handleInputChange} />,
    <TestTwelve key="TestSix" data={formData} onChange={handleInputChange} />,
    <TestThirteen key="TestSix" data={formData} onChange={handleInputChange} />,
    <TestFourteen key="TestSix" data={formData} onChange={handleInputChange} />,
    <TestFifteen key="TestSix" data={formData} onChange={handleInputChange} />,
  ];
  // Calculate progress bar width
  const progressBarWidth = ((currentComponentIndex + 1) / components.length) * 100;



  return (
    <>
      <div className="flex flex-col min-h-screen">
        {/* Main Content */}
        <div className="flex-grow">
          {components[currentComponentIndex]}
          <div className="flex justify-around md:justify-around mt-4">
            {currentComponentIndex > 0 && (
              <button
                onClick={handleBack}
                className="bg-[#c04f15] md:ml-8 text-white font-semibold py-2 px-4 rounded-lg hover:bg-orange-700 focus:outline-none"
              >
                Zurück
              </button>
            )}
            {currentComponentIndex < components.length - 1 && (
              <button
                onClick={handleNext}
                className="bg-[#c04f15] text-white font-semibold py-2 px-4 rounded-lg hover:bg-orange-700 focus:outline-none"
              >
                Weiter
              </button>
            )}
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700 mt-16 mx-auto" style={{width: '50%'}}>
            <div
              className="bg-[#c04f15] h-1.5 rounded-full dark:bg-[#c04f15]"
              style={{ width: `${progressBarWidth}%` }}
            ></div>
          </div>
          <div className="md:mt-12 mb-5 mt-12">
            <p className="text-center text-[#c04f15] mt-0 md:-mt-8">Frage {currentComponentIndex + 1} von 17</p>
          </div>
        </div>

        {/* Footer */}
        <TestFooter />
      </div>
    </>
  );
};

export default Page;
