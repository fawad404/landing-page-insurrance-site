import React from 'react'
import ComHeader from '../comHeader/ComHeader'

const TestFourth = () => {
  return (
    <>
      <ComHeader />
      <h2 className="p-20 md:p-10 pb-0 md:pb-2 text-[#c04f15] text-xl md:text-2xl lg:text-3xl italic mb-6 flex md:block md:justify-start -ml-10 md:-ml-0">
        Eintrittsvoraussetzungen
      </h2>
      <div className="p-2 md:p-4 flex flex-col items-center min-h-[55vh]">
        <div className="bg-white w-full max-w-4xl p-8 pt-0 md:p-20 md:pb-0 md:pt-0 rounded-lg">
          <label className="text-[#c04f15] text-lg md:text-2xl md:ml-56 flex items-center justify-start">
            Einkommen
            <span className="relative inline-block ml-1 group">
            <span className="text-orange-600 absolute -top-4 -right-5">
                <img src='/info-circle-svgrepo-com (1).svg' className='h-5 w-5 text-red-900' />
              </span>
              <div className="-ml-20 mt-3 md:-ml-8 absolute hidden group-hover:block bg-white border border border-orange-500 text-black text-sm rounded p-2 whitespace-normal md:max-w-xs lg:max-w-sm z-10">
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
          <label className="mt-6 text-[#c04f15] text-base md:text-2xl md:ml-56 flex items-center justify-start">
          <input type="checkbox" className="form-checkbox h-5 w-5 text-[#c04f15] mr-2" />
                über 62.100,00 Euro
              </label>
          <label className="mt-6 text-[#c04f15] text-lg md:text-2xl md:ml-56 flex items-center justify-start">
          Einkommen :  70.000,00 Euro p.a.
          </label>
          <div className="mt-6  text-[#c04f15] text-lg md:text-2xl md:ml-56 flex items-center justify-start">
                <input
                    type="text"
                    className="bg-[#fbe3d6] text-lg text-white placeholder-white rounded-md border-none px-2 py-0 focus:outline-none focus:ring-2 focus:ring-[#c04f15] focus:ring-opacity-50 w-full max-w-xs md:max-w-xs"
                    placeholder=""
                />
                </div>

        </div>
      </div>
    </>
  )
}

export default TestFourth
