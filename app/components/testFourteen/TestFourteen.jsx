"use client"
import './testFourteen.css'
import React, { useEffect, useState } from 'react'
import ComHeader from '../comHeader/ComHeader'
const TestFourteen = ({ data, onChange }) => {
  const [healthPercentage, setHealthPercentage] = useState(0); // Initial value set to 67%
  const [healthPercentageTwo, setHealthPercentageTwo] = useState(0); // Initial value set to 67%

  useEffect(() => {
    // Retrieve the value from localStorage when the component mounts
    const storedValue = localStorage.getItem('page14Range');
    if (storedValue) {
      setHealthPercentage(storedValue);
    }
    const storedValueTwo = localStorage.getItem('page14RangeTwo');
    if (storedValueTwo) {
      setHealthPercentageTwo(storedValueTwo);
    }
  }, []);



  const handleRangeChange = (event) => {
    const value = event.target.value;
    //const value = Math.round(event.target.value / 5) * 5; // Round to the nearest 5
    setHealthPercentage(value);
    localStorage.setItem('page14Range', value);
    onChange('page14Range', value);
    console.log(healthPercentage);
  };
  const handleRangeChangeTwo = (event) => {
    const value = event.target.value;
    //const value = Math.round(event.target.value / 5) * 5; // Round to the nearest 5
    setHealthPercentageTwo(value);
    localStorage.setItem('page14RangeTwo', value);
    onChange('page14RangeTwo', value);
    console.log(healthPercentageTwo);
  };
  return (
    <>
    <ComHeader />
    <h2 className="p-20 md:p-10 pb-0 md:pb-0 text-[#c25115] text-2xl md:text-2xl lg:text-2xl font-fijala italic mb-6 flex md:block md:justify-start -ml-16 md:-ml-0">
    Persönliche Einschätzung zu Leistungen im Gesundheitswesen
      </h2>

      <div className="text-textColor flex items-center justify-center min-h-[55vh] font-fijala p-4  md:ml-8">
        <div className="w-full max-w-3xl relative">
            <div>
            <div className="mt-12">
                <h1 className="relative text-xl md:text-2xl text-[#c25115] mb-4 hover-trigger">Leistungen, die die Gesetzliche nicht komplett abdeckt sind mir sehr wichtig (z.B. Zahnersatz, alternative Medizin, Brille, Privatpatient im Krankenhaus, etc)! 
                <span className="inline-block ml-1 group">
            <span className="text-[#c25115] -top-3 ">
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

    
            <label className="mt-6 text-[#c25115] relative text-base md:text-xl flex flex-col md:flex-row items-center w-full">
      <div className="flex flex-col w-full md:w-1/2 mx-4">
        <div className="flex justify-between text-xs">
          <span>Trifft nicht zu</span>
          <span>trifft zu</span>
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
                <h2 className="text-2xl mb-8 text-[#c25115] mt-16">Schnelle Terminvergabe (z.B. Fachärzte, MRT, etc) ist mir sehr wichtig!</h2>

                <label className="mt-6 text-[#c25115] relative text-base md:text-xl flex flex-col md:flex-row items-center w-full">
      <div className="flex flex-col w-full md:w-1/2 mx-4">
        <div className="flex justify-between text-xs">
          <span>Trifft nicht zu</span>
          <span>trifft zu</span>
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