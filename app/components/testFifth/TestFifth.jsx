"use client";
import '../testFourteen/testFourteen.css';
import React, { useEffect, useState } from 'react';

// Define texts for each language
const languageTexts = {
  de: {
    title: 'Eintrittsvoraussetzungen',
    familyStatusLabel: 'Derzeitiger Familienstatus​',
    marriedLabel: 'verheiratet​',
    singleDivorcedWidowedLabel: 'ledig / geschieden / verwitwet​',
    childrenLabel: 'Anzahl Kinder',
  },
  en: {
    title: 'Entry requirements',
    familyStatusLabel: 'Current family status',
    marriedLabel: 'married',
    singleDivorcedWidowedLabel: 'single / divorced / widowed',
    childrenLabel: 'Number of children',
  }
};

const TestFifth = ({ data, language = 'de', onChange }) => {
  const [children, setChildren] = useState(0); // Initialize children state
  const [selectedValue, setSelectedValue] = useState('');

  useEffect(() => {
    // Retrieve the value from localStorage when the component mounts
    const storedValue = localStorage.getItem('page5');
    if (storedValue) {
      setSelectedValue(storedValue);
    }
    const storedValueRange = localStorage.getItem('page5Range');
    if (storedValueRange) {
      setChildren(parseInt(storedValueRange, 10));
    }
  }, []);

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);
    localStorage.setItem('page5', value);
    onChange('page5', value);
    console.log(`Derzeitiger Familienstatus​: ${value}`);
  };

  const handleRangeChange = (e) => {
    const value = parseInt(e.target.value, 10); // Parse the value to an integer
    setChildren(value); // Update children state with the selected value
    localStorage.setItem('page5Range', value);
    onChange('page5Range', value);
    console.log(value);
  };

  // Get text based on the selected language
  const texts = languageTexts[language] || languageTexts['de'];

  return (
    <>
      <h2 className="p-20 md:p-10 pb-0 md:pb-0 text-[#c25115] font-fijala text-xl md:text-2xl lg:text-2xl italic mb-6 flex md:block md:justify-start -ml-10 md:-ml-0">
        {texts.title}
      </h2>
      <div className="flex flex-col items-center min-h-[50vh] font-fijala text-[#c25115] mt-12">
        <div className="bg-white w-full max-w-4xl p-8 pt-0 md:p-20 md:pb-0 md:pt-0 rounded-lg">
          <label className="text-lg italic md:text-2xl md:ml-56 flex items-center justify-start">
            {texts.familyStatusLabel}
          </label>
          <label className="mt-6 text-base md:text-2xl md:ml-56 flex items-center justify-start">
            <input
              type="checkbox"
              value="verheiratet​"
              checked={selectedValue === 'verheiratet​'}
              onChange={handleChange}
              className="form-checkbox h-5 w-5 mr-2"
            />
            {texts.marriedLabel}
          </label>
          <label className="mt-6 text-base md:text-2xl md:ml-56 flex items-center justify-start">
            <input
              type="checkbox"
              value="ledig / geschieden / verwitwet​"
              checked={selectedValue === 'ledig / geschieden / verwitwet​'}
              onChange={handleChange}
              className="form-checkbox h-5 w-5 mr-2"
            />
            {texts.singleDivorcedWidowedLabel}
          </label>
          <label className="mt-6 text-lg md:text-2xl flex md:ml-56 items-center justify-start">
            {texts.childrenLabel}: {children}
          </label>
          <div className="mt-6 text-[#c25115] text-lg md:text-2xl flex md:ml-56 items-center justify-start">
            <input
              type="range"
              min="0"
              max="9"
              value={children}
              onChange={handleRangeChange}
              className="appearance-none h-8 w-full max-w-xs md:max-w-xs"
              style={{
                background: `linear-gradient(to right, #f2aa84 0%, #f2aa84 ${(children - 0) / (9 - 0) * 100}%, #fbe3d6 ${(children - 0) / (9 - 0) * 100}%, #fbe3d6 100%)`,
                accentColor: '#c04f15',
                WebkitAppearance: 'none',
                MozAppearance: 'none',
                msAppearance: 'none'
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TestFifth;
