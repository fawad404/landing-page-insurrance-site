"use client"
import '../testFourteen/testFourteen.css'
import React, { useState } from 'react';
import ComHeader from '../comHeader/ComHeader';

const TestFourth = ({ data, onChange }) => {
  const [income, setIncome] = useState(0); // Initialize income state
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);
    onChange('page4', value);
    console.log(`Einkommen: ${value}`);
  };

  const handleRangeChange = (e) => {
    const roundedValue = Math.round(e.target.value / 500) * 500; // Round to nearest 500
    setIncome(roundedValue); // Update income state with rounded value
    onChange('page4Range', roundedValue);
    console.log(roundedValue);
  };

  return (
    <>
      <ComHeader />
      <h2 className="p-20 md:p-10 pb-0 md:pb-2 text-[#c25115] text-xl md:text-2xl lg:text-2xl font-fijala italic mb-6 flex md:block md:justify-start -ml-10 md:-ml-0">
        Eintrittsvoraussetzungen
      </h2>
      <div className="p-2 md:p-4 flex flex-col items-center min-h-[55vh] font-fijala">
        <div className="bg-white w-full max-w-4xl p-8 pt-0 md:p-20 md:pb-0 md:pt-0 rounded-lg">
          <label className="text-[#c25115] text-lg md:text-2xl md:ml-56 italic flex items-center justify-start">
            Einkommen
            <span className="relative inline-block ml-1 group">
              <span className="text-orange-600 absolute -top-4 -right-5">
                <img src='/info-circle-svgrepo-com (1).svg' className='h-5 w-5 text-red-900' />
              </span>
              <div className="-ml-20 mt-3 md:-ml-8 absolute hidden group-hover:block bg-white border border-orange-500 text-black text-sm rounded p-2 whitespace-normal md:max-w-xs lg:max-w-sm z-10">
                <p className='p-2'>
                  <img src='/info-circle-svgrepo-com (1).svg' className='h-4 w-4 mb-2' />
                  Aufgrund gesetzlicher Vorgaben ist man nur zwischen den Systemen
                  wahlberechtigt, wenn man in der GKV als freiwilliges Mitglied
                  geführt wird. „Freiwillig“ ist man in der GKV, wenn man verbeamtet
                  oder selbständig ist oder als Angestellter über der
                  Jahresarbeitsentgeltgrenze verdient. Diese liegt derzeit bei 69.300
                  Euro.
                </p>
              </div>
            </span>
          </label>
          <label className="mt-6 text-[#c25115] text-base md:text-2xl md:ml-56 flex items-center justify-start">
            <input 
            type="checkbox" 
             value="über 62.100,00 Euro"
             onChange={handleChange}
            className="form-checkbox h-5 w-5 text-[#c25115] mr-2" 
            />
            über 62.100,00 Euro
          </label>
          <label className="mt-6 text-[#c25115] text-lg md:text-2xl ml-12 md:-ml-12 flex items-center justify-start md:justify-center">
            oder
          </label>
          <label className="mt-6 text-[#c25115] text-lg md:text-2xl md:ml-56 flex items-center justify-start">
            Einkommen: {Number(income).toLocaleString('de-DE')} Euro p.a.
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
