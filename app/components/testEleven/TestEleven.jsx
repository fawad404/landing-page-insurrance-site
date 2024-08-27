"use client"
import '../testFourteen/testFourteen.css'
import React, { useState } from 'react'
import ComHeader from '../comHeader/ComHeader'
const TestEleven = () => {
  const [selectedValue, setSelectedValue] = useState('');
  const [healthPercentage, setHealthPercentage] = useState(0); // Initial value set to 67%
  const [healthPercentageTwo, setHealthPercentageTwo] = useState(0); // Initial value set to 67%
  const [healthPercentageThree, setHealthPercentageThree] = useState(0); // Initial value set to 67%

  const handleRangeChange = (event) => {
    //const value = Math.round(event.target.value / 5) * 5; // Round to the nearest 5
    setHealthPercentage(event.target.value);
    console.log(healthPercentage);
  };
  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);
    console.log(`${value}`);
  };
  const handleRangeChangeTwo = (event) => {
    //const value = Math.round(event.target.value / 5) * 5; // Round to the nearest 5
    setHealthPercentageTwo(event.target.value);
    console.log(healthPercentageTwo);
  };
  const handleRangeChangeThree = (event) => {
    //const value = Math.round(event.target.value / 5) * 5; // Round to the nearest 5
    setHealthPercentageThree(event.target.value);
    console.log(healthPercentageThree);
  };
  return (
    <>
    <ComHeader />
    <h2 className="p-20 md:p-10 pb-0 md:pb-0 text-[#c25115] text-2xl md:text-2xl lg:text-2xl font-fijala italic mb-6 flex md:block md:justify-start -ml-16 md:-ml-0">
    Arbeitsplanung
      </h2>

      <div class="text-textColor flex items-center justify-center min-h-[55vh] font-fijala p-4  md:ml-8">
        <div class="w-full max-w-3xl relative">
            <div>
            <div className="mt-12">
                <h1 className="relative text-xl md:text-2xl text-[#c25115] mb-4 hover-trigger">Arbeitsplanung vor dem 55. Lebensjahr​
                <span className="inline-block ml-1 group">
            <span className="text-[#c25115] -top-3 ">
                <img src='/info-circle-svgrepo-com (1).svg' className='h-5 w-5 text-red-900' />
              </span>
              <div className=" absolute sm:-ml-28 md:-ml-32 hidden group-hover:block bg-white border border border-orange-500 text-black text-sm rounded p-2 whitespace-normal max-w-sm sm:max-w-sm z-10">
                <p className='p-2'>
                  <img src='/info-circle-svgrepo-com (1).svg' className='h-4 w-4 mb-2' />
                  Wer sich für eine PKV entscheidet kann nur dann wieder in eine gesetzliche Krankenkasse zurückkehren, wenn eine Pflichtversicherung vorliegt. Diese ergibt sich nach §5 und §6 SGB V in den häufigsten Fällen
                   durch Arbeitslosigkeit und Unterschreitung der Jahresarbeitsentgeltgrenze. Aus diesem Grunde gilt zu prüfen, ob  derartige Szenarien möglich sind.
                </p>
              </div>
            </span>
                </h1>
            </div>

            <div className='text-[#c25115] md:ml-5 mb-5 text-lg'>
            <label class="flex items-center space-x-3">
                        <input type="checkbox" 
                        value="Arbeitsplanung: Ich tendiere dazu, später mal ein Sabbatical zu absolvieren."
                        checked={selectedValue === 'Arbeitsplanung: Ich tendiere dazu, später mal ein Sabbatical zu absolvieren.'}
                        onChange={handleChange}
                        class="form-checkbox h-5 w-5 " />
                        <span>Ich tendiere dazu, später mal ein Sabbatical zu absolvieren.​</span>
                    </label>

            </div>
            <label className="mt-6 text-[#c25115] relative text-base md:text-xl flex flex-col md:flex-row items-center w-full">
      <div className="flex flex-col w-full md:w-1/2 mx-4">
        <div className="flex justify-between text-xs">
          <span>Sehr wahrscheinlich </span>
          <span>sehr unwahrscheinlich​</span>
        </div>
        <input
          type="range"
          min="0"
          max="100"
          value={healthPercentage}
          onChange={handleRangeChange}
          className="ml-0 md:ml-12 mt-2 appearance-none h-8 w-full md:max-w-72 bg-[#f2aa84]"
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

            <div className='text-[#c25115] md:ml-5 mb-5 text-lg mt-12'>
            <label class="flex items-center space-x-3">
                        <input type="checkbox" 
                        onChange={handleChange}
                        value="Arbeitsplanung: Ich tendiere dazu, später mal ein Sabbatical zu absolvieren.​"
                        checked={selectedValue === 'Arbeitsplanung: Ich tendiere dazu, später mal ein Sabbatical zu absolvieren.​'}
                        class="form-checkbox h-5 w-5 " />
                        <span>Ich tendiere dazu, später mal ein Sabbatical zu absolvieren.​</span>
                    </label>

            </div>
            <label className="mt-6 text-[#c25115] relative text-base md:text-xl flex flex-col md:flex-row items-center w-full">
      <div className="flex flex-col w-full md:w-1/2 mx-4">
        <div className="flex justify-between text-xs">
          <span>Sehr wahrscheinlich </span>
          <span>sehr unwahrscheinlich​</span>
        </div>
        <input
          type="range"
          min="0"
          max="100"
          value={healthPercentageTwo}
          onChange={handleRangeChangeTwo}
          className="ml-0 md:ml-12 mt-2 appearance-none h-8 w-full md:max-w-72 bg-[#f2aa84]"
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

    <div className='text-[#c25115] md:ml-5 mb-5 text-lg mt-12'>
            <label class="flex items-center space-x-3">
                        <input type="checkbox" 
                        onChange={handleChange}
                        value="Arbeitsplanung: Ich tendiere dazu, später mal ein Sabbatical zu absolvieren."
                        checked={selectedValue === 'Arbeitsplanung: Ich tendiere dazu, später mal ein Sabbatical zu absolvieren.'}
                        class="form-checkbox h-5 w-5 " />
                        <span>Ich tendiere dazu, später mal ein Sabbatical zu absolvieren.​</span>
                    </label>

            </div>
            <label className="mt-6 text-[#c25115] relative text-base md:text-xl flex flex-col md:flex-row items-center w-full">
      <div className="flex flex-col w-full md:w-1/2 mx-4">
        <div className="flex justify-between text-xs">
          <span>Sehr wahrscheinlich </span>
          <span>sehr unwahrscheinlich​</span>
        </div>
        <input
          type="range"
          min="0"
          max="100"
          value={healthPercentageThree}
          onChange={handleRangeChangeThree}
          className="ml-0 md:ml-12 mt-2 appearance-none h-8 w-full md:max-w-72 bg-[#f2aa84]"
          style={{
            accentColor: '#f2aa84',
            background: `linear-gradient(to right, #f2aa84 0%, #f2aa84 ${healthPercentageThree}%, #fbe3d6 ${healthPercentageThree}%, #fbe3d6 100%)`,
            WebkitAppearance: 'none', // Ensure the custom style applies on WebKit browsers
            MozAppearance: 'none', // Ensure the custom style applies on Mozilla browsers
            msAppearance: 'none' // Ensure the custom style applies on MS browsers
          }}
        />
      </div>
      
      <span className="text-base md:text-xl mt-4 md:mt-0">{healthPercentageThree}%</span>
    </label>
        </div>
    </div>
    </>
  )
}

export default TestEleven