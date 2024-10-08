"use client";
import '../testFourteen/testFourteen.css';
import React, { useEffect, useState } from 'react';

const TestTwelve = ({ data, onChange, language }) => {
  const [healthPercentage, setHealthPercentage] = useState(0); // Initial value set to 67%
  const [healthPercentageTwo, setHealthPercentageTwo] = useState(0); // Initial value set to 67%
  const [selectedValueTwo, setSelectedValueTwo] = useState('');
  const [selectedValue, setSelectedValue] = useState('');

  useEffect(() => {
    // Retrieve the value from localStorage when the component mounts
    const storedRange = localStorage.getItem('page12Range');
    if (storedRange) {
      setHealthPercentage(storedRange);
    }
    const storedRangeTwo = localStorage.getItem('page12RangeTwo');
    if (storedRangeTwo) {
      setHealthPercentageTwo(storedRangeTwo);
    }
    const storedValue = localStorage.getItem('page12');
    if (storedValue) {
      setSelectedValue(storedValue);
    }
    const storedValueTwo = localStorage.getItem('page12Two');
    if (storedValueTwo) {
      setSelectedValueTwo(storedValueTwo);
    }
  }, []);

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);
    localStorage.setItem('page12', value);
    onChange('page12', value);
    console.log(`${value}`);
  };

  const handleChangeTwo = (event) => {
    const value = event.target.value;
    setSelectedValueTwo(value);
    localStorage.setItem('page12Two', value);
    onChange('page12Two', value);
    console.log(`${value}`);
  };

  const handleRangeChange = (e) => {
    const roundedValue = Math.round(e.target.value / 50) * 50; // Round to nearest 50
    setHealthPercentage(roundedValue); // Update income state with rounded value
    localStorage.setItem('page12Range', roundedValue);
    onChange('page12Range', roundedValue);
    console.log(roundedValue);
  };

  const handleRangeChangeTwo = (e) => {
    const roundedValue = Math.round(e.target.value / 100) * 100; // Round to nearest 100
    setHealthPercentageTwo(roundedValue); // Update income state with rounded value
    localStorage.setItem('page12RangeTwo', roundedValue);
    onChange('page12RangeTwo', roundedValue);
    console.log(roundedValue);
  };

  // Define the text for both languages
  const text = language === 'en' ? 
    {
      title: 'Retirement Age',
      infoText: 'Please enter your expected statutory pension. You can find this information in the annual pension statement from the German Pension Insurance. Please exclude inflation-related increases.',
      rangeLabel: 'Statutory Pension: ',
      checkbox1: 'Occupational Pension (BAV)',
      checkbox2: 'Estimated Income in Retirement',
      sumLabel: 'Total BAV and Work Income: '
    } 
    : 
    {
      title: 'Rentenalter',
      infoText: 'Bitte tragen Sie hier Ihre zu erwartende gesetzliche Rente ein. Sie finden diese auch in der jährlichen Renteninformation von der Deutschen Rentenversicherung. Lassen Sie bitte inflationsbedingte Steigerungen außen vor.',
      rangeLabel: 'Gesetzliche Rente: ',
      checkbox1: 'Betriebliche Altersversorgung (BAV)',
      checkbox2: 'Geschätztes Arbeitseinkommen im Rentenalter',
      sumLabel: 'Summe BAV und Arbeitseinkommen: '
    };

  return (
    <>
      
      <h2 className="p-20 md:p-10 pb-0 md:pb-0 text-[#c25115] text-2xl md:text-2xl lg:text-2xl font-fijala italic mb-6 flex md:block md:justify-start -ml-16 md:-ml-0">
        {text.title}
      </h2>

      <div className="text-textColor flex items-center justify-center min-h-[55vh] font-fijala p-4 md:ml-8">
        <div className="w-full max-w-3xl relative">
          <div>
            <div className="relative mt-12">
              <h1 className="text-xl md:text-2xl italic text-[#c25115] mb-4 hover-trigger">
                {text.title} (inflationsbereinigt)
                <span className="inline-block ml-1 group">
                  <span className="text-[#c25115] -top-3 ">
                    <img src='/info-circle-svgrepo-com (1).svg' className='h-5 w-5 text-red-900' />
                  </span>
                  <div className="-ml-36 absolute sm:-ml-20 md:-ml-28 hidden group-hover:block bg-white border border border-orange-500 text-black text-sm rounded p-2 whitespace-normal lg:max-w-sm z-10">
                    <p className='p-2'>
                      <img src='/info-circle-svgrepo-com (1).svg' className='h-4 w-4 mb-2' />
                      {text.infoText}
                    </p>
                  </div>
                </span>
              </h1>
            </div>

            <h2 className="text-xl text-[#c25115] mb-4">
              {text.rangeLabel} {Number(healthPercentage).toLocaleString('de-DE')} Euros p.M.
            </h2>
            <div className="mb-6">
              <label className="block">
                <input
                  type="range"
                  min="0"
                  max="5000"
                  value={healthPercentage}
                  onChange={handleRangeChange}
                  className="mt-2 appearance-none h-8 w-full bg-[#f2aa84] max-w-xs md:max-w-48"
                  style={{
                    background: `linear-gradient(to right, #f2aa84 0%, #f2aa84 ${(healthPercentage / 5000) * 100}%, #fbe3d6 ${(healthPercentage / 5000) * 100}%, #fbe3d6 100%)`,
                    accentColor: '#c04f15',
                    WebkitAppearance: 'none',
                    MozAppearance: 'none',
                    msAppearance: 'none'
                  }}
                />
              </label>
            </div>

            <div className="grid grid-cols-1 gap-4 mb-6 text-[#c25115] mb-5">
              <label className="flex items-center space-x-3">
                <input 
                  type="checkbox" 
                  value={text.checkbox1}
                  checked={selectedValueTwo === text.checkbox1}
                  onChange={handleChangeTwo}
                  className="form-checkbox h-5 w-5 " 
                />
                <span>{text.checkbox1}</span>
              </label>
              <label className="flex items-center space-x-3">
                <input 
                  type="checkbox" 
                  value={text.checkbox2}
                  checked={selectedValue === text.checkbox2}
                  onChange={handleChange}
                  className="form-checkbox h-5 w-5 " 
                />
                <span>{text.checkbox2}</span>
              </label>
            </div>

            <h2 className="text-xl text-[#c25115] mb-4">
              {text.sumLabel} {Number(healthPercentageTwo).toLocaleString('de-DE')} Euro p.M.
            </h2>
            <div className="mb-6">
              <label className="block">
                <input
                  type="range"
                  min="0"
                  max="5000"
                  value={healthPercentageTwo}
                  onChange={handleRangeChangeTwo}
                  className="mt-2 appearance-none h-8 w-full bg-[#f2aa84] max-w-xs md:max-w-48"
                  style={{
                    background: `linear-gradient(to right, #f2aa84 0%, #f2aa84 ${(healthPercentageTwo / 5000) * 100}%, #fbe3d6 ${(healthPercentageTwo / 5000) * 100}%, #fbe3d6 100%)`,
                    accentColor: '#c04f15',
                    WebkitAppearance: 'none',
                    MozAppearance: 'none',
                    msAppearance: 'none'
                  }}
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestTwelve;
