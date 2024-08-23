"use client"
import './testFourteen.css'
import React, { useState } from 'react'
import ComHeader from '../comHeader/ComHeader'
const TestFourteen = () => {
  const [healthPercentage, setHealthPercentage] = useState(67); // Initial value set to 67%
  const [healthPercentageTwo, setHealthPercentageTwo] = useState(67); // Initial value set to 67%

  const handleRangeChange = (event) => {
    //const value = Math.round(event.target.value / 5) * 5; // Round to the nearest 5
    setHealthPercentage(event.target.value);
  };
  const handleRangeChangeTwo = (event) => {
    //const value = Math.round(event.target.value / 5) * 5; // Round to the nearest 5
    setHealthPercentageTwo(event.target.value);
  };
  return (
    <>
    <ComHeader />
    <h2 className="p-20 md:p-10 pb-0 md:pb-0 text-[#c04f15] text-2xl md:text-2xl lg:text-3xl italic mb-6 flex md:block md:justify-start -ml-16 md:-ml-0">
    Persönliche Einschätzung zu Leistungen im Gesundheitswesen
      </h2>

      <div class="text-textColor flex items-center justify-center min-h-[55vh] p-4  md:ml-8">
        <div class="w-full max-w-3xl relative">
            <div>
            <div className="mt-12">
                <h1 className="relative text-xl md:text-2xl text-[#c04f15] mb-4 hover-trigger">Leistungen, die die Gesetzliche nicht komplett abdeckt sind mir sehr wichtig (z.B. Zahnersatz, alternative Medizin, Brille, Privatpatient im Krankenhaus, etc)! 
                <span className="inline-block ml-1 group">
            <span className="text-[#c04f15] -top-3 ">
                <img src='/info-circle-svgrepo-com (1).svg' className='h-5 w-5 text-red-900' />
              </span>
              <div className=" absolute sm:-ml-28 md:-ml-32 hidden group-hover:block bg-white border border border-orange-500 text-black text-sm rounded p-2 whitespace-normal max-w-sm sm:max-w-sm z-10">
                <p className='p-2'>
                  <img src='/info-circle-svgrepo-com (1).svg' className='h-4 w-4 mb-2' />
                  Da Sie in der gesetzlichen Krankenversicherung als freiwilliges Mitglied auch Beiträge auf
                        andere zusätzliche Einkunftsarten zu entrichten haben, sind diese bei einer Gegenüberstellung
                        von Bedeutung. Bitte tragen Sie hier Ihre Schätzung ein, mit welcher monatlichen Gesamtsumme
                        (ohne gesetzliche Rente) Sie rechnen. Lassen Sie bitte inflationsbedingte Steigerungen außen
                        vor.
                </p>
              </div>
            </span>
                </h1>
            </div>

    
            <label className="mt-6 text-[#c04f15] relative text-base md:text-xl flex flex-col md:flex-row items-center w-full">
      <div className="flex flex-col w-full md:w-1/2 mx-4">
        <div className="flex justify-between text-xs">
          <span>Trifft zu</span>
          <span>trifft nicht zu</span>
        </div>
        <input
          type="range"
          min="0"
          max="100"
          value={healthPercentage}
          onChange={handleRangeChange}
          className="mt-2 appearance-none h-8 w-full bg-[#f2aa84]"
          style={{
            accentColor: '#f2aa84',
            background: `linear-gradient(to right, #f2aa84 0%, #f2aa84 ${healthPercentage}%, #fbe3d6 ${healthPercentage}%, #fbe3d6 100%)`,
            WebkitAppearance: 'none', // Ensure the custom style applies on WebKit browsers
            MozAppearance: 'none', // Ensure the custom style applies on Mozilla browsers
            msAppearance: 'none' // Ensure the custom style applies on MS browsers
          }}
        />
      </div>
      
      <span className="text-base md:text-xl mt-4 md:mt-0">{healthPercentage}%</span>
    </label>
            </div>
                <h2 class="text-2xl mb-8 text-[#c04f15] mt-16">Schnelle Terminvergabe (z.B. Fachärzte, MRT, etc) ist mir sehr wichtig!</h2>

                <label className="mt-6 text-[#c04f15] relative text-base md:text-xl flex flex-col md:flex-row items-center w-full">
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

export default TestFourteen