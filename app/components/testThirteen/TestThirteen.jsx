"use client";
import '../testFourteen/testFourteen.css'
import React, { useState } from 'react';
import ComHeader from '../comHeader/ComHeader'
const TestThirteen = ({ data, onChange }) => {
    const [income, setIncome] = useState(0); // Initialize income state
    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (event) => {
      const value = event.target.value;
      setSelectedValue(value);
      onChange('page13', value);
      console.log(`${value}`);
    };
  const handleRangeChange = (e) => {
    const roundedValue = Math.round(e.target.value / 500) * 500; // Round to nearest 500
    setIncome(roundedValue); // Update income state with rounded value
    onChange('page13Range', roundedValue);
    console.log(roundedValue);
  }
  return (
    <>
    <ComHeader />
    <h2 className="p-20 md:p-10 pb-0 md:pb-0 text-[#c25115] text-2xl md:text-2xl lg:text-2xl font-fijala italic mb-6 flex md:block md:justify-start -ml-16 md:-ml-0">
    Rentenalter
      </h2>

      <div className="text-textColor flex items-center justify-center min-h-[55vh] font-fijala p-4  md:ml-8">
        <div className="w-full max-w-3xl relative">
            <div>
            <div className="relative mt-12">
                <h1 className="text-xl md:text-2xl italic text-[#c25115] mb-4 hover-trigger">Sonstige Einkünfte im Rentenalter (inflationsbereinigt) 
                <span className="inline-block ml-1 group">
            <span className="text-[#c25115] -top-3 ">
                <img src='/info-circle-svgrepo-com (1).svg' className='h-5 w-5 text-red-900' />
              </span>
              <div className=" absolute -ml-20 sm:-ml-28 md:-ml-32 hidden group-hover:block bg-white border border border-orange-500 text-black text-sm rounded p-2 whitespace-normal lg:max-w-sm z-10">
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

    
                <div className="grid grid-cols-1 gap-4 mb-6 text-[#c25115] md:ml-5 mb-5">
                    <label className="flex items-center space-x-3">
                        <input type="checkbox" 
                        value="Sonstige Einkünfte im Rentenalter: Ich habe keine Kinder und möchte keine Kinder"
                        checked={selectedValue === 'Sonstige Einkünfte im Rentenalter: Ich habe keine Kinder und möchte keine Kinder'}
                        onChange={handleChange}
                        className="form-checkbox h-5 w-5 " />
                        <span>Ich habe keine Kinder und möchte keine Kinder</span>
                    </label>
                    <label className="flex items-center space-x-3">
                        <input type="checkbox" 
                        value="Sonstige Einkünfte im Rentenalter: Ich habe/möchte ein Kind"
                        checked={selectedValue === 'Sonstige Einkünfte im Rentenalter: Ich habe/möchte ein Kind'}
                        onChange={handleChange}
                        className="form-checkbox h-5 w-5 " />
                        <span>Ich habe/möchte ein Kind </span>
                    </label>
                    <label className="flex items-center space-x-3">
                        <input type="checkbox" 
                        value="Sonstige Einkünfte im Rentenalter: Ich habe/möchte ein bis zwei Kinder"
                        checked={selectedValue === 'Sonstige Einkünfte im Rentenalter: Ich habe/möchte ein bis zwei Kinder'}
                        onChange={handleChange}
                        className="form-checkbox h-5 w-5 " />
                        <span>Ich habe/möchte ein bis zwei Kinder</span>
                    </label>
                    <label className="flex items-center space-x-3">
                        <input type="checkbox" 
                        value="Sonstige Einkünfte im Rentenalter: Ich habe/möchte zwei Kinder"
                        checked={selectedValue === 'Sonstige Einkünfte im Rentenalter: Ich habe/möchte zwei Kinder'}
                        onChange={handleChange}
                        className="form-checkbox h-5 w-5 " />
                        <span>Ich habe/möchte zwei Kinder</span>
                    </label>
                    <label className="flex items-center space-x-3">
                        <input type="checkbox" 
                        value="Sonstige Einkünfte im Rentenalter: Ich habe/möchte zwei bis 3 Kinder"
                        checked={selectedValue === 'Sonstige Einkünfte im Rentenalter: Ich habe/möchte zwei bis 3 Kinder'}
                        onChange={handleChange}
                        className="form-checkbox h-5 w-5 " />
                        <span>Ich habe/möchte zwei bis 3 Kinder</span>
                    </label>
                    <label className="flex items-center space-x-3">
                        <input type="checkbox" 
                        value="Sonstige Einkünfte im Rentenalter: Ich habe/möchte drei oder mehr Kinder"
                        checked={selectedValue === 'Sonstige Einkünfte im Rentenalter: Ich habe/möchte drei oder mehr Kinder'}
                        onChange={handleChange}
                        className="form-checkbox h-5 w-5 " />
                        <span>Ich habe/möchte drei oder mehr Kinder</span>
                    </label>

                </div>

                <h2 className="text-xl text-[#c25115] mb-4">
                Summe sonstiger Einnahmen in der Rente: {Number(income).toLocaleString('de-DE')} Euros p.a.
            </h2>
            <div className="mb-6">
              <label className="block">
                <input
                  type="range"
                  min="0"
                  max="25000"
                  value={income}
                  onChange={handleRangeChange}
                  className="appearance-none h-8 w-full max-w-xs md:max-w-48 rounded-md"
                  style={{
                    background: `linear-gradient(to right, #f2aa84 0%, #f2aa84 ${(income / 25000) * 100}%, #fbe3d6 ${(income / 25000) * 100}%, #fbe3d6 100%)`,
                    accentColor: '#c04f15',
                    WebkitAppearance: 'none',
                    MozAppearance: 'none',
                    msAppearance: 'none'
                  }}
                />
              </label>
            </div>

            </div>
        </div>
    </div>
    </>
  )
}

export default TestThirteen