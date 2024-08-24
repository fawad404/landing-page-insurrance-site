"use client"
import '../testFourteen/testFourteen.css'
import React, { useState } from 'react'
import ComHeader from '../comHeader/ComHeader'

const TestFifteen = () => {
  const [healthPercentageTwo, setHealthPercentageTwo] = useState(67); // Initial value set to 67%
  const handleRangeChangeTwo = (event) => {
    //const value = Math.round(event.target.value / 5) * 5; // Round to the nearest 5
    setHealthPercentageTwo(event.target.value);
  };
  return (
    <>
    <ComHeader />
    <h2 className="p-20 md:p-10 pb-0 md:pb-0 text-[#c25115] text-xl md:text-2xl lg:text-2xl font-fijala italic mb-6 flex md:block md:justify-start -ml-12 md:-ml-0">
    Persönliche Einschätzung zu Beitrag und Leistungen im Gesundheitswesen
      </h2>
      <div class="text-textColor flex items-center justify-center min-h-[55vh] font-fijala p-8 md:-mt-12 lg:-mt-20 ">

<div class="w-full max-w-3xl bg-white  relative">
      <h2 class="text-2xl mb-6  text-[#c25115]">Für ein verbessertes Leistungsspektrum in der Krankenversicherung bin ich bereit in der Privaten auch mehr zu zahlen, als in der Gesetzlichen</h2>
      <label className="mt-6 text-[#c25115] relative text-base md:text-xl flex flex-col md:flex-row items-center w-full">
      <div className="flex flex-col w-full md:w-1/2 mx-4">
        <div className="flex justify-between text-xs">
          <span>Trifft zu</span>
          <span>trifft nicht zu</span>
        </div>
              <input
                type="range"
                min="0"
                max="100"
                value={healthPercentageTwo}
                onChange={handleRangeChangeTwo}
                className="mt-2 appearance-none h-8 w-full bg-[#f2aa84]"
                style={{
                  accentColor: '#f2aa84',
                  background: `linear-gradient(to right, #f2aa84 0%, #f2aa84 ${healthPercentageTwo}%, #fbe3d6 ${healthPercentageTwo}%, #fbe3d6 100%)`,
                  WebkitAppearance: 'none', // Ensure the custom style applies on WebKit browsers
                  MozAppearance: 'none', // Ensure the custom style applies on Mozilla browsers
                  msAppearance: 'none' // Ensure the custom style applies on MS browsers
                }}
              />

      </div>
      
      <span className="text-base md:text-xl mt-4 md:mt-0">{healthPercentageTwo}%</span>
    </label>
 </div>
 </div>
      </>
  )
}

export default TestFifteen