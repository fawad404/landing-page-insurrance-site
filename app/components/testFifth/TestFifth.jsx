"use client"
import '../testFourteen/testFourteen.css'
import React, { useState } from 'react';
import ComHeader from '../comHeader/ComHeader';

const TestFifth = ({ data, onChange }) => {
  const [children, setChildren] = useState(0); // Initialize children state
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);
    onChange('page5', value);
    console.log(`Derzeitiger Familienstatus​: ${value}`);
  };
  const handleRangeChange = (e) => {
    const value = parseInt(e.target.value, 10); // Parse the value to an integer
    setChildren(value); // Update children state with the selected value
    onChange('page5Range', value);
    console.log(value);
  };

  return (
    <>
      <ComHeader />
      <h2 className="p-20 md:p-10 pb-0 md:pb-0 text-[#c25115] font-fijala text-xl md:text-2xl lg:text-2xl italic mb-6 flex md:block md:justify-start -ml-10 md:-ml-0">
        Eintrittsvoraussetzungen
      </h2>
      <div className="flex flex-col items-center min-h-[50vh] font-fijala text-[#c25115] mt-12">
        <div className="bg-white w-full max-w-4xl p-8 pt-0 md:p-20 md:pb-0 md:pt-0 rounded-lg">
          <label className=" text-lg italic md:text-2xl md:ml-56 flex items-center justify-start">
            Derzeitiger Familienstatus​
          </label>
          <label className="mt-6  text-base md:text-2xl md:ml-56 flex items-center justify-start">
            <input type="checkbox" 
            value="verheiratet​"
            checked={selectedValue === 'verheiratet​'}
            onChange={handleChange}
              className="form-checkbox h-5 w-5  mr-2" />
            verheiratet​
          </label>
          <label className="mt-6  text-base md:text-2xl md:ml-56 flex items-center justify-start">
            <input 
            type="checkbox" 
             value="ledig / geschieden / verwitwet​"
             checked={selectedValue === 'ledig / geschieden / verwitwet​'}
             onChange={handleChange}
              className="form-checkbox h-5 w-5  mr-2" />
            ledig / geschieden / verwitwet​
          </label>
          <label className="mt-6 text-lg md:text-2xl flex md:ml-56 items-center justify-start">
            Anzahl Kinder : {children}
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
