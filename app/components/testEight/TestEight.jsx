"use client";
import React, { useEffect, useState } from 'react';

// Define texts for each language
const languageTexts = {
  de: {
    familyPlanningTitle: 'Lebensplanung',
    lifePartnershipPlanningTitle: 'Lebenspartnerschaftsplanung',
    lifePartnershipPlanningTooltip: 'Ob Kinder oder der Partner privat krankenversichert werden müssen ist auch abhängig, ob eine Ehe oder nur eine Lebensgemeinschaft vorliegt.',
    lifePartnershipOptions: [
      'Ich bin verheiratet oder möchte irgendwann heiraten',
      'Ich möchte in einer Partnerschaft ohne Heirat leben bzw. ich bleibe Single'
    ],
    childPlanningTitle: 'Kinderplanung',
    childPlanningTooltip: 'Die private Krankenversicherung ist eine Risikoversicherung. Hinzuversichernde Kinder bedeuten einen zusätzlichen Beitrag, während in der GKV i.d.R. die Kinder familienversichert sind. Für eine langfristige Kosteneinschätzung sind deshalb die Zahl der bereits vorhandenen aber auch zukünftigen Kinder von zentraler Bedeutung.',
    childPlanningOptions: [
      'Ich habe keine Kinder und möchte keine Kinder',
      'Ich möchte insgesamt ein Kind',
      'Ich möchte insgesamt 2 Kinder',
      'Ich möchte insgesamt 3 Kinder',
      'Ich möchte insgesamt 4 oder mehr Kinder'
    ]
  },
  en: {
    familyPlanningTitle: 'Family planning',
    lifePartnershipPlanningTitle: 'Life partnership planning',
    lifePartnershipPlanningTooltip: 'Whether children are to be insured or are entitled to family insurance in the public health insurance scheme also depends on whether the couple is married or just living together.',
    lifePartnershipOptions: [
      'I am married or would like to get married at some point',
      'I want to live in a partnership without marriage or I want to remain single'
    ],
    childPlanningTitle: 'Child planning',
    childPlanningTooltip: 'Private health insurance is risk insurance. Additional children mean an additional premium, whereas in public health insurance, children are generally covered by family insurance. The number of existing and future children is therefore of central importance for a long-term cost estimate.',
    childPlanningOptions: [
      'I have no children and do not want children',
      'I want one child',
      'I want two children',
      'I want three children',
      'I want 4 or more children'
    ]
  }
};

const TestEight = ({ data, language = 'de', onChange }) => {
    const [selectedValue, setSelectedValue] = useState('');
    const [selectedValueTwo, setSelectedValueTwo] = useState('');

    useEffect(() => {
        // Retrieve the value from localStorage when the component mounts
        const storedValue = localStorage.getItem('page8');
        if (storedValue) {
            setSelectedValue(storedValue);
        }
        const storedValueTwo = localStorage.getItem('page8Two');
        if (storedValueTwo) {
            setSelectedValueTwo(storedValueTwo);
        }
    }, []);

    const handleChange = (event) => {
        const value = event.target.value;
        setSelectedValue(value);
        localStorage.setItem('page8', value);
        onChange('page8', value);
        console.log(`${value}`);
    };

    const handleChangeTwo = (event) => {
        const value = event.target.value;
        setSelectedValueTwo(value);
        localStorage.setItem('page8Two', value);
        onChange('page8Two', value);
        console.log(`${value}`);
    };

    // Get text based on the selected language
    const texts = languageTexts[language] || languageTexts['de'];

    return (
        <>
            <h2 className="p-20 md:p-10 pb-0 md:pb-0 text-[#c25115] text-2xl md:text-2xl font-fijala lg:text-2xl italic mb-6 flex md:block md:justify-start -ml-16 md:-ml-0">
                {texts.familyPlanningTitle}
            </h2>

            <div className="flex items-center justify-center min-h-[55vh] p-4 font-fijala md:ml-8">
                <div className="w-full max-w-3xl relative">
                    <div>
                        <div className="relative mb-5">
                            <h1 className="text-xl md:text-2xl italic text-[#c25115] mb-4 hover-trigger">
                                {texts.lifePartnershipPlanningTitle}
                                <span className="inline-block ml-1 group">
                                    <span className="text-[#c25115] absolute -top-1 left-84">
                                        <img src='/info-circle-svgrepo-com (1).svg' className='h-5 w-5 text-red-900' />
                                    </span>
                                    <div className="-ml-64 mt-3 md:-ml-8 absolute hidden group-hover:block bg-white border border border-orange-500 text-black text-sm rounded p-2 whitespace-normal md:max-w-xs lg:max-w-sm z-10">
                                        <p className='p-2'>
                                            <img src='/info-circle-svgrepo-com (1).svg' className='h-4 w-4 mb-2' />
                                            {texts.lifePartnershipPlanningTooltip}
                                        </p>
                                    </div>
                                </span>
                            </h1>
                        </div>

                        <div className="grid grid-cols-1 gap-4 mb-6 text-[#c25115] md:ml-5 mb-5">
                            {texts.lifePartnershipOptions.map(option => (
                                <label key={option} className="flex items-center space-x-3">
                                    <input
                                        type="checkbox"
                                        value={`Lebenspartnerschaftsplanung: ${option}`}
                                        checked={selectedValue === `Lebenspartnerschaftsplanung: ${option}`}
                                        onChange={handleChange}
                                        className="form-checkbox h-5 w-5"
                                    />
                                    <span>{option}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div>
                        <div className="relative mt-12">
                            <h1 className="text-2xl italic text-[#c25115] mb-4 hover-trigger">
                                {texts.childPlanningTitle}
                                <span className="inline-block ml-1 group">
                                    <span className="text-[#c25115] absolute -top-1 left-40">
                                        <img src='/info-circle-svgrepo-com (1).svg' className='h-5 w-5 text-red-900' />
                                    </span>
                                    <div className="-ml-20 mt-3 md:-ml-8 absolute hidden group-hover:block bg-white border border border-orange-500 text-black text-sm rounded p-2 whitespace-normal md:max-w-xs lg:max-w-sm z-10">
                                        <p className='p-2'>
                                            <img src='/info-circle-svgrepo-com (1).svg' className='h-4 w-4 mb-2' />
                                            {texts.childPlanningTooltip}
                                        </p>
                                    </div>
                                </span>
                            </h1>
                        </div>

                        <div className="grid grid-cols-1 gap-4 mb-6 text-[#c25115] md:ml-5 mb-5">
                            {texts.childPlanningOptions.map(option => (
                                <label key={option} className="flex items-center space-x-3">
                                    <input
                                        type="checkbox"
                                        value={`Kinderplanung: ${option}`}
                                        checked={selectedValueTwo === `Kinderplanung: ${option}`}
                                        onChange={handleChangeTwo}
                                        className="form-checkbox h-5 w-5"
                                    />
                                    <span>{option}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TestEight;
