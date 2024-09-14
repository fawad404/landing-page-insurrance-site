import React, { useEffect, useState } from 'react';
import ComHeader from '../comHeader/ComHeader';

const TestSecond = ({ data, language, onChange }) => {
  const [selectedValue, setSelectedValue] = useState('');
  const [selectedText, setSelectedText] = useState('');

  useEffect(() => {
    // Retrieve the value from localStorage when the component mounts
    const storedValue = localStorage.getItem('page2');
    if (storedValue) {
      setSelectedValue(storedValue);
    }
    const storedText = localStorage.getItem('page2Text');
    if (storedText) {
      setSelectedText(storedText);
    }
  }, []);

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);
    localStorage.setItem('page2', value);
    onChange('page2', value);
    console.log(`Selected: ${value}`);
  };
  const handleChangeText = (event) => {
    const value = event.target.value;
    setSelectedText(value);
    localStorage.setItem('page2Text', value);
    onChange('page2Text', value);
    console.log(`Selected: ${value}`);
  };

  return (
    <>
      <ComHeader />
      <h2 className="p-20 md:p-10 pb-0 md:pb-2 text-[#c25115] font-fijala text-xl md:text-2xl lg:text-2xl italic mb-6 flex md:block md:justify-start -ml-10 md:-ml-0">
      {language =='en' ? 
            'Entry requirements' 
            :
            'Eintrittsvoraussetzungen'
          }
        
      </h2>
      <div className="p-4 pb-0 flex flex-col items-center min-h-[55vh] font-fijala">
        <div className="bg-white w-full max-w-4xl px-8 py-2 md:py-8 md:pb-0 rounded-lg">
          <label className="text-[#c25115] relative italic text-lg md:text-2xl sm:ml-20 md:ml-32 flex items-center justify-start mb-6">
          {language =='en' ? 
            'Public health insurance status' 
            :
            'GKV-Versichertenstatus'
          }
            
            <span className=" inline-block ml-1 group">
              <span className="text-orange-600 absolute -top-2 right-76">
                <img src='/info-circle-svgrepo-com (1).svg' className='h-5 w-5 text-red-900' />
              </span>
              <div className="-ml-44 md:-ml-8 absolute hidden group-hover:block bg-white border border border-orange-500 text-black text-sm rounded p-2 whitespace-normal md:max-w-xs lg:max-w-sm z-10">
                <p className='p-2'>
                  <img src='/info-circle-svgrepo-com (1).svg' className='h-4 w-4 mb-2' />
                  {language =='en' ? 
            'Due to legal requirements, you are only entitled to choose between the systems if you are registered as a voluntary member of the GKV. You are “voluntary” in the public health insurance scheme if you are a civil servant or self-employed or if you earn more than the annual salary limit as an employee. This is currently 69,300 euros' 
            :
            'Aufgrund gesetzlicher Vorgaben ist man nur zwischen den Systemen wahlberechtigt, wenn man in der GKV als freiwilliges Mitglied geführt wird. „Freiwillig“ ist man in der GKV, wenn man verbeamtet oder selbständig ist oder als Angestellter über der Jahresarbeitsentgeltgrenze verdient. Diese liegt derzeit bei 69.300 Euro.'
          }
                  
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
                {language =='en' ? 
            '“voluntarily” insured (or soon to be voluntarily insured)' 
            :
            '„freiwillig“ versichert (bzw demnächst freiwillig versichert)'
          }
                
              </label>
              <label className="text-[#c25115] text-lg md:text-xl md:ml-20 flex items-center justify-start">
                <input
                  type="checkbox"
                  value="pflichtversichert"
                  checked={selectedValue === 'pflichtversichert'}
                  className="form-checkbox h-5 w-5 text-[#c25115] mr-2"
                  onChange={handleChange}
                />
                {language =='en' ? 
            'Obligatory member' 
            :
            'pflichtversichert'
          }
                
              </label>
              <h3></h3>
              <label className="text-[#c25115] text-lg md:text-xl md:ml-20 flex items-center justify-start">
              {language =='en' ? 
            'Name of the health insurance company' 
            :
            'Name der Krankenkasse'
          }
              
          </label>
          <div className="mt-6 text-[#c25115] text-lg md:text-xl md:ml-20 flex items-center justify-start">
          <input
              type="text"
              value={selectedText ? selectedText : ''}
              onChange={handleChangeText}
              className="bg-[#fbe3d6] text-lg h-10 text-gray-900 placeholder-white rounded-md border-none px-2 py-0 focus:outline-none focus:ring-2 focus:ring-[#c04f15] focus:ring-opacity-50 w-full md:max-w-[14rem]"
             
            />
</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestSecond;
