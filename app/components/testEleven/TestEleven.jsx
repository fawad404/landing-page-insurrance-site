"use client";
import '../testFourteen/testFourteen.css'
import React, { useEffect, useState } from 'react'

const TestEleven = ({ data, language, onChange }) => {
  const [selectedValue, setSelectedValue] = useState('');
  const [selectedValueTwo, setSelectedValueTwo] = useState('');
  const [selectedValueThree, setSelectedValueThree] = useState('');
  const [healthPercentage, setHealthPercentage] = useState(0); // Initial value set to 67%
  const [healthPercentageTwo, setHealthPercentageTwo] = useState(0); // Initial value set to 67%
  const [healthPercentageThree, setHealthPercentageThree] = useState(0); // Initial value set to 67%

  useEffect(() => {
    // Retrieve the value from localStorage when the component mounts
    const storedRange = localStorage.getItem('page11Range');
    if (storedRange) {
      setHealthPercentage(storedRange);
    }
    const storedRangeTwo = localStorage.getItem('page11RangeTwo');
    if (storedRangeTwo) {
      setHealthPercentageTwo(storedRangeTwo);
    }
    const storedRangeThree = localStorage.getItem('page11RangeThree');
    if (storedRangeThree) {
      setHealthPercentageThree(storedRangeThree);
    }
    const storedValue = localStorage.getItem('page11');
    if (storedValue) {
      setSelectedValue(storedValue);
    }
    const storedValueTwo = localStorage.getItem('page11Two');
    if (storedValueTwo) {
      setSelectedValueTwo(storedValueTwo);
    }
    const storedValueThree = localStorage.getItem('page11Three');
    if (storedValueThree) {
      setSelectedValueThree(storedValueThree);
    }
  }, []);

  const handleRangeChange = (event) => {
    const value = event.target.value;
    setHealthPercentage(value);
    localStorage.setItem('page11Range', value);
    onChange('page11Range', value);
  };
  
  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);
    localStorage.setItem('page11', value);
    onChange('page11', value);
  };

  const handleChangeTwo = (event) => {
    const value = event.target.value;
    setSelectedValueTwo(value);
    localStorage.setItem('page11Two', value);
    onChange('page11Two', value);
  };

  const handleChangeThree = (event) => {
    const value = event.target.value;
    setSelectedValueThree(value);
    localStorage.setItem('page11Three', value);
    onChange('page11Three', value);
  };

  const handleRangeChangeTwo = (event) => {
    const value = event.target.value;
    setHealthPercentageTwo(value);
    localStorage.setItem('page11RangeTwo', value);
    onChange('page11RangeTwo', value);
  };

  const handleRangeChangeThree = (event) => {
    const value = event.target.value;
    setHealthPercentageThree(value);
    localStorage.setItem('page11RangeThree', value);
    onChange('page11RangeThree', value);
  };

  // Define the text for both languages
  const text = language === 'en' ? 
    {
      title: 'Work Planning Before the Age of 55',
      infoText: 'Anyone who decides to take out private health insurance can only return to a public health insurance scheme if they have compulsory insurance. According to §5 and §6 SGB V, this most often arises from unemployment and falling below the annual salary limit. For this reason, it is important to check whether such scenarios are possible.',
      checkbox1: 'I tend to take a sabbatical at some point in the future.',
      checkbox2: 'I will probably change employers at some point.',
      checkbox3: 'I can also imagine working part-time at some point.',
      rangeLabel1: 'Very unlikely',
      rangeLabel: 'very likely',
    } 
    : 
    {
      title: 'Arbeitsplanung vor dem 55. Lebensjahr​',
      infoText: 'Wer sich für eine PKV entscheidet, kann nur dann wieder in eine gesetzliche Krankenkasse zurückkehren, wenn eine Pflichtversicherung vorliegt. Diese ergibt sich nach §5 und §6 SGB V in den häufigsten Fällen durch Arbeitslosigkeit und Unterschreitung der Jahresarbeitsentgeltgrenze. Aus diesem Grunde gilt zu prüfen, ob derartige Szenarien möglich sind.',
      checkbox1: 'Ich tendiere dazu, später mal ein Sabbatical zu absolvieren.​​',
      checkbox2: 'Ich werde meinen Arbeitgeber wahrscheinlich irgendwann wechseln.​',
      checkbox3: 'Ich kann mir vorstellen auch mal in Teilzeit zu arbeiten.​​',
      rangeLabel1: 'Sehr unwahrscheinlich​',
      rangeLabel: 'sehr wahrscheinlich',
    };

  return (
    <>
      
      <h2 className="p-20 md:p-10 pb-0 md:pb-0 text-[#c25115] text-2xl md:text-2xl lg:text-2xl font-fijala italic mb-6 flex md:block md:justify-start -ml-16 md:-ml-0">
        {text.title}
      </h2>

      <div className="text-textColor flex items-center justify-center min-h-[55vh] font-fijala p-4 md:ml-8">
        <div className="w-full max-w-3xl relative">
          <div>
            <div className="mt-12">
              <h1 className="relative text-xl md:text-2xl text-[#c25115] mb-4 hover-trigger">
                {text.title}
                <span className="inline-block ml-1 group">
                  <span className="text-[#c25115] -top-3 ">
                    <img src='/info-circle-svgrepo-com (1).svg' className='h-5 w-5 text-red-900' />
                  </span>
                  <div className="absolute sm:-ml-28 md:-ml-32 hidden group-hover:block bg-white border border border-orange-500 text-black text-sm rounded p-2 whitespace-normal max-w-sm sm:max-w-sm z-10">
                    <p className='p-2'>
                      <img src='/info-circle-svgrepo-com (1).svg' className='h-4 w-4 mb-2' />
                      {text.infoText}
                    </p>
                  </div>
                </span>
              </h1>
            </div>

            <div className='text-[#c25115] md:ml-5 mb-5 text-lg'>
              <label className="flex items-center space-x-3">
                <input 
                  type="checkbox" 
                  value={text.checkbox1}
                  checked={selectedValue === text.checkbox1}
                  onChange={handleChange}
                  className="form-checkbox h-5 w-5 " 
                />
                <span>{text.checkbox1}</span>
              </label>
            </div>
            <label className="mt-6 text-[#c25115] relative text-base md:text-xl flex flex-col md:flex-row items-center w-full">
              <div className="flex flex-col w-full md:w-1/2 mx-4">
                <div className="flex justify-between text-xs">
                  <span>{text.rangeLabel1}</span>
                  <span>{text.rangeLabel}</span>
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
            <div className='text-[#c25115] md:ml-5 mb-5 text-lg mt-12'>
              <label className="flex items-center space-x-3">
                <input 
                  type="checkbox" 
                  onChange={handleChangeTwo}
                  value={text.checkbox2}
                  checked={selectedValueTwo === text.checkbox2}
                  className="form-checkbox h-5 w-5 " 
                />
                <span>{text.checkbox2}</span>
              </label>
            </div>
            <label className="mt-6 text-[#c25115] relative text-base md:text-xl flex flex-col md:flex-row items-center w-full">
              <div className="flex flex-col w-full md:w-1/2 mx-4">
                <div className="flex justify-between text-xs">
                <span>{text.rangeLabel1}</span>
                  <span>{text.rangeLabel}</span>
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
              <label className="flex items-center space-x-3">
                <input 
                  type="checkbox" 
                  onChange={handleChangeThree}
                  value={text.checkbox3}
                  checked={selectedValueThree === text.checkbox3}
                  className="form-checkbox h-5 w-5 " 
                />
                <span>{text.checkbox3}</span>
              </label>
            </div>
            <label className="mt-6 text-[#c25115] relative text-base md:text-xl flex flex-col md:flex-row items-center w-full">
              <div className="flex flex-col w-full md:w-1/2 mx-4">
                <div className="flex justify-between text-xs">
                <span>{text.rangeLabel1}</span>
                  <span>{text.rangeLabel}</span>
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
      </div>
    </>
  );
}

export default TestEleven;
