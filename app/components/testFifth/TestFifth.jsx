import React from 'react'
import ComHeader from '../comHeader/ComHeader'

const TestFifth = () => {
  return (
    <>
      <ComHeader />
      <h2 className="p-20 md:p-10 pb-0 md:pb-2 text-[#df8556] text-xl md:text-2xl lg:text-3xl font-bold mb-6 flex md:block md:justify-start -ml-8 md:-ml-0">
      Eintrittsvoraussetzungen
      </h2>
      <div className="p-2 md:p-4 flex flex-col items-center font-serif">
        <div className="bg-white w-full max-w-4xl p-8 pt-0 md:p-20 md:pt-0 rounded-lg">
          <label className="text-[#df8556] text-lg font-serif md:text-2xl font-semibold md:ml-56 flex items-center justify-start">
          Derzeitiger Familienstatus​
            
          </label>
          <label className="mt-6 text-[#df8556] text-base md:text-2xl font-semibold md:ml-56 flex items-center justify-start">
          <input type="checkbox" 

          className="form-checkbox h-5 w-5 text-[#df8556] mr-2" />
          verheiratet​
              </label>
              <label className="mt-6 text-[#df8556] text-base md:text-2xl font-semibold md:ml-56 flex items-center justify-start">
          <input type="checkbox" 

          className="form-checkbox h-5 w-5 text-[#df8556] mr-2" />
          ledig / geschieden / verwitwet​
              </label>
          <label className="mt-6 text-[#df8556] text-lg md:text-2xl font-semibold flex md:ml-56 items-center justify-start">
          Anzahl Kinder :    1
          </label>
          <div className="mt-6  text-[#df8556] text-lg md:text-2xl font-semibold flex md:ml-56 items-center justify-start">
                <input
                    type="text"

                    className="bg-[#f2aa84] text-lg text-white placeholder-white rounded-md border-none px-2 py-0 focus:outline-none focus:ring-2 focus:ring-[#df8556] focus:ring-opacity-50 shadow-md w-full max-w-xs md:max-w-40"
                    placeholder=""
                />
                </div>

          <div className="">
            
          </div>
        </div>
        
      </div>
    </>
  )
}

export default TestFifth
