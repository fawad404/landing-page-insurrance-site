import { useState } from 'react';
import ComHeader from "../comHeader/ComHeader";

const TestFirst = ({ data, onChange }) => {
  const [selectedValue, setSelectedValue] = useState(null);

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);
    onChange('berufStatus', value);
  };

  return (
    <>
    <ComHeader />
    <h2 className="p-20 md:p-10 pb-0 md:pb-0 text-[#c25115] text-xl md:text-2xl lg:text-2xl font-fijala italic mb-6 flex md:block md:justify-start -ml-12 md:-ml-0">
    Eintrittsvoraussetzungen
      </h2>

      <div class="flex items-center justify-center min-h-[55vh] p-8 md:-mt-12 lg:-mt-20 ">

        <div class="w-full max-w-3xl bg-white font-fijala  relative">
      <h2 class="text-2xl mb-8 font-fijala italic text-[#c25115]">Berufsstatus</h2>

          <div class="grid grid-rows-3 sm:grid-rows-2 md:grid-rows-1 text-base grid-flow-col gap-4 mb-6 text-[#c25115]">
              <label class="flex items-center space-x-3">
                  <input type="checkbox" class="form-checkbox h-5 w-5 "
                  value="angestellt"
                  checked={selectedValue === 'angestellt'}
                  onChange={handleChange}
                   />
                  <span className='text-xl'>angestellt</span>
              </label>
              <label class="flex items-center space-x-3">
                  <input type="checkbox" class="form-checkbox h-5 w-5 " 
                   value="selbständig"
                   checked={selectedValue === 'selbständig'}
                   onChange={handleChange}
                  />
                  <span className='text-xl'>selbständig</span>
              </label>
              <label class="flex items-center space-x-3">
                  <input type="checkbox" class="form-checkbox h-5 w-5 " 
                   value="verbeamtet"
                   checked={selectedValue === 'verbeamtet'}
                   onChange={handleChange}
                  />
                  <span className='text-xl'>verbeamtet</span>
              </label>
          </div>
      
      </div>
      </div>
    </>
  );
};

export default TestFirst;
