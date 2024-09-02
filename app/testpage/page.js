"use client";
import React, { useState, useEffect } from 'react';
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
import TestFooter from '../components/testFooter/TestFooter';
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();
  const [currentComponentIndex, setCurrentComponentIndex] = useState(0);
  const [formData, setFormData] = useState({});

  // Retrieve saved state from localStorage on component mount
  useEffect(() => {
    const savedIndex = parseInt(localStorage.getItem('currentComponentIndex'), 10) || 0;
    const savedFormData = JSON.parse(localStorage.getItem('formData')) || {};

    setCurrentComponentIndex(savedIndex);
    setFormData(savedFormData);
  }, []);

  const handleNext = () => {
    if (currentComponentIndex < components.length - 1) {
      const newIndex = currentComponentIndex + 1;

      // Save state to localStorage
      localStorage.setItem('currentComponentIndex', newIndex);
      localStorage.setItem('formData', JSON.stringify(formData));

      setCurrentComponentIndex(newIndex);
    }
  };

  const handleBack = () => {
    if (currentComponentIndex > 0) {
      const newIndex = currentComponentIndex - 1;

      // Save state to localStorage
      localStorage.setItem('currentComponentIndex', newIndex);
      localStorage.setItem('formData', JSON.stringify(formData));

      setCurrentComponentIndex(newIndex);
    }
  };

  const handleInputChange = (name, value) => {
    setFormData((prevData) => {
      const updatedData = { ...prevData, [name]: value };
      
      // Save formData to localStorage
      localStorage.setItem('formData', JSON.stringify(updatedData));
      return updatedData;
    });
  };

  const handleSubmit =  () => {
    // Retrieve all data from localStorage
    const dataToSubmit = {
      username: localStorage.getItem('username') || '',
      email: localStorage.getItem('email') || '',
      phone: localStorage.getItem('phone') || '',
      isChecked: localStorage.getItem('isChecked') === 'true',
      storedpage2: localStorage.getItem('page2') || '',
      storedpage3Range: localStorage.getItem('page3Range') || '',
      storedpage4: localStorage.getItem('page4') || '',
      storedpage4Range: localStorage.getItem('page4Range') || '',
      storedpage5: localStorage.getItem('page5') || '',
      storedpage5Range: localStorage.getItem('page5Range') || '',
      storedpage6: localStorage.getItem('page6') || '',
      storedpage6Range: localStorage.getItem('page6Range') || '',
      storedpage6Text: localStorage.getItem('page6Text') || '',
      storedpage8: localStorage.getItem('page8') || '',
      storedpage8Two: localStorage.getItem('page8Two') || '',
      storedpage9: localStorage.getItem('page9') || '',
      storedpage9Range: localStorage.getItem('page9Range') || '',
      storedpage9Three: localStorage.getItem('page9Three') || '',
      storedpage9Two: localStorage.getItem('page9Two') || '',
      storedselectedBerufStatus: localStorage.getItem('selectedBerufStatus') || '',
      storedpage10: localStorage.getItem('page10') || '',
      storedpage10Two: localStorage.getItem('page10Two') || '',
      storedpage12Range: localStorage.getItem('page12Range') || '',
      storedpage13: localStorage.getItem('page13') || '',
      storedpage13Range: localStorage.getItem('page13Range') || '',
      storedpage14Range: localStorage.getItem('page14Range') || '',
      storedpage14RangeTwo: localStorage.getItem('page14RangeTwo') || '',
      storedpage15Range: localStorage.getItem('page15Range') || '',
    };

    console.log("Form Data for API:", dataToSubmit);

    // try {
    //   // Make an API call
    //   const response = await fetch('/api/submit', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(dataToSubmit),
    //   });

    //   if (!response.ok) {
    //     throw new Error('Network response was not ok');
    //   }

    //   const result = await response.json();
    //   console.log('Submit result:', result);

    //   // Optionally navigate or show a success message
    //   router.push("/success");

    // } catch (error) {
    //   console.error('Submit error:', error);
    // }
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
              disabled={!formData.isChecked}  // Button will be disabled if isChecked is false
              className={`${
                formData.isChecked && formData.username && formData.email && formData.phone ? "bg-[#c04f15]" : "bg-red-800"
              } text-white font-semibold py-2 px-6 rounded-lg ${
                formData.isChecked && formData.username && formData.email && formData.phone ? "hover:bg-orange-700" : ""
              } focus:outline-none`}
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
          <p className="text-center text-[#c25115]">
            Frage {currentComponentIndex + 1} von {components.length}
          </p>
        </div>
      </div>

      <TestFooter />
    </div>
  );
};

export default Page;
