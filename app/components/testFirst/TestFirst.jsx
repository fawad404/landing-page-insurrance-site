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
      <h2 className="p-20 md:p-10 pb-0 md:pb-2 text-[#c04f15] italic text-xl md:text-2xl lg:text-3xl mb-6 flex md:block md:justify-start -ml-8 md:-ml-0">
        Eintrittsvoraussetzungen
      </h2>
      <div className="mb-6 flex flex-col items-center md:items-stretch md:mt-16 lg:mb-40">
        <label className="text-[#c04f15] text-lg md:text-2xl mb-2 block text-left w-11/12 sm:w-2/4 md:w-2/4 lg:w-2/5 mx-auto">
          Berufsstatus
        </label>
        <div className="flex flex-wrap items-center justify-center md:justify-center space-x-4 md:-ml-12 mt-8 md:mt-16">
          <label className="text-[#c04f15] text-lg md:text-2xl mb-2">
            <input
              type="checkbox"
              value="angestellt"
              checked={selectedValue === 'angestellt'}
              onChange={handleChange}
              className="mr-2 h-4 w-4"
            />
            angestellt
          </label>
          <label className="text-[#c04f15] text-lg md:text-2xl mb-2">
            <input
              type="checkbox"
              value="selbständig"
              checked={selectedValue === 'selbständig'}
              onChange={handleChange}
              className="mr-2 h-4 w-4"
            />
            selbständig
          </label>
          <label className="text-[#c04f15] text-lg md:text-2xl mb-2">
            <input
              type="checkbox"
              value="verbeamtet"
              checked={selectedValue === 'verbeamtet'}
              onChange={handleChange}
              className="mr-2 h-4 w-4"
            />
            verbeamtet
          </label>
        </div>
      </div>
    </>
  );
};

export default TestFirst;
