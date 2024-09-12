"use client"
import '../testFourteen/testFourteen.css'
import React, { useEffect, useState } from 'react'
import ComHeader from '../comHeader/ComHeader'

const TestSix = ({ data, onChange }) => {
  const [healthPercentage, setHealthPercentage] = useState(0); // Initial value set to 67%
  const [selectedValue, setSelectedValue] = useState('');
  const [selectedText, setSelectedText] = useState('');
  const [textarea, setTextArea] = useState('');

  useEffect(() => {
    // Retrieve the value from localStorage when the component mounts
    const storedValue = localStorage.getItem('page6');
    if (storedValue) {
      setSelectedValue(storedValue);
    }
    const storedValueRange = localStorage.getItem('page6Range');
    if (storedValueRange) {
      setHealthPercentage(storedValueRange);
    }
    const storedValueText = localStorage.getItem('page6Text');
    if (storedValueText) {
      setTextArea(storedValueText);
    }
    const storedText = localStorage.getItem('page6Text');
    if (storedText) {
      setSelectedText(storedText);
    }
  }, []);
  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);
    localStorage.setItem('page6', value);
    onChange('page6', value);
    console.log(`Waren Sie in den letzten 5 Jahren in Behandlung: ${value}`);
  };
  const handleRangeChange = (event) => {
    //const value = Math.round(event.target.value / 5) * 5; // Round to the nearest 5
    const value = event.target.value
    setHealthPercentage(value);
    localStorage.setItem('page6Range', value);
    onChange('page6Range', value);
    console.log(healthPercentage);
  };
  const handleTextArea = (event) => {
    const value = event.target.value;
    setSelectedText(value);
    localStorage.setItem('page6Text', value);
    onChange('page6Text', value);
    console.log(`Selected: ${value}`);
  };


  return (
    <>
    <ComHeader />
    <h2 className="p-20 md:p-10 pb-0 md:pb-0 text-[#c25115] text-2xl md:text-2xl lg:text-2xl font-fijala italic mb-6 flex md:block md:justify-start -ml-16 md:-ml-0">
    Eintrittsvoraussetzungen
      </h2>

      <div className="text-textColor flex items-center justify-center min-h-[55vh] font-fijala p-4  md:ml-8">
        <div className="w-full max-w-3xl relative">
            <div>
              
            <div className="relative mb-5">
                <h1 className="text-xl md:text-2xl italic text-[#c25115]  mb-4 hover-trigger">Gesundheitsstatus
                <span className="inline-block ml-1 group">
            <span className="text-[#c25115] absolute -top-1 left-84">
                <img src='/info-circle-svgrepo-com (1).svg' className='h-5 w-5 text-red-900' />
              </span>
              <div className="-ml-20 mt-3 md:-ml-8 absolute hidden group-hover:block bg-white border border border-orange-500 text-black text-sm rounded p-2 whitespace-normal md:max-w-xs lg:max-w-sm z-10">
                <p className='p-2'>
                  <img src='/info-circle-svgrepo-com (1).svg' className='h-4 w-4 mb-2' />
                  Beim Eintritt in die private Krankenversicherung erheben Versicherer Gesundheitsdaten.. Sie können im Antragsprozess bestimmen unter welchen Konditionen eine Annahme erfolgt. Bei Vorerkrankungen ist es möglich von Versichererseite Zuschläge zu verlangen oder den Antrag komplett abzulehnen. Der Gesundheitszustand und die Gesundheitshistorie bei Antragstellung ist aus diesem Grund ein wichtiger Faktor für die Beurteilung, ob die PKV eine Alternative darstellt. ​
                Wir können hier nur
                Tendenzen ableiten. Eine konkrete Einschätzung des Versicherers ist
                  erst nach einer vollständigen Beantwortung aller im Antrag vorliegenden Fragen möglich​.
                </p>
              </div>
            </span>
                </h1>
            </div>

            
            <label className="mt-6 text-[#c25115] relative text-base md:text-xl flex flex-col md:flex-row items-center justify-between w-full">
      <span className="flex-shrink-0 mb-4 md:mt-5 md:mb-0">Selbsteinschätzung Gesundheit:</span>
      
      <div className="flex flex-col w-full md:w-1/2 mx-4">
        <div className="flex justify-between text-xs italic">
          <span>sehr krank</span>
          <span>Sehr gesund</span>
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
      
      <span className="text-base md:text-xl mt-4 md:mt-5">{healthPercentage}%</span>
    </label>

    <label className="mt-6 text-[#c25115] text-base md:text-xl flex items-center justify-start">
            Waren Sie in den letzten 5 Jahren in Behandlung: 
            <div className="ml-4 items-center">
              <label className="mr-4 text-xl">
                <input type="checkbox" 
                value="ja"
                checked={selectedValue === 'ja'}
                onChange={handleChange}
                className="form-checkbox h-4 w-4 text-[#c25115] mr-1" />
                ja
              </label>
              <label className='text-xl'>
                <input type="checkbox" 
                value="nein"
                checked={selectedValue === 'nein'}
                onChange={handleChange}
                className="form-checkbox h-4 w-4 text-[#c25115] mr-1" />
                nein
              </label>
            </div>
          </label>

          <label className="mt-4 text-[#c25115] text-base md:text-xl flex items-center justify-start">
            Wenn Ja, welche Diagnosen
          </label>
          <div className="mt-2">
            <textarea
            value={selectedText ? selectedText : ''}
             onChange={handleTextArea}
              className="mt-6 bg-[#fbe3d6] text-lg text-gray-900 placeholder-white rounded-md border-none px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#c04f15] focus:ring-opacity-50 w-full h-16 md:h-32"
              placeholder=""
            />
          </div>
            </div>
            <div>
            
        

            </div>
        </div>
    </div>
    </>
  )
}

export default TestSix
