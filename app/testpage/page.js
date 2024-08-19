"use client"
import React, { useState } from 'react';
import TestFirst from '../components/testFirst/TestFirst';
import TestSecond from '../components/testSecond/TestSecond';
import TestThird from '../components/testThird/TestThird';
import TestFourth from '../components/testFourth/TestFourth';
import TestFifth from '../components/testFifth/TestFifth';
import TestSix from '../components/testSix/TestSix';



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
  console.log(formData);

  const components = [
    <TestFirst key="TestFirst" data={formData} onChange={handleInputChange} />,
    <TestSecond key="TestSecond" data={formData} onChange={handleInputChange} />,
    <TestThird key="TestThird" data={formData} onChange={handleInputChange} />,
    <TestFourth key="TestFourth" data={formData} onChange={handleInputChange} />,
    <TestFifth key="TestFifth" data={formData} onChange={handleInputChange} />,
    <TestSix key="TestFifth" data={formData} onChange={handleInputChange} />
  ];

  return (
    <div>
      {components[currentComponentIndex]}
      <div className="flex justify-around md:justify-around mt-8">
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
            className="bg-[#c04f15]  text-white font-semibold py-2 px-4 rounded-lg hover:bg-orange-700 focus:outline-none"
          >
            Weiter
          </button>
        )}
      </div>
      <div className='md:mt-32 mt-24'>
      <p className="text-center text-[#c04f15] mt-0 md:-mt-8">Frage 5 von 17</p>
      </div>
    </div>
  );
};

export default Page;
