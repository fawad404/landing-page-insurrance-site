"use client"
import '../testFourteen/testFourteen.css'
import React, { useEffect, useState } from 'react';
import ComHeader from '../comHeader/ComHeader'

const TestNine = ({ data, onChange }) => {
    const [income, setIncome] = useState(0); // Initialize income state
    const [selectedValue, setSelectedValue] = useState('');
    const [selectedValueTwo, setSelectedValueTwo] = useState('');
    const [selectedValueThree, setSelectedValueThree] = useState('');

    useEffect(() => {
        // Retrieve the value from localStorage when the component mounts
        const storedValue = localStorage.getItem('page9');
        if (storedValue) {
          setSelectedValue(storedValue);
        }
        const storedValueTwo = localStorage.getItem('page9Two');
        if (storedValueTwo) {
            setSelectedValueTwo(storedValueTwo);
        }
        const storedValueThree = localStorage.getItem('page9Three');
        if (storedValueThree) {
            setSelectedValueThree(storedValueThree);
        }
        const storedValueRange = localStorage.getItem('page9Range');
        if (storedValueRange) {
            setIncome(storedValueRange);
        }
      }, []);


    const handleChange = (event) => {
      const value = event.target.value;
      setSelectedValue(value);
      localStorage.setItem('page9', value);
      onChange('page9', value);
      console.log(`${value}`);
    };
    const handleChangeTwo = (event) => {
        const value = event.target.value;
        setSelectedValueTwo(value);
        localStorage.setItem('page9Two', value);
        onChange('page9Two', value);
        console.log(`${value}`);
      };
      const handleChangeThree = (event) => {
        const value = event.target.value;
        setSelectedValueThree(value);
        localStorage.setItem('page9Three', value);
        onChange('page9Three', value);
        console.log(`${value}`);
      };
    const handleRangeChange = (e) => {
      const roundedValue = Math.round(e.target.value / 500) * 500; // Round to nearest 500
      setIncome(roundedValue); // Update income state with rounded value
      localStorage.setItem('page9Range', roundedValue);
      onChange('page9Range', roundedValue);
      console.log(roundedValue);
    };
  return (
    <>
    <ComHeader />
    <h2 className="p-20 md:p-10 pb-0 md:pb-0 text-[#c25115] font-fijala text-xl md:text-2xl lg:text-2xl italic mb-3 flex md:block md:justify-start -ml-12 md:-ml-0">
    Familienplanung
      </h2>

      <div className="flex items-center justify-center min-h-[55vh] font-fijala p-8 md:-mt-8 lg:-mt-8">

        <div className="w-full max-w-3xl bg-white  relative">
            <div className="relative">
                <label className="flex items-center space-x-3 text-[#c25115]">
                    <input type="checkbox" 
                    value="Familienplanung: Keine Lebenspartnerschaft geplantv"
                    checked={selectedValue === 'Familienplanung: Keine Lebenspartnerschaft geplantv'}
                    onChange={handleChange}
                    className="form-checkbox h-5 w-5 " />
                    <span className="inline-block text-base text-base">Keine Lebenspartnerschaft geplant</span>
                </label>
                <h2 className="text-2xl mb-4 italic text-[#c25115] mt-3">Versichertenstatus Lebenspartner
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
    
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-3 text-base text-[#c25115]">
                <label className="flex items-center space-x-3">
                    <input type="checkbox" 
                    value="Versichertenstatus Lebenspartner: PKV versichert"
                    checked={selectedValueTwo === 'Versichertenstatus Lebenspartner: PKV versichert'}
                    onChange={handleChangeTwo}
                    className="form-checkbox h-5 w-5 " />
                    <span>PKV versichert</span>
                </label>
                <label className="flex items-center space-x-3">
                    <input type="checkbox" 
                    value="Versichertenstatus Lebenspartner: GKV familienversichert"
                    checked={selectedValueTwo === 'Versichertenstatus Lebenspartner: GKV familienversichert'}
                    onChange={handleChangeTwo}
                    className="form-checkbox h-5 w-5 " />
                    <span>GKV familienversichert</span>
                </label>
                <label className="flex items-center space-x-3">
                    <input type="checkbox" 
                    value="Versichertenstatus Lebenspartner: KV pflichtversicher"
                    checked={selectedValueTwo === 'Versichertenstatus Lebenspartner: KV pflichtversicher'}
                    onChange={handleChangeTwo}
                    className="form-checkbox h-5 w-5 " />
                    <span>GKV pflichtversichert</span>
                </label>
                <label className="flex items-center space-x-3">
                    <input type="checkbox" 
                    value="Versichertenstatus Lebenspartner: GKV freiwillig versichert"
                    checked={selectedValueTwo === 'Versichertenstatus Lebenspartner: GKV freiwillig versichert'}
                    onChange={handleChangeTwo}
                    className="form-checkbox h-5 w-5 " />
                    <span>GKV freiwillig versichert</span>
                </label>
                <label className="flex items-center space-x-3">
                    <input type="checkbox" 
                    value="Versichertenstatus Lebenspartner: Lebenspartner noch nicht bekannt"
                    checked={selectedValueTwo === 'Versichertenstatus Lebenspartner: Lebenspartner noch nicht bekannt'}
                    onChange={handleChangeTwo}
                    className="form-checkbox h-5 w-5 " />
                    <span>Lebenspartner noch nicht bekannt</span>
                </label>
                
            </div>

      
            <h2 className="text-2xl mb-4 italic text-[#c25115]">Berufsstatus Lebenspartner</h2>

            <div className="grid grid-rows-3 sm:grid-rows-2 md:grid-rows-1 text-base grid-flow-col gap-4 mb-3 text-[#c25115]">
                <label className="flex items-center space-x-3">
                    <input type="checkbox" 
                    value="Berufsstatus Lebenspartnerr: angestellt"
                    checked={selectedValueThree === 'Berufsstatus Lebenspartnerr: angestellt'}
                    onChange={handleChangeThree}
                    className="form-checkbox h-5 w-5 " />
                    <span>angestellt</span>
                </label>
                <label className="flex items-center space-x-3">
                    <input type="checkbox" 
                    value="Berufsstatus Lebenspartner: selbständig"
                    checked={selectedValueThree === 'Berufsstatus Lebenspartner: selbständig'}
                    onChange={handleChangeThree}
                    className="form-checkbox h-5 w-5 " />
                    <span>selbständig</span>
                </label>
                <label className="flex items-center space-x-3">
                    <input type="checkbox" 
                    value="Berufsstatus Lebenspartner: verbeamtet"
                    checked={selectedValueThree === 'Berufsstatus Lebenspartner: verbeamtet'}
                    onChange={handleChangeThree}
                    className="form-checkbox h-5 w-5 " />
                    <span>verbeamtet</span>
                </label>
                <label className="flex items-center space-x-3">
                    <input type="checkbox" 
                    value="Berufsstatus Lebenspartner: Hausfrau/mann"
                    checked={selectedValueThree === 'Berufsstatus Lebenspartner: Hausfrau/mann'}
                    onChange={handleChangeThree}
                    className="form-checkbox h-5 w-5 " />
                    <span>Hausfrau/mann
                    </span>
                </label>
                <label className="flex items-center space-x-3">
                    <input type="checkbox" 
                    value="Berufsstatus Lebenspartner: Elternzeit"
                    checked={selectedValueThree === 'Berufsstatus Lebenspartner: Elternzeit'}
                    onChange={handleChangeThree}
                    className="form-checkbox h-5 w-5 " />
                    <span>Elternzeit</span>
                </label>
            </div>

    
            <h2 className="text-2xl mb-3 mt-4 italic text-[#c25115]">Einkommen Lebenspartner</h2>
            <h2 className="text-xl text-[#c25115] mb-4">Einkommen: {Number(income).toLocaleString('de-DE')} Euros p.a.</h2>

            <div className="mb-3">
                <label className="block">
                <input
    type="range"
    min="0"
    max="70000"
    value={income}
    onChange={handleRangeChange}
    className="appearance-none h-8 w-full max-w-xs md:max-w-48"
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