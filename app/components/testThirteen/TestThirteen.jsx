"use client";
import '../testFourteen/testFourteen.css';
import React, { useEffect, useState } from 'react';

const TestThirteen = ({ data, onChange, language }) => {
    const [income, setIncome] = useState(0); // Initialize income state
    const [selectedValues, setSelectedValues] = useState(''); // Initialize selectedValues as a string

    useEffect(() => {
        // Retrieve the values from localStorage when the component mounts
        const storedValues = localStorage.getItem('page13') || '';
        setSelectedValues(storedValues);

        const storedIncome = localStorage.getItem('page13Range');
        if (storedIncome) {
            setIncome(storedIncome);
        }
    }, []);

    const handleCheckboxChange = (event) => {
        const value = event.target.value;
        let updatedValues = selectedValues ? selectedValues.split(', ') : [];

        if (event.target.checked) {
            updatedValues.push(value);
        } else {
            updatedValues = updatedValues.filter((item) => item !== value);
        }

        const updatedString = updatedValues.join(', ');
        setSelectedValues(updatedString);
        onChange('page13', updatedString);
        localStorage.setItem('page13', updatedString);
    };

    const handleRangeChange = (e) => {
        const roundedValue = Math.round(e.target.value / 50) * 50; // Round to nearest 50
        setIncome(roundedValue); // Update income state with rounded value
        localStorage.setItem('page13Range', roundedValue);
        onChange('page13Range', roundedValue);
    };

    // Define the text for both languages
    const text = language === 'en' ? 
        {
            title: 'Retirement Age',
            infoText: 'Since you have to pay contributions on other additional sources of income as a voluntary member of the statutory health insurance, these are relevant in a comparison. Please enter your estimate of the total monthly amount (excluding statutory pension) that you expect. Please exclude inflation-related increases.',
            checkbox1: 'Private Pension Insurance',
            checkbox2: 'Subsidized Pension Insurance (Riester, Rürup)',
            checkbox3: 'Rental/Lease Income',
            checkbox4: 'Interest/Dividends from Capital/Stocks',
            checkbox5: 'Other Income',
            sumLabel: 'Total Other Income in Retirement: '
        } 
        : 
        {
            title: 'Rentenalter',
            infoText: 'Da Sie in der gesetzlichen Krankenversicherung als freiwilliges Mitglied auch Beiträge auf andere zusätzliche Einkunftsarten zu entrichten haben, sind diese bei einer Gegenüberstellung von Bedeutung. Bitte tragen Sie hier Ihre Schätzung ein, mit welcher monatlichen Gesamtsumme (ohne gesetzliche Rente) Sie rechnen. Lassen Sie bitte inflationsbedingte Steigerungen außen vor.',
            checkbox1: 'Private Rentenversicherungen',
            checkbox2: 'Geförderte Rentenversicherung (Riester, Rürup)',
            checkbox3: 'Mieteinnahmen/Pachteinnahmen',
            checkbox4: 'Zinsen/Dividende aus Kapital/Aktien',
            checkbox5: 'Sonstige Einkommen',
            sumLabel: 'Summe sonstiger Einnahmen in der Rente: '
        };

    return (
        <>
            <h2 className="p-20 md:p-10 pb-0 md:pb-0 text-[#c25115] text-2xl md:text-2xl lg:text-2xl font-fijala italic mb-6 flex md:block md:justify-start -ml-16 md:-ml-0">
                {text.title}
            </h2>

            <div className="text-textColor flex items-center justify-center min-h-[55vh] font-fijala p-4 md:ml-8">
                <div className="w-full max-w-3xl relative">
                    <div>
                        <div className="relative mt-12">
                            <h1 className="text-xl md:text-2xl italic text-[#c25115] mb-4 hover-trigger">
                                {text.title} (inflationsbereinigt)
                                <span className="inline-block ml-1 group">
                                    <span className="text-[#c25115] -top-3 ">
                                        <img src='/info-circle-svgrepo-com (1).svg' className='h-5 w-5 text-red-900' />
                                    </span>
                                    <div className="absolute -ml-20 sm:-ml-28 md:-ml-32 hidden group-hover:block bg-white border border border-orange-500 text-black text-sm rounded p-2 whitespace-normal lg:max-w-sm z-10">
                                        <p className='p-2'>
                                            <img src='/info-circle-svgrepo-com (1).svg' className='h-4 w-4 mb-2' />
                                            {text.infoText}
                                        </p>
                                    </div>
                                </span>
                            </h1>
                        </div>

                        <div className="grid grid-cols-1 gap-4 mb-6 text-[#c25115] md:ml-5 mb-5">
                            <label className="flex items-center space-x-3">
                                <input 
                                    type="checkbox" 
                                    value={text.checkbox1}
                                    checked={selectedValues.includes(text.checkbox1)}
                                    onChange={handleCheckboxChange}
                                    className="form-checkbox h-5 w-5 " 
                                />
                                <span>{text.checkbox1}</span>
                            </label>
                            <label className="flex items-center space-x-3">
                            <input 
                                type="checkbox" 
                                value={text.checkbox2} // Ensure value is based on the `text` object
                                checked={selectedValues.includes(text.checkbox2)} // Compare with translated text
                                onChange={handleCheckboxChange}
                                className="form-checkbox h-5 w-5 " 
                                    />
                                    <span>{text.checkbox2}</span>
                                </label>

                            <label className="flex items-center space-x-3">
                                <input 
                                    type="checkbox" 
                                    value={text.checkbox3}
                                    checked={selectedValues.includes(text.checkbox3)}
                                    onChange={handleCheckboxChange}
                                    className="form-checkbox h-5 w-5 " 
                                />
                                <span>{text.checkbox3}</span>
                            </label>
                            <label className="flex items-center space-x-3">
                                <input 
                                    type="checkbox" 
                                    value={text.checkbox4}
                                    checked={selectedValues.includes(text.checkbox4)}
                                    onChange={handleCheckboxChange}
                                    className="form-checkbox h-5 w-5 " 
                                />
                                <span>{text.checkbox4}</span>
                            </label>
                            <label className="flex items-center space-x-3">
                                <input 
                                    type="checkbox" 
                                    value={text.checkbox5}
                                    checked={selectedValues.includes(text.checkbox5)}
                                    onChange={handleCheckboxChange}
                                    className="form-checkbox h-5 w-5 " 
                                />
                                <span>{text.checkbox5}</span>
                            </label>
                        </div>

                        <h2 className="text-xl text-[#c25115] mb-4">
                            {text.sumLabel} {Number(income).toLocaleString('de-DE')} Euros p.M.
                        </h2>
                        <div className="mb-6">
                            <label className="block">
                                <input
                                    type="range"
                                    min="0"
                                    max="20000"
                                    value={income}
                                    onChange={handleRangeChange}
                                    className="appearance-none h-8 w-full max-w-xs md:max-w-48"
                                    style={{
                                        background: `linear-gradient(to right, #f2aa84 0%, #f2aa84 ${(income / 20000) * 100}%, #fbe3d6 ${(income / 20000) * 100}%, #fbe3d6 100%)`,
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

export default TestThirteen;
