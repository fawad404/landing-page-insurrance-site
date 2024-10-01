"use client";
import React, { useEffect, useState } from 'react';

// Define texts for each language
const languageTexts = {
  en: {
    title: 'Duration of stay',
    healthStatusLabel: 'How long do you want to stay in Germany?',
    selfAssessmentLabel: 'I will stay about',
    existingDiagnosesLabel: 'Existing diagnoses/treatments in the last 5 years',
    diagnoses: [
      'I will stay in Germany indefinitely',
      'It is still completely open',
      'I want to leave Germany by retirement age at the latest',
    ]
  }
};

const TestSeven = ({ data, language = 'de', onChange }) => {
    const [selectedValues, setSelectedValues] = useState([]);
    const [healthPercentage, setHealthPercentage] = useState(0); 
    const handleRangeChange = (event) => {
        const value = event.target.value;
        setHealthPercentage(value);
        localStorage.setItem('page7Range', value);
        onChange('page7Range', value);
        console.log(value);
      };

    useEffect(() => {
        // Retrieve the value from localStorage when the component mounts
        const storedValue = localStorage.getItem('page7');
        if (storedValue) {
          // Split the stored value by commas and convert it to an array
          const arrayValues = storedValue.split(',');
          setSelectedValues(arrayValues);
        }
        const storedValueRange = localStorage.getItem('page7Range');
            if (storedValueRange) {
            setHealthPercentage(storedValueRange);
            }
      }, []);

    const handleChange = (event) => {
        const value = event.target.value;
        let updatedValues = [...selectedValues];
        
        if (event.target.checked) {
            updatedValues.push(value);
        } else {
            updatedValues = updatedValues.filter((item) => item !== value);
        }

        setSelectedValues(updatedValues);
        onChange('page7', updatedValues);
        localStorage.setItem('page7', updatedValues.join(','));
    };

    // Get text based on the selected language
    const texts = languageTexts['en'];

    return (
        <>
            <h2 className="p-20 md:p-10 pb-0 md:pb-0 text-[#c25115] text-2xl md:text-2xl lg:text-2xl font-fijala italic mb-6 flex md:block md:justify-start -ml-12 md:-ml-0">
                {texts.title}
            </h2>
            <div className="text-textColor flex items-center min-h-[55vh] justify-center font-fijala">
                <div className="w-full max-w-3xl p-6 relative">
                    <div className="relative">
                        <h1 className="text-2xl italic text-[#c25115] mb-4 hover-trigger">
                            {texts.healthStatusLabel}
                            
                        </h1>
                    </div>
                    <label className="mt-6 mb-6 text-[#c25115] relative text-base md:text-xl flex flex-col md:flex-row items-center w-full">
              <span className="flex-shrink-0 mb-2 md:mb-0">
                {texts.selfAssessmentLabel}
              </span>
              <div className="flex flex-col w-full md:w-1/2 mx-4">
                <input
                  type="range"
                  min="0"
                  max="50"
                  value={healthPercentage}
                  onChange={handleRangeChange}
                  className="appearance-none h-8 w-full bg-[#f2aa84]"
                  style={{
                    accentColor: '#f2aa84',
                    background: `linear-gradient(to right, #f2aa84 0%, #f2aa84 ${(healthPercentage / 50) * 100}%, #fbe3d6 ${(healthPercentage / 50) * 100}%, #fbe3d6 100%)`,
                    WebkitAppearance: 'none', // Ensure the custom style applies on WebKit browsers
                    MozAppearance: 'none', // Ensure the custom style applies on Mozilla browsers
                    msAppearance: 'none' // Ensure the custom style applies on MS browsers
                  }}
                />
              </div>
              <span className="text-base md:text-xl">{healthPercentage} years</span>
            </label>
                    {/* <h2 className="text-lg md:text-2xl text-[#c25115] mt-8 mb-8">
                        {texts.existingDiagnosesLabel}
                    </h2> */}
                    <div className="flex flex-col text-lg gap-4 mb-6 text-[#c25115]">
                        {texts.diagnoses.map((diagnosis) => (
                            <label key={diagnosis} className="flex checkbox-label gap-x-3 items-center">
                                <input
                                    type="checkbox"
                                    value={diagnosis}
                                    checked={selectedValues.includes(diagnosis)}
                                    onChange={handleChange}
                                    className="form-checkbox h-4 w-4 text-[#c25115] border-2 border-[#c04f15] focus:ring-orange-500"
                                />
                                <span>{diagnosis}</span>
                            </label>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default TestSeven;
