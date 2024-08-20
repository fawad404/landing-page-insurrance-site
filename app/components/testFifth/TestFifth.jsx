import React from 'react'
import ComHeader from '../comHeader/ComHeader'

const TestFifth = () => {
  return (
    <>
      <ComHeader />
      <h2 className="p-20 md:p-10 pb-0 md:pb-0 text-[#c04f15] text-xl md:text-2xl lg:text-3xl italic mb-6 flex md:block md:justify-start -ml-8 md:-ml-0">
      Eintrittsvoraussetzungen
      </h2>
      <div className="flex flex-col items-center">
        <div className="bg-white w-full max-w-4xl p-8 pt-0 md:p-20 md:pb-0 md:pt-0 rounded-lg">
          <label className="text-[#c04f15] text-lg italic md:text-2xl md:ml-56 flex items-center justify-start">
          Derzeitiger Familienstatus​
            
          </label>
          <label className="mt-6 text-[#c04f15] text-base md:text-2xl md:ml-56 flex items-center justify-start">
          <input type="checkbox" 

          className="form-checkbox h-5 w-5 text-[#c04f15] mr-2" />
          verheiratet​
              </label>
              <label className="mt-6 text-[#c04f15] text-base md:text-2xl md:ml-56 flex items-center justify-start">
          <input type="checkbox" 

          className="form-checkbox h-5 w-5 text-[#c04f15] mr-2" />
          ledig / geschieden / verwitwet​
              </label>
          <label className="mt-6 text-[#c04f15] text-lg md:text-2xl flex md:ml-56 items-center justify-start">
          Anzahl Kinder :    1
          </label>
          <div className="mt-6  text-[#c04f15] text-lg md:text-2xl flex md:ml-56 items-center justify-start">
                <input
                    type="text"

                    className="bg-[#fbe3d6] text-lg text-white placeholder-white rounded-md border-none px-2 py-0 focus:outline-none focus:ring-2 focus:ring-[#c04f15] focus:ring-opacity-50 w-full max-w-xs md:max-w-40"
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
