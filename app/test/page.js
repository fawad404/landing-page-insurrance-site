"use client"
import '../components/testFourteen/testFourteen.css'
import React, { useState } from 'react';
import ComHeader from '../components/comHeader/ComHeader';

const Page = () => {
  const [children, setChildren] = useState(9); // Initialize children state
  const [selectedValue, setSelectedValue] = useState('');

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);
    console.log(`Derzeitiger Familienstatus​: ${value}`);
  };
  const handleRangeChange = (e) => {
    const value = parseInt(e.target.value, 10); // Parse the value to an integer
    setChildren(value); // Update children state with the selected value
    console.log(value);
  };

  return (
    <>
    <ComHeader />
    <h2 className="p-20 md:p-10 pb-0 md:pb-0 text-[#c25115] text-2xl md:text-2xl lg:text-2xl font-fijala italic mb-6 flex md:block md:justify-start -ml-16 md:-ml-0">
    Eintrittsvoraussetzungen
      </h2>

      <div class="text-textColor flex items-center justify-center min-h-[55vh] font-fijala p-4  md:ml-8">
        <div class="w-full max-w-3xl relative">
            <div>
            <div className="relative mt-12">
                <h1 className="text-xl md:text-2xl italic text-[#c25115] mb-4 hover-trigger">Derzeitiger Familienstatus​
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

    
                <div class="grid grid-cols-1 gap-4 mb-6 text-[#c25115] text-lg mb-5">
                    <label class="flex items-center space-x-3">
                    <input 
                      type="checkbox" 
                      value="ledig / geschieden / verwitwet​"
                      onChange={handleChange}
                        className="form-checkbox h-5 w-5  mr-2" />
                        <span className='text-lg'>verheiratet​</span>
                    </label>
                    <label class="flex items-center space-x-3">
                    <input 
                        type="checkbox" 
                        value="ledig / geschieden / verwitwet​"
                        onChange={handleChange}
                          className="form-checkbox h-5 w-5  mr-2" />
                        <span>ledig / geschieden / verwitwet​</span>
                    </label>

                </div>

                <h2 className="text-xl text-[#c25115] mb-4">
                Anzahl Kinder : {children}
            </h2>
            <div className="mb-6">
              <label className="block">
              <input
              type="range"
              min="0"
              max="9"
              value={children}
              onChange={handleRangeChange}
              className="appearance-none h-8 w-full max-w-xs md:max-w-xs"
              style={{
                background: `linear-gradient(to right, #f2aa84 0%, #f2aa84 ${(children - 0) / (9 - 0) * 100}%, #fbe3d6 ${(children - 0) / (9 - 0) * 100}%, #fbe3d6 100%)`,
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
  );
};

export default Page;
