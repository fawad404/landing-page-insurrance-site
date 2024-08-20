import React from 'react';
import ComHeader from '../comHeader/ComHeader';

const TestSecond = () => {
  return (
    <>
      <ComHeader />
      <h2 className="p-12 mt-8 md:mt-0 pb-4 text-[#c04f15] text-xl md:text-2xl lg:text-3xl italic mb-0 md:mb-2">
        Eintrittsvoraussetzungen
      </h2>
      <div className="p-4 pb-0 flex flex-col items-center">
        <div className="bg-white w-full max-w-4xl px-8 py-2 md:py-10 pb-0 rounded-lg">
          <label className="text-[#c04f15] relative italic text-lg md:text-2xl sm:ml-20 md:ml-56 flex items-center justify-start mb-6">
            GKV-Versichertenstatus
            <span className=" inline-block ml-1 group">
            <span className="text-orange-600 absolute -top-2 right-76">
                <img src='/info-circle-svgrepo-com (1).svg' className='h-5 w-5 text-red-900' />
              </span>
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
              <label className="text-[#c04f15] text-lg md:text-xl md:ml-56 flex justify-start">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-[#c04f15] mr-2 mt-2 mb-4" />
                „freiwillig“ versichert (bzw demnächst freiwillig versichert)
              </label>
              <label className="text-[#c04f15] text-lg md:text-xl md:ml-56 flex items-center justify-start">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-[#c04f15] mr-2" />
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
