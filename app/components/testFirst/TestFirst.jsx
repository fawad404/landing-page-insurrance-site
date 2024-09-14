"use client"
import { useState, useEffect } from 'react';
import ComHeader from "../comHeader/ComHeader";

const TestFirst = ({ data, language, onChange }) => {
  const [selectedValue, setSelectedValue] = useState(null);

  useEffect(() => {
    // Retrieve the value from localStorage when the component mounts
    const storedValue = localStorage.getItem('selectedBerufStatus');
    if (storedValue) {
      setSelectedValue(storedValue);
      onChange('berufStatus', storedValue);
    }
  }, []);

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);
    onChange('berufStatus', value);
    // Save the selected value to localStorage
    localStorage.setItem('selectedBerufStatus', value);
  };

  return (
    <>
      <ComHeader />
      <h2 className="p-20 md:p-10 pb-0 md:pb-0 text-[#c25115] text-xl md:text-2xl lg:text-2xl font-fijala italic mb-6 flex md:block md:justify-start -ml-12 md:-ml-0">
        {language ==='en' ? 
        'Entry requirements' 
        :
         'Eintrittsvoraussetzungen'
         }
        
      </h2>
      <div className="flex items-center justify-center min-h-[55vh] p-8 md:-mt-12 lg:-mt-20 ">
        <div className="w-full max-w-3xl bg-white font-fijala relative">
          <h2 className="text-2xl mb-8 font-fijala italic text-[#c25115]">
            {language =='en' ? 
            'Professional status' 
            :
            'Berufsstatus'
          }
            
            </h2>
          <div className="grid grid-rows-3 sm:grid-rows-2 md:grid-rows-1 text-base grid-flow-col mb-6 text-[#c25115]">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox h-5 w-5 md:ml-24"
                value="angestellt"
                checked={selectedValue === 'angestellt'}
                onChange={handleChange}
              />
              <span className='text-xl'>
              {language =='en' ? 
            'Employed' 
            :
            'angestellt'
          }
                
                </span>
            </label>
            <label className="flex items-center space-x-2 md:-ml-40">
              <input type="checkbox" className="form-checkbox h-5 w-5"
                value="selbständig"
                checked={selectedValue === 'selbständig'}
                onChange={handleChange}
              />
              <span className='text-xl'>
              {language =='en' ? 
            'self-employed' 
            :
            'selbständig'
          }
                
                </span>
            </label>
            <label className="flex items-center space-x-2 md:-ml-44">
              <input type="checkbox" className="form-checkbox h-5 w-5"
                value="verbeamtet"
                checked={selectedValue === 'verbeamtet'}
                onChange={handleChange}
              />
              <span className='text-xl'>
              {language =='en' ? 
            'civil servant' 
            :
            'verbeamtet'
          }
                </span>
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestFirst;
