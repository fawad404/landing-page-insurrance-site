"use client";
import '../testFourteen/testFourteen.css';
import React, { useEffect, useState } from 'react';

// Define texts for each language
const languageTexts = {
  de: {
    title: 'Eintrittsvoraussetzungen',
    incomeLabel: 'Einkommen',
    infoTooltip: 'Die Höhe der Beiträge in der gesetzlichen Krankenversicherung hängt von der finanziellen Leistungsfähigkeit des Mitglieds ab. Grundlage ist hier Ihr Einkommen als Arbeitnehmer oder Ihr Gewinn vor Steuern als Selbständiger. Beiträge werden bis zur Beitragsbemessungsgrenze (BBG, derzeit 62.100 Euro) erhoben. Einkommen, das darüber liegt, wird nicht berücksichtigt.',
    overLimit: 'über ',
    eurosPerYear: 'Euros p.a.',
  },
  en: {
    title: 'Entry requirements',
    incomeLabel: 'Income',
    infoTooltip: 'The amount of contributions in public health insurance depends on the member\'s financial capacity. The basis here is your income as an employee or your profit before taxes as a self-employed person. Contributions are levied up to the contribution assessment limit (BBG, currently at 62,100 euros). Any income above this is not taken into account.',
    overLimit: 'over ',
    eurosPerYear: 'euros per year',
  }
};

const TestFourth = ({ data, language = 'de', onChange }) => {
  const [income, setIncome] = useState(0); // Initialize income state
  const [selectedValue, setSelectedValue] = useState('');

  useEffect(() => {
    // Retrieve the value from localStorage when the component mounts
    const storedValue = localStorage.getItem('page4');
    if (storedValue) {
      setSelectedValue(storedValue);
    }
    const storedRange = localStorage.getItem('page4Range');
    if (storedRange) {
      setIncome(parseInt(storedRange, 10));
    }
  }, []);

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);
    localStorage.setItem('page4', value);
    onChange('page4', value);
    console.log(`Einkommen: ${value}`);
  };

  const handleRangeChange = (e) => {
    const roundedValue = Math.round(e.target.value / 500) * 500; // Round to nearest 500
    setIncome(roundedValue); // Update income state with rounded value
    localStorage.setItem('page4Range', roundedValue);
    onChange('page4Range', roundedValue);
    console.log(roundedValue);
  };

  // Get text based on the selected language
  const texts = languageTexts[language] || languageTexts['de'];

  return (
    <>
      <h2 className="p-20 md:p-10 pb-0 md:pb-2 text-[#c25115] text-xl md:text-2xl lg:text-2xl font-fijala italic mb-6 flex md:block md:justify-start -ml-10 md:-ml-0">
        {texts.title}
      </h2>
      <div className="p-2 md:p-4 flex flex-col items-center min-h-[55vh] font-fijala">
        <div className="bg-white w-full max-w-4xl p-8 pt-0 md:p-20 md:pb-0 md:pt-0 rounded-lg">
          <label className="text-[#c25115] text-lg md:text-2xl md:ml-56 italic flex items-center justify-start">
            {texts.incomeLabel}
            <span className="relative inline-block ml-1 group">
              <span className="text-orange-600 absolute -top-4 -right-5">
                <img src='/info-circle-svgrepo-com (1).svg' className='h-5 w-5 text-red-900' />
              </span>
              <div className="-ml-20 mt-3 md:-ml-8 absolute hidden group-hover:block bg-white border border-orange-500 text-black text-sm rounded p-2 whitespace-normal md:max-w-xs lg:max-w-sm z-10">
                <p className='p-2'>
                  <img src='/info-circle-svgrepo-com (1).svg' className='h-4 w-4 mb-2' />
                  {texts.infoTooltip}
                </p>
              </div>
            </span>
          </label>
          <label className="mt-6 text-[#c25115] text-base md:text-2xl md:ml-56 flex items-center justify-start">
            <input 
              type="checkbox" 
              value="über 62.100,00 Euro"
              checked={selectedValue === 'über 62.100,00 Euro'}
              onChange={handleChange}
              className="form-checkbox h-5 w-5 text-[#c25115] mr-2" 
            />
            {texts.overLimit}
            62.100,00 Euro
          </label>
          <label className="mt-6 text-[#c25115] text-lg md:text-2xl ml-12 md:-ml-12 flex items-center justify-start md:justify-center">
            {language === 'en' ? 'or' : 'oder'}
          </label>
          <label className="mt-6 text-[#c25115] text-lg md:text-2xl md:ml-56 flex items-center justify-start">
            {texts.incomeLabel}
            : {Number(income).toLocaleString('de-DE')} {texts.eurosPerYear}
          </label>
          <div className="mt-6 text-[#c25115] text-lg md:text-2xl md:ml-56 flex items-center justify-start">
            <input
              type="range"
              min="0"
              max="70000"
              value={income}
              onChange={handleRangeChange}
              className="appearance-none h-8 w-full max-w-xs md:max-w-xs"
              style={{
                background: `linear-gradient(to right, #f2aa84 0%, #f2aa84 ${(income / 70000) * 100}%, #fbe3d6 ${(income / 70000) * 100}%, #fbe3d6 100%)`,
                accentColor: '#c04f15',  // Set the thumb color
                WebkitAppearance: 'none', // Ensure the custom style applies on WebKit browsers
                MozAppearance: 'none', // Ensure the custom style applies on Mozilla browsers
                msAppearance: 'none' // Ensure the custom style applies on MS browsers
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default TestFourth;
