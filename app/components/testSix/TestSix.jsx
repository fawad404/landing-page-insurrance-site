import React from 'react'
import ComHeader from '../comHeader/ComHeader'

const TestSix = () => {
  return (
    <>
      <ComHeader />
      <h2 className="p-20 md:p-10 pb-0 md:pb-2 text-[#c04f15] text-xl md:text-2xl lg:text-3xl font-sans italic font-semibold mb-6 flex md:block md:justify-start -ml-8 md:-ml-0">
        Eintrittsvoraussetzungen
      </h2>
      <div className="p-2 md:p-4 flex flex-col items-center font-sans italic">
        <div className="bg-white w-full max-w-4xl p-8 pt-0 md:p-20 md:pt-0 rounded-lg">
          <label className="text-[#c04f15] text-lg font-serif md:text-2xl font-semibold flex items-center justify-start">
            Gesundheitsstatus
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

          <label className="mt-6 text-[#df8556] text-base md:text-2xl font-semibold flex items-center justify-between">
            <span className="flex-shrink-0">Selbsteinschätzung Gesundheit:</span>
            <input 
              type="range" 
              min="0" 
              max="100" 
              value="67" 
              className="form-range h-5 w-2/3 mx-4 bg-[#f2aa84] text-[#df8556]" 
            />
            <span className="flex-shrink-0">67%</span>
          </label>

          <label className="mt-6 text-[#df8556] text-base md:text-xl font-semibold flex items-center justify-start">
            Waren Sie in den letzten 5 Jahren in Behandlung: 
            <div className="ml-4 items-center">
              <label className="mr-4 text-xl">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-[#df8556] mr-1" />
                ja
              </label>
              <label className='text-xl'>
                <input type="checkbox" className="form-checkbox h-5 w-5 text-[#df8556] mr-1" />
                nein
              </label>
            </div>
          </label>

          <label className="mt-4 text-[#df8556] text-base md:text-2xl font-semibold flex items-center justify-start">
            Wenn Ja, welche Diagnosen
          </label>
          <div className="mt-2">
            <textarea
              className="bg-[#f2aa84] text-lg text-white placeholder-white rounded-md border-none px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#df8556] focus:ring-opacity-50 shadow-md w-full h-24"
              placeholder=""
            />
          </div>

        </div>
      </div>
    </>
  )
}

export default TestSix
