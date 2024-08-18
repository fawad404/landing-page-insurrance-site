import React from 'react'
import ComHeader from '../comHeader/ComHeader'

const TestFourth = () => {
  return (
    <>
      <ComHeader />
      <h2 className="p-20 md:p-10 pb-0 md:pb-2 text-orange-600 text-xl md:text-2xl lg:text-3xl font-bold mb-6 flex md:block md:justify-start -ml-8 md:-ml-0">
        Eintrittsvoraussetzungen
      </h2>
      <div className="p-2 md:p-4 flex flex-col items-center">
        <div className="bg-white w-full max-w-4xl p-8 pt-0 md:p-20 md:pt-0 rounded-lg">
          <label className="text-orange-600 text-lg md:text-2xl font-semibold md:ml-56 flex items-center justify-start">
            Einkommen
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
          <label className="mt-6 text-orange-600 text-base md:text-2xl font-semibold md:ml-56 flex items-center justify-start">
          <input type="checkbox" className="form-checkbox h-5 w-5 text-orange-600 mr-2" />
                über 62.100,00 Euro
              </label>
          <label className="mt-6 text-orange-600 text-lg md:text-2xl font-semibold md:ml-56 flex items-center justify-start">
          Einkommen :  70.000,00 Euro p.a.
          </label>
          <div className="mt-6  text-orange-600 text-lg md:text-2xl font-semibold md:ml-56 flex items-center justify-start">
                <input
                    type="text"
                    className="bg-orange-400 text-lg text-white placeholder-white rounded-md border-none px-2 py-0 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-opacity-50 shadow-md w-full max-w-xs md:max-w-xs"
                    placeholder=""
                />
                </div>

          <div className="">
            
          </div>

          

          <div className="flex justify-around md:justify-between mt-12">
            <button className="bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-orange-700 focus:outline-none">
              Zurück
            </button>
            <button className="bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-orange-700 focus:outline-none">
              Weiter
            </button>
          </div>
        </div>
        <p className="text-center text-orange-600 mt-4">Frage 4 von 17</p>
      </div>
    </>
  )
}

export default TestFourth
