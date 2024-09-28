"use client";
import '../testFourteen/testFourteen.css';
import React, { useEffect, useState } from 'react';

const TestFifteen = ({ data, onChange, language }) => {
    const [healthPercentageTwo, setHealthPercentageTwo] = useState(0); // Initial value set to 0%

    useEffect(() => {
        // Retrieve the value from localStorage when the component mounts
        const storedValue = localStorage.getItem('page15Range');
        if (storedValue) {
            setHealthPercentageTwo(storedValue);
        }
    }, []);

    const handleRangeChangeTwo = (event) => {
        const value = event.target.value;
        setHealthPercentageTwo(value);
        localStorage.setItem('page15Range', value);
        onChange('page15Range', value);
        console.log(healthPercentageTwo);
    };

    // Define the text for both languages
    const text = language === 'en' ? 
        {
            title: 'Personal Assessment of Contribution and Services in Healthcare',
            rangeDescription: 'For an improved range of services in health insurance, I am willing to pay more in private insurance than in statutory insurance',
            rangeLabel: 'Importance Level',
            rangeLabel1: 'Importance Level',
        } 
        : 
        {
            title: 'Persönliche Einschätzung zu Beitrag und Leistungen im Gesundheitswesen',
            rangeDescription: 'Für ein verbessertes Leistungsspektrum in der Krankenversicherung bin ich bereit in der Privaten auch mehr zu zahlen, als in der Gesetzlichen',
            rangeLabel: 'bin nicht bereit',
            rangeLabel1: 'bin bereit'
        };

    return (
        <>
           
            <h2 className="p-20 md:p-10 pb-0 md:pb-0 text-[#c25115] text-xl md:text-2xl lg:text-2xl font-fijala italic mb-6 flex md:block md:justify-start -ml-12 md:-ml-0">
                {text.title}
            </h2>
            <div className="text-textColor flex items-center justify-center min-h-[55vh] font-fijala p-8 md:-mt-12 lg:-mt-20">
                <div className="w-full max-w-3xl bg-white relative">
                    <h2 className="text-2xl mb-6 text-[#c25115]">
                        {text.rangeDescription}
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
        </>
    );
};

export default TestFifteen;
