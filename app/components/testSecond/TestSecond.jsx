import React from 'react';
import ComHeader from '../comHeader/ComHeader';

const TestSecond = () => {
  return (
    <>
      <ComHeader />
      <h2 className="p-10 pb-4 text-orange-600 text-xl md:text-2xl lg:text-3xl font-bold mb-6">
        Eintrittsvoraussetzungen
      </h2>
      <div className="p-4 flex flex-col items-center">
        <div className="bg-white w-full max-w-4xl px-8 py-10 rounded-lg relative">
          <label className="text-orange-600 text-lg md:text-2xl font-semibold md:ml-56 flex items-center justify-start">
            GKV-Versichertenstatus
            <span className="relative inline-block ml-1 group">
              <span className="text-orange-600">ℹ️</span>
              <div className="-ml-44 md:-ml-8 absolute hidden group-hover:block bg-white border border border-orange-500 text-black text-sm rounded p-2 whitespace-normal md:max-w-xs lg:max-w-sm z-10">
                <p>
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
              <label className="text-orange-600 text-lg md:text-2xl font-semibold md:ml-56 flex justify-start">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-orange-600 mr-2 mt-2" />
                „freiwillig“ versichert (bzw demnächst freiwillig versichert)
              </label>
              <label className="text-orange-600 text-lg md:text-2xl font-semibold md:ml-56 flex items-center justify-start">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-orange-600 mr-2" />
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
