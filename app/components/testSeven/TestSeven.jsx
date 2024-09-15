"use client";
import React, { useEffect, useState } from 'react';

// Define texts for each language
const languageTexts = {
  de: {
    title: 'Eintrittsvoraussetzungen',
    healthStatusLabel: 'Gesundheitsstatus',
    healthStatusTooltip: 'Beim Eintritt in die private Krankenversicherung erheben Versicherer Gesundheitsdaten. Sie können im Antragsprozess bestimmen, unter welchen Konditionen eine Annahme erfolgt. Bei Vorerkrankungen ist es möglich, von Versichererseite Zuschläge zu verlangen oder den Antrag komplett abzulehnen. Der Gesundheitszustand und die Gesundheitshistorie bei Antragstellung sind aus diesem Grund wichtige Faktoren für die Beurteilung, ob die PKV eine Alternative darstellt. Wir können hier nur Tendenzen ableiten. Eine konkrete Einschätzung des Versicherers ist erst nach einer vollständigen Beantwortung aller im Antrag vorliegenden Fragen möglich.',
    existingDiagnosesLabel: 'Vorhandene Diagnosen/Behandlungen in den letzten 5 Jahren',
    diagnoses: [
      'Rückenschmerzen',
      'Bandscheibenvorfall',
      'Schilddrüsenerkrankung',
      'Allergien',
      'Asthma',
      'Krebserkrankungen',
      'Long COVID',
      'Nieren/Lebererkrankungen',
      'Diabetes',
      'Psychotherapien'
    ]
  },
  en: {
    title: 'Entry requirements',
    healthStatusLabel: 'Health status',
    healthStatusTooltip: 'When you join a private health insurance company, insurers collect health data. During the application process, you can determine under which conditions acceptance will take place. In the case of pre-existing medical conditions, the insurer may charge a surcharge or reject the application completely. For this reason, the state of health and health history at the time of application is an important factor in assessing whether private health insurance is an alternative. We can only derive tendencies here. A concrete assessment of the insurer is only possible after all questions in the application have been fully answered.',
    existingDiagnosesLabel: 'Existing diagnoses/treatments in the last 5 years',
    diagnoses: [
      'Back pain',
      'Herniated disc',
      'Thyroid disease',
      'Allergies',
      'Asthma',
      'Cancer',
      'Long COVID',
      'Kidney/Liver diseases',
      'Diabetes',
      'Psychotherapies'
    ]
  }
};

const TestSeven = ({ data, language = 'de', onChange }) => {
    const [selectedValues, setSelectedValues] = useState([]);

    useEffect(() => {
        // Retrieve the value from localStorage when the component mounts
        const storedValue = localStorage.getItem('page7');
        if (storedValue) {
          // Split the stored value by commas and convert it to an array
          const arrayValues = storedValue.split(',');
          setSelectedValues(arrayValues);
        }
      }, []);

    const handleChange = (event) => {
        const value = event.target.value;
        let updatedValues = [...selectedValues];
        
        if (event.target.checked) {
            updatedValues.push(value);
        } else {
            updatedValues = updatedValues.filter((item) => item !== value);
        }

        setSelectedValues(updatedValues);
        onChange('page7', updatedValues);
        localStorage.setItem('page7', updatedValues.join(','));
    };

    // Get text based on the selected language
    const texts = languageTexts[language] || languageTexts['de'];

    return (
        <>
            <h2 className="p-20 md:p-10 pb-0 md:pb-0 text-[#c25115] text-2xl md:text-2xl lg:text-2xl font-fijala italic mb-6 flex md:block md:justify-start -ml-12 md:-ml-0">
                {texts.title}
            </h2>
            <div className="text-textColor flex items-center min-h-[55vh] justify-center font-fijala">
                <div className="w-full max-w-3xl p-6 relative">
                    <div className="relative">
                        <h1 className="text-2xl italic text-[#c25115] mb-4 hover-trigger">
                            {texts.healthStatusLabel}
                            <span className="inline-block ml-1 group">
                                <span className="text-[#c25115] absolute -top-2 left-52">
                                    <img src='/info-circle-svgrepo-com (1).svg' className='h-5 w-5 text-red-900' />
                                </span>
                                <div className="-ml-52 mt-3 md:-ml-8 absolute hidden group-hover:block bg-white border border border-orange-500 text-black text-sm rounded p-2 whitespace-normal md:max-w-xs lg:max-w-sm z-10">
                                    <p className='p-2'>
                                        <img src='/info-circle-svgrepo-com (1).svg' className='h-4 w-4 mb-2' />
                                        {texts.healthStatusTooltip}
                                    </p>
                                </div>
                            </span>
                        </h1>
                    </div>
                    <h2 className="text-lg md:text-2xl text-[#c25115] mt-8 mb-8">
                        {texts.existingDiagnosesLabel}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 text-lg gap-4 mb-6 text-[#c25115]">
                        {texts.diagnoses.map((diagnosis) => (
                            <label key={diagnosis} className="flex checkbox-label gap-x-3 items-center">
                                <input
                                    type="checkbox"
                                    value={diagnosis}
                                    checked={selectedValues.includes(diagnosis)}
                                    onChange={handleChange}
                                    className="form-checkbox h-4 w-4 text-[#c25115] border-2 border-[#c04f15] focus:ring-orange-500"
                                />
                                <span>{diagnosis}</span>
                            </label>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default TestSeven;
