"use client"
import '../testFourteen/testFourteen.css'
import React, { useState } from 'react';
import ComHeader from '../comHeader/ComHeader'

const TestNine = () => {
    const [income, setIncome] = useState(0); // Initialize income state

    const handleRangeChange = (e) => {
      const roundedValue = Math.round(e.target.value / 500) * 500; // Round to nearest 500
      setIncome(roundedValue); // Update income state with rounded value
      console.log(roundedValue);
    };
  return (
    <>
    <ComHeader />
    <h2 className="p-20 md:p-10 pb-0 md:pb-0 text-[#c25115] font-fijala text-xl md:text-2xl lg:text-2xl italic mb-6 flex md:block md:justify-start -ml-12 md:-ml-0">
    Familienplanung
      </h2>

      <div className="flex items-center justify-center min-h-[55vh] font-fijala p-8 md:-mt-12 lg:-mt-20 ">

        <div className="w-full max-w-3xl bg-white  relative">
            <div className="relative">
                <label className="flex items-center space-x-3 text-[#c25115]">
                    <input type="checkbox" className="form-checkbox h-5 w-5 " />
                    <span className="inline-block text-base text-base">Keine Lebenspartnerschaft geplant</span>
                </label>
                <h2 className="text-2xl mb-8 italic text-[#c25115] mt-6">Versichertenstatus Lebenspartner
                    <span className="inline-block ml-2 text-sm cursor-pointer ">
                        <i className="fa fa-info-circle text-lg"></i>
                    </span>
                </h2>
                <div className="hidden absolute left-0 top-2
                 max-w-xs p-4 border border-orange-600 bg-orange-100 text-sm rounded-lg shadow-lg hover-box">
                    <p>
                        Whether children or the partner need to be insured under private health insurance in a family
                        situation is complex and depends on professional status, insurance status, and income. Parental
                        leave and the partner’s future employment under social insurance are also factors. Correct
                        evaluation requires answering these questions in advance, where applicable.
                    </p>
                </div>
            </div>
    
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 text-base text-[#c25115]">
                <label className="flex items-center space-x-3">
                    <input type="checkbox" className="form-checkbox h-5 w-5 " />
                    <span>PKV versichert</span>
                </label>
                <label className="flex items-center space-x-3">
                    <input type="checkbox" className="form-checkbox h-5 w-5 " />
                    <span>GKV familienversichert</span>
                </label>
                <label className="flex items-center space-x-3">
                    <input type="checkbox" className="form-checkbox h-5 w-5 " />
                    <span>GKV pflichtversichert</span>
                </label>
                <label className="flex items-center space-x-3">
                    <input type="checkbox" className="form-checkbox h-5 w-5 " />
                    <span>GKV freiwillig versichert</span>
                </label>
                <label className="flex items-center space-x-3">
                    <input type="checkbox" className="form-checkbox h-5 w-5 " />
                    <span>Lebenspartner noch nicht bekannt</span>
                </label>
                
            </div>

      
            <h2 className="text-2xl mb-8 italic text-[#c25115]">Berufsstatus Lebenspartner</h2>

            <div className="grid grid-rows-3 sm:grid-rows-2 md:grid-rows-1 text-base grid-flow-col gap-4 mb-6 text-[#c25115]">
                <label className="flex items-center space-x-3">
                    <input type="checkbox" className="form-checkbox h-5 w-5 " />
                    <span>angestellt</span>
                </label>
                <label className="flex items-center space-x-3">
                    <input type="checkbox" className="form-checkbox h-5 w-5 " />
                    <span>selbständig</span>
                </label>
                <label className="flex items-center space-x-3">
                    <input type="checkbox" className="form-checkbox h-5 w-5 " />
                    <span>verbeamtet</span>
                </label>
                <label className="flex items-center space-x-3">
                    <input type="checkbox" className="form-checkbox h-5 w-5 " />
                    <span>Hausfrau/mann
                    </span>
                </label>
                <label className="flex items-center space-x-3">
                    <input type="checkbox" className="form-checkbox h-5 w-5 " />
                    <span>Elternzeit</span>
                </label>
            </div>

    
            <h2 className="text-2xl mb-6 italic text-[#c25115]">Einkommen Lebenspartner</h2>
            <h2 className="text-xl text-[#c25115] mb-4">Einkommen: {Number(income).toLocaleString('de-DE')} Euros p.a.</h2>

            <div className="mb-6">
                <label className="block">
                <input
    type="range"
    min="0"
    max="70000"
    value={income}
    onChange={handleRangeChange}
    className="appearance-none h-8 w-full max-w-xs md:max-w-48 rounded-md"
    style={{
      background: `linear-gradient(to right, #f2aa84 0%, #f2aa84 ${(income / 70000) * 100}%, #fbe3d6 ${(income / 70000) * 100}%, #fbe3d6 100%)`,
      accentColor: '#c04f15',  // Set the thumb color
      WebkitAppearance: 'none', // Ensure the custom style applies on WebKit browsers
      MozAppearance: 'none', // Ensure the custom style applies on Mozilla browsers
      msAppearance: 'none' // Ensure the custom style applies on MS browsers
    }}
  />
                </label>
            </div>
        </div>
    </div>
    </>
  )
}

export default TestNine