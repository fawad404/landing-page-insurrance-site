import React, { useState } from 'react';
import ComHeader from '../comHeader/ComHeader';

const TestSecond = ({ data, onChange }) => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);
    onChange('page2', value);
    console.log(`Selected: ${value}`);
  };

  return (
    <>
      <ComHeader />
      <h2 className="p-20 md:p-10 pb-0 md:pb-2 text-[#c25115] font-fijala text-xl md:text-2xl lg:text-2xl italic mb-6 flex md:block md:justify-start -ml-10 md:-ml-0">
        Eintrittsvoraussetzungen
      </h2>
      <div className="p-4 pb-0 flex flex-col items-center min-h-[55vh] font-fijala">
        <div className="bg-white w-full max-w-4xl px-8 py-2 md:py-8 md:pb-0 rounded-lg">
          <label className="text-[#c25115] relative italic text-lg md:text-2xl sm:ml-20 md:ml-32 flex items-center justify-start mb-6">
            GKV-Versichertenstatus
            <span className=" inline-block ml-1 group">
              <span className="text-orange-600 absolute -top-2 right-76">
                <img src='/info-circle-svgrepo-com (1).svg' className='h-5 w-5 text-red-900' />
              </span>
              <div className="-ml-44 md:-ml-8 absolute hidden group-hover:block bg-white border border border-orange-500 text-black text-sm rounded p-2 whitespace-normal md:max-w-xs lg:max-w-sm z-10">
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
          <div className=""></div>

          {/* Centered Component */}
          <div className="mb-6 relative flex flex-col items-center justify-center">
            <div className="flex flex-col space-y-4 mt-6">
              <label className="text-[#c25115] text-lg md:text-xl md:ml-20 flex justify-start">
                <input
                  type="checkbox"
                  value="„freiwillig“ versichert (bzw demnächst freiwillig versichert)"
                  checked={selectedValue === '„freiwillig“ versichert (bzw demnächst freiwillig versichert)'}
                  className="form-checkbox h-5 w-5 text-[#c25115] mr-2 mt-2 mb-4"
                  onChange={handleChange}
                />
                „freiwillig“ versichert (bzw demnächst freiwillig versichert)
              </label>
              <label className="text-[#c25115] text-lg md:text-xl md:ml-20 flex items-center justify-start">
                <input
                  type="checkbox"
                  value="pflichtversichert"
                  checked={selectedValue === 'pflichtversichert'}
                  className="form-checkbox h-5 w-5 text-[#c25115] mr-2"
                  onChange={handleChange}
                />
                pflichtversichert
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestSecond;
