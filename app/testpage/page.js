"use client";
// Import necessary modules
import React, { Suspense, useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
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
import ComHeader from '../components/comHeader/ComHeader';
import TestEighteen from '../components/testEighteen/TestEighteen';

const PageContent = () => {
  const router = useRouter();
  const [currentComponentIndex, setCurrentComponentIndex] = useState(0);
  const [formData, setFormData] = useState({});

  const searchParams = useSearchParams();
  const search = searchParams.get('language');

  useEffect(() => {
    console.log('Query changed:', search);
  }, [search]); // This useEffect will run whenever the query changes

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

  const handleSubmit = async () => {
    // Retrieve all data from localStorage
    const storedselectedBerufStatus = localStorage.getItem('selectedBerufStatus') || ''; //page 1
    const storedpage2 = localStorage.getItem('page2') || '';
    const storedpage2Text = localStorage.getItem('page2Text') || '';

    //page 3 
    const storedpage3Range = localStorage.getItem('page3Range') || ''; 

    //page 4
    const storedpage4 = localStorage.getItem('page4') || '';
    const storedpage4Range = localStorage.getItem('page4Range') || '';

    //page 5
    const storedpage5 = localStorage.getItem('page5') || '';
    const storedpage5Range = localStorage.getItem('page5Range') || '';

    //page 6
    const storedpage6 = localStorage.getItem('page6') || '';
    const storedpage6Range = localStorage.getItem('page6Range') || '';
    const storedpage6Range2 = localStorage.getItem('page6Range2') || '';
    const storedpage6Range3 = localStorage.getItem('page6Range3') || '';
    const storedpage6Text = localStorage.getItem('page6Text') || '';

    //page 7
    const storedpage7 = localStorage.getItem('page7') || '';
    const storedpageRange = localStorage.getItem('page7Range') || '';

    //page 8
    const storedpage8 = localStorage.getItem('page8') || '';
    const storedpage8Two = localStorage.getItem('page8Two') || '';
    const storedpage9 = localStorage.getItem('page9') || '';

     //page 9
     const storedpage9Two = localStorage.getItem('page9Two') || '';
     const storedpage9Three = localStorage.getItem('page9Three') || '';
     const storedpage9Range = localStorage.getItem('page9Range') || '';
 
     //page 10
     const storedPage10 = localStorage.getItem('page10') || '';
     const storedpage10Two = localStorage.getItem('page10Two') || '';
 
     //page 11
     const storedPage11 = localStorage.getItem('page11') || '';
     const storedpage11Two = localStorage.getItem('page11Two') || '';
     const storedPage11Three = localStorage.getItem('page11Three') || '';
     const storedpage11Range = localStorage.getItem('page11Range') || '';
     const storedPage11RangeTwo = localStorage.getItem('page11RangeTwo') || '';
     const storedpage11RangeThree = localStorage.getItem('page11RangeThree') || '';
 
     //page 12
     const storedpage12Two = localStorage.getItem('page12Two') || '';
     const storedpage12Range = localStorage.getItem('page12Range') || '';
     const storedPage12RangeTwo = localStorage.getItem('page12RangeTwo') || '';
 
     //page 13
     const storedpage13 = localStorage.getItem('page13') || '';
     const storedpage13Range = localStorage.getItem('page13Range') || '';
 
     //page 14
     const storedpage14Range = localStorage.getItem('page14Range') || '';
     const storedpage14RangeTwo = localStorage.getItem('page14RangeTwo') || '';
 
     //page 15
     const storedpage15Range = localStorage.getItem('page15Range') || '';
 
     //page 16
     const storedEmail = localStorage.getItem('email');
     const storedphone = localStorage.getItem('phone');

     const storedusername = localStorage.getItem('username');
    const isChecked = localStorage.getItem('isChecked');

    //page 18

    const storedpage18 = localStorage.getItem('page18Text') || '';


    // Prepare data for submission
    const dataToSubmit = {
      storedpage2Text,
      storedpage2,
      username: storedusername,
      email: storedEmail,
      phone: storedphone,
      storedpage14Range,
      storedpage13Range,
      storedpage13,
      storedPage11,
      storedpage11Two,
      storedPage11Three,
      storedpage11Range,
      storedPage11RangeTwo,
      storedpage11RangeThree,
      storedpage12Range,
      storedPage12RangeTwo,
      storedpage12Two,
      storedpage10Two,
      storedPage10,
      storedpage8Two,
      storedpage8,
      storedpage6Range2,
      storedpage6Range3,
      storedpage9Two,
      storedpage9Three,
      storedpage9Range,
      storedpage7,
      storedpageRange,
      storedpage6Range,
      storedpage6,
      storedpage5Range,
      storedpage5,
      storedpage4Range,
      storedpage4,
      storedpage3Range,
      storedselectedBerufStatus,
      storedpage15Range,
      storedpage14RangeTwo,
      storedpage9,
      storedpage18
    };

    console.log("Form Data for API:", dataToSubmit);

    try {
      const response = await fetch('https://landing-page-insurrance-site.vercel.app/api/test-send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSubmit),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log('Submit result:', result);
      if (result.success) {
        localStorage.clear();
      }

      router.push(`/success?language=${search}`);

    } catch (error) {
      console.error('Submit error:', error);
    }
  };

  const components = [
    <TestFirst key="TestFirst" data={formData} language={search} onChange={handleInputChange} />,
    <TestSecond key="TestSecond" data={formData} language={search} onChange={handleInputChange} />,
    <TestThird key="TestThird" data={formData} language={search} onChange={handleInputChange} />,
    <TestFourth key="TestFourth" data={formData} language={search} onChange={handleInputChange} />,
    <TestFifth key="TestFifth" data={formData} language={search} onChange={handleInputChange} />,
    <TestSix key="TestSix" data={formData} language={search} onChange={handleInputChange} />,
    
    // Only add TestSeven if the language is 'en'
    ...(search === 'en' 
        ? [<TestSeven key="TestSeven" data={formData} language={search} onChange={handleInputChange} />]
        : []),
    
    <TestEight key="TestEight" data={formData} language={search} onChange={handleInputChange} />,
    <TestNine key="TestNine" data={formData} language={search} onChange={handleInputChange} />,
    <TestTen key="TestTen" data={formData} language={search} onChange={handleInputChange} />,
    <TestEleven key="TestEleven" data={formData} language={search} onChange={handleInputChange} />,
    <TestTwelve key="TestTwelve" data={formData} language={search} onChange={handleInputChange} />,
    <TestThirteen key="TestThirteen" data={formData} language={search} onChange={handleInputChange} />,
    <TestFourteen key="TestFourteen" data={formData} language={search} onChange={handleInputChange} />,
    <TestFifteen key="TestFifteen" data={formData} language={search} onChange={handleInputChange} />,
    <TestEighteen key="TestEighteen" data={formData} language={search} onChange={handleInputChange} />,
    <TestSixteen key="TestSixteen" data={formData} language={search} onChange={handleInputChange} />,
  ];
  
  

  const progressBarWidth = ((currentComponentIndex + 1) / components.length) * 100;

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
          <ComHeader language={search} />
        {components[currentComponentIndex]}
        <div className="flex justify-around px-4 md:px-20 items-center mt-8 mx-4 md:mx-8">
          {currentComponentIndex > 0 ? (
            <button
              onClick={handleBack}
              className="bg-[#c04f15] text-white font-semibold py-2 px-6 rounded-lg hover:bg-orange-700 focus:outline-none"
            >
              {search === 'en' ? 'Back' : 'Zurück'}
            </button>
          ) : (
            <div className="w-24"></div>
          )}

          {currentComponentIndex < components.length - 1 ? (
            <button
              onClick={handleNext}
              className="bg-[#c04f15] text-white font-semibold py-2 px-6 rounded-lg hover:bg-orange-700 focus:outline-none"
            >
              {search === 'en' ? 'Next' : 'Weiter'}
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
             {search === 'en' ? 'Submit' : 'Abschicken'}
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
            {search === 'en' ? 'Question' : 'Frage'} {currentComponentIndex + 1} {search === 'en' ? 'of' : 'von'} {components.length}
          </p>
        </div>
      </div>

      <TestFooter />
    </div>
  );
};

const Page = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <PageContent />
  </Suspense>
);

export default Page;
