"use client";
import '../testFourteen/testFourteen.css';
import React, { useEffect, useState } from 'react';

// Define texts for each language
const languageTexts = {
  de: {
    title: 'Eintrittsvoraussetzungen',
    entryAge: 'Eintrittsalter',
    infoTooltip: 'Die private Krankenversicherung ermittelt die Höhe Ihrer Beiträge u.a. anhand Ihres Alters bei Eintritt ins System. Ein frühes Eintrittsalter ist gleichbedeutend mit günstigeren Beitragssätzen​',
    year: 'Jahrgang'
  },
  en: {
    title: 'Entry requirements',
    entryAge: 'Entry age',
    infoTooltip: 'Private health insurance calculates the amount of your contributions based on your age when you join the system. An early entry age means lower contribution rates.',
    year: 'Year'
  }
};

const TestThird = ({ data, language = 'de', onChange }) => {
  const [year, setYear] = useState(1950); // Initialize year state

  useEffect(() => {
    // Retrieve the value from localStorage when the component mounts
    const storedValue = localStorage.getItem('page3Range');
    if (storedValue) {
      setYear(parseInt(storedValue, 10));
    }
  }, []);

  const handleRangeChange = (e) => {
    const value = parseInt(e.target.value, 10); // Parse the value to an integer
    setYear(value); // Update year state with the selected value
    localStorage.setItem('page3Range', value);
    onChange('page3Range', value);
    console.log(value);
  };

  // Get text based on the selected language
  const texts = languageTexts[language] || languageTexts['de'];

  return (
    <>
      <h2 className="p-20 md:p-10 pb-0 md:pb-2 text-[#c25115] font-fijala text-xl md:text-2xl lg:text-2xl italic mb-6 flex md:block md:justify-start -ml-10 md:-ml-0">
        {texts.title}
      </h2>
      <div className="p-2 md:p-4 flex flex-col items-center min-h-[55vh] font-fijala">
        <div className="bg-white w-full max-w-4xl p-8 pt-0 md:p-20 md:pb-0 md:pt-0 rounded-lg md:mt-10">
          <label className="text-[#c25115] text-lg md:text-2xl md:ml-56 flex items-center justify-start">
            {texts.entryAge}
            <span className="relative inline-block ml-1 group">
              <span className="text-orange-600 absolute -top-4 -right-5">
                <img src='/info-circle-svgrepo-com (1).svg' className='h-5 w-5 text-red-900' />
              </span>
              <div className="-ml-8 mt-3 md:-ml-8 absolute hidden group-hover:block bg-white border border border-orange-500 text-black text-sm rounded p-2 whitespace-normal md:max-w-xs lg:max-w-sm z-10">
                <p className='p-2'>
                  <img src='/info-circle-svgrepo-com (1).svg' className='h-4 w-4 mb-2' />
                  {texts.infoTooltip}
                </p>
              </div>
            </span>
          </label>
          <label className="mt-6 text-[#c25115] text-lg md:text-2xl md:ml-56 flex items-center justify-start">
            {texts.year}: {year}
          </label>
          <div className="mt-6 text-[#c25115] text-lg md:text-2xl md:ml-56 flex items-center justify-start">
            <input
              type="range"
              min="1950"
              max="2024"
              value={year}
              onChange={handleRangeChange}
              className="appearance-none h-8 w-full max-w-xs md:max-w-xs"
              style={{
                background: `linear-gradient(to right, #f2aa84 0%, #f2aa84 ${(year - 1950) / (2024 - 1950) * 100}%, #fbe3d6 ${(year - 1950) / (2024 - 1950) * 100}%, #fbe3d6 100%)`,
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

export default TestThird;
