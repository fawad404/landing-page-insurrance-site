"use client";
import './testFourteen.css';
import React, { useEffect, useState } from 'react';

const TestFourteen = ({ data, onChange, language }) => {
    const [healthPercentage, setHealthPercentage] = useState(0); // Initial value set to 0%
    const [healthPercentageTwo, setHealthPercentageTwo] = useState(0); // Initial value set to 0%

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
        setHealthPercentage(value);
        localStorage.setItem('page14Range', value);
        onChange('page14Range', value);
        console.log(healthPercentage);
    };

    const handleRangeChangeTwo = (event) => {
        const value = event.target.value;
        setHealthPercentageTwo(value);
        localStorage.setItem('page14RangeTwo', value);
        onChange('page14RangeTwo', value);
        console.log(healthPercentageTwo);
    };

    // Define the text for both languages
    const text = language === 'en' ? 
        {
            title: 'Personal Assessment of Possible Additional Costs in Private Health Insurance',
            importantText1: 'Services not fully covered by statutory insurance are very important to me (e.g., dental prosthetics, alternative medicine, glasses, private patient in hospital, etc)!',
            importantText2: 'Quick appointment scheduling (e.g., specialists, MRI, etc) is very important to me!',
            rangeLabel1: 'very important',
            rangeLabel: 'not important',
        } 
        : 
        {
            title: 'Persönliche Einschätzung zu möglichen Mehrkosten in der PKV',
            importantText1: 'Leistungen, die die Gesetzliche nicht komplett abdeckt, sind mir sehr wichtig (z.B. Zahnersatz, alternative Medizin, Brille, Privatpatient im Krankenhaus, etc)!',
            importantText2: 'Schnelle Terminvergabe (z.B. Fachärzte, MRT, etc) ist mir sehr wichtig!',
            rangeLabel: 'weniger wichtig',
            rangeLabel1: 'sehr wichtig'
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
                                {text.importantText1}
                            </h1>
                        </div>

                        <label className="mt-6 text-[#c25115] relative text-base md:text-xl flex flex-col md:flex-row items-center w-full">
                            <div className="flex flex-col w-full md:w-1/2 mx-4">
                                <div className="flex justify-between text-xs">
                                    <span>{text.rangeLabel} (0%)</span>
                                    <span>{text.rangeLabel1} (100%)</span>
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
                                        WebkitAppearance: 'none',
                                        MozAppearance: 'none',
                                        msAppearance: 'none'
                                    }}
                                />
                            </div>
                            <span className="text-base md:text-xl mt-4 md:mt-0">{healthPercentage}%</span>
                        </label>

                        <h2 className="text-2xl mb-8 text-[#c25115] mt-16">
                            {text.importantText2}
                        </h2>

                        <label className="mt-6 text-[#c25115] relative text-base md:text-xl flex flex-col md:flex-row items-center w-full">
                            <div className="flex flex-col w-full md:w-1/2 mx-4">
                                <div className="flex justify-between text-xs">
                                    <span>{text.rangeLabel} (0%)</span>
                                    <span>{text.rangeLabel1} (100%)</span>
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
                                        WebkitAppearance: 'none',
                                        MozAppearance: 'none',
                                        msAppearance: 'none'
                                    }}
                                />
                            </div>
                            <span className="text-base md:text-xl mt-4 md:mt-0">{healthPercentageTwo}%</span>
                        </label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TestFourteen;
