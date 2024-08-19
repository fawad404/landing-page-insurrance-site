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
      <h2 className="p-20 md:p-10 pb-0 md:pb-2 text-orange-600 text-xl md:text-2xl lg:text-3xl font-bold mb-6 flex md:block md:justify-start -ml-8 md:-ml-0">
        Eintrittsvoraussetzungen
      </h2>
      <div className="mb-6 flex flex-col items-center md:items-stretch md:mt-16 lg:mb-40">
        <label className="text-orange-600 text-lg md:text-2xl font-semibold mb-2 block self-center md:ml-[-207px]">
          Berufsstatus
        </label>
        <div className="flex flex-wrap items-center justify-center md:justify-center space-x-4 mt-8 md:mt-16">
          <label className="flex items-center text-xl text-orange-600 mb-2 md:mb-0">
            <input
              type="checkbox"
              value="angestellt"
              checked={selectedValue === 'angestellt'}
              onChange={handleChange}
              className="mr-2"
            />
            angestellt
          </label>
          <label className="flex items-center text-lg text-orange-600 mb-2 md:mb-0">
            <input
              type="checkbox"
              value="selbständig"
              checked={selectedValue === 'selbständig'}
              onChange={handleChange}
              className="mr-2"
            />
            selbständig
          </label>
          <label className="flex items-center text-lg text-orange-600 mb-2 md:mb-0">
            <input
              type="checkbox"
              value="verbeamtet"
              checked={selectedValue === 'verbeamtet'}
              onChange={handleChange}
              className="mr-2"
            />
            verbeamtet
          </label>
        </div>
      </div>
    </>
  );
};

export default TestFirst;
