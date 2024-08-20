import React from 'react';
import ComHeader from '../comHeader/ComHeader';

const TestThird = () => {
  return (
    <>
      <ComHeader />
      <h2 className="p-20 md:p-10 pb-0 md:pb-2 text-[#c04f15] text-xl md:text-2xl lg:text-3xl italic mb-6 flex md:block md:justify-start -ml-10 md:-ml-0">
      Eintrittsvoraussetzungen
      </h2>
      <div className="p-2 md:p-4 flex flex-col items-center">
        <div className="bg-white w-full max-w-4xl p-8 pt-0 md:p-20 md:pt-0 rounded-lg md:mt-10">
          <label className="text-[#c04f15] text-lg md:text-2xl md:ml-56 flex items-center justify-start">
          Eintrittsalter
            <span className="relative inline-block ml-1 group">
              <span className="text-[#c04f15]">ℹ️</span>
              <div className="-ml-44 md:-ml-8 absolute hidden group-hover:block bg-white border border border-orange-500 text-black text-sm rounded p-2 whitespace-normal md:max-w-xs lg:max-w-sm z-10">
                <p>
                Die private Krankenversicherung ermittelt die Höhe Ihrer Beiträge u.a. anhand Ihres Alters bei Eintritt ins System. 
                Ein frühes Eintrittsalter ist gleichbedeutend mit günstigeren Beitragssätzen​
                </p>
              </div>
            </span>
          </label>
          <label className="mt-6 text-[#c04f15] text-lg md:text-2xl md:ml-56 flex items-center justify-start">
          Jahrgang :  1960
          </label>
          <div className="mt-6  text-[#c04f15] text-lg md:text-2xl md:ml-56 flex items-center justify-start">
                <input
                    type="text"
                    className="bg-[#f2aa84] text-lg text-white placeholder-white rounded-md border-none px-2 py-0 focus:outline-none focus:ring-2 focus:ring-[#c04f15] focus:ring-opacity-50 shadow-md max-w-40 md:max-w-48"
                    placeholder=""
                />
                </div>

          <div className="">
            
          </div>
        </div>
      </div>
    </>
  );
};

export default TestThird;
