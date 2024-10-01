"use client";
import '../testFourteen/testFourteen.css';
import React, { useEffect, useState } from 'react';

// Define texts for each language
const languageTexts = {
  de: {
    title: 'Eintrittsvoraussetzungen',
    healthStatusLabel: 'Gesundheitsstatus',
    healthStatusTooltip: 'Beim Eintritt in die private Krankenversicherung erheben Versicherer Gesundheitsdaten.. Sie können im Antragsprozess bestimmen unter welchen Konditionen eine Annahme erfolgt. Bei Vorerkrankungen ist es möglich von Versichererseite Zuschläge zu verlangen oder den Antrag komplett abzulehnen. Der Gesundheitszustand und die Gesundheitshistorie bei Antragstellung ist aus diesem Grund ein wichtiger Faktor für die Beurteilung, ob die PKV eine Alternative darstellt. ​Wir können hier nur Tendenzen ableiten. Eine konkrete Einschätzung des Versicherers ist erst nach einer vollständigen Beantwortung aller im Antrag vorliegenden Fragen möglich​.',
    selfAssessmentLabel: 'Selbsteinschätzung Gesundheit:',
    Körpergröße: 'Körpergröße',
    Gewicht: 'Gewicht',
    verySick: 'sehr krank',
    veryHealthy: 'sehr gesund',
    treatedInLast5Years: 'Waren Sie in den letzten 5 Jahren wegen Rückenschmerzen Bandscheibenvorfall, Schilddrüsenerkrankung, Allergien, Asthma, Krebserkrankungen, Longcovid, Nieren/Lebererkrankungen, Diabetes oder anderen Erkankungen in Behandlung oder haben Psychotherapien Stattgefunden?',
    yes: 'ja',
    no: 'nein',
  },
  en: {
    title: 'Entry requirements',
    healthStatusLabel: 'Health status',
    healthStatusTooltip: 'Have you been treated for the following diagnoses in the last 5 years: Intervertebral disc, back pain, allergies, asthma, long covid, kidney disease, liver disease, cardiovascular disease, cancer, diabetes, psychotherapy or other treatments',
    selfAssessmentLabel: 'Self-assessment of health:',
    Körpergröße: 'Height',
    Gewicht: 'Weight',
    verySick: 'very sick',
    veryHealthy: 'very healthy',
    treatedInLast5Years: 'Have you been treated for the following diagnoses in the last 5 years: Intervertebral disc, back pain, allergies, asthma, long covid, kidney disease, liver disease, cardiovascular disease, cancer, diabetes, psychotherapy or other treatments',
    yes: 'yes',
    no: 'no',
  }
};

const TestSix = ({ data, language = 'de', onChange }) => {
  const [healthPercentage, setHealthPercentage] = useState(0); 
  const [healthPercentage2, setHealthPercentage2] = useState(0);
  const [healthPercentage3, setHealthPercentage3] = useState(0);
  const [selectedValue, setSelectedValue] = useState('');
  const [selectedText, setSelectedText] = useState('');
  const [textarea, setTextArea] = useState('');

  useEffect(() => {
    // Retrieve the value from localStorage when the component mounts
    const storedValue = localStorage.getItem('page6');
    if (storedValue) {
      setSelectedValue(storedValue);
    }
    const storedValueRange = localStorage.getItem('page6Range');
    if (storedValueRange) {
      setHealthPercentage(storedValueRange);
    }
    const storedValueRange2 = localStorage.getItem('page6Range2');
    if (storedValueRange2) {
      setHealthPercentage2(storedValueRange2);
    }
    const storedValueRange3 = localStorage.getItem('page6Range3');
    if (storedValueRange3) {
      setHealthPercentage3(storedValueRange3);
    }
    const storedValueText = localStorage.getItem('page6Text');
    if (storedValueText) {
      setTextArea(storedValueText);
      setSelectedText(storedValueText);
    }
  }, []);

  const handleChange = (event) => {
    const value = event.target.value;
    setSelectedValue(value);
    localStorage.setItem('page6', value);
    onChange('page6', value);
    console.log(`Waren Sie in den letzten 5 Jahren in Behandlung: ${value}`);
  };

  const handleRangeChange = (event) => {
    const value = event.target.value;
    setHealthPercentage(value);
    localStorage.setItem('page6Range', value);
    onChange('page6Range', value);
    console.log(value);
  };
  const handleRangeChange2 = (event) => {
    const value = event.target.value;
    setHealthPercentage2(value);
    localStorage.setItem('page6Range2', value);
    onChange('page6Range2', value);
    console.log(value);
  };

  const handleRangeChange3 = (event) => {
    const value = event.target.value;
    setHealthPercentage3(value);
    localStorage.setItem('page6Range3', value);
    onChange('page6Range3', value);
    console.log(value);
  };

  const handleTextArea = (event) => {
    const value = event.target.value;
    setSelectedText(value);
    localStorage.setItem('page6Text', value);
    onChange('page6Text', value);
    console.log(`Selected: ${value}`);
  };

  // Get text based on the selected language
  const texts = languageTexts[language] || languageTexts['de'];

  return (
    <>
      <h2 className="p-20 md:p-10 pb-0 md:pb-0 text-[#c25115] text-2xl md:text-2xl lg:text-2xl font-fijala italic mb-6 flex md:block md:justify-start -ml-16 md:-ml-0">
        {texts.title}
      </h2>

      <div className="text-textColor flex items-center justify-center min-h-[55vh] font-fijala p-4 md:ml-8">
        <div className="w-full max-w-3xl relative">
          <div>
            <div className="relative mb-5">
              <h1 className="text-xl md:text-2xl italic text-[#c25115] mb-4 hover-trigger">
                {texts.healthStatusLabel}
                <span className="inline-block ml-1 group">
                  <span className="text-[#c25115] absolute -top-1 left-84">
                    <img src='/info-circle-svgrepo-com (1).svg' className='h-5 w-5 text-red-900' />
                  </span>
                  <div className="-ml-20 mt-6 md:-ml-8 absolute hidden group-hover:block bg-white border border-orange-500 text-black text-sm rounded p-2 whitespace-normal md:max-w-xs lg:max-w-sm z-10">
                    <p className='p-2'>
                      <img src='/info-circle-svgrepo-com (1).svg' className='h-4 w-4 mb-2' />
                      {texts.healthStatusTooltip}
                    </p>
                  </div>
                </span>
              </h1>
            </div>

            <label className="mt-6 mb-6 text-[#c25115] relative text-base md:text-xl flex flex-col md:flex-row items-center justify-between w-full">
              <span className="flex-shrink-0 mb-4 md:mt-5 md:mb-0">
                {texts.selfAssessmentLabel}
              </span>
              <div className="flex flex-col w-full md:w-1/2 mx-4">
                <div className="flex justify-between text-xs italic">
                  <span>{texts.verySick}</span>
                  <span>{texts.veryHealthy}</span>
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
                    WebkitAppearance: 'none', // Ensure the custom style applies on WebKit browsers
                    MozAppearance: 'none', // Ensure the custom style applies on Mozilla browsers
                    msAppearance: 'none' // Ensure the custom style applies on MS browsers
                  }}
                />
              </div>
              <span className="text-base md:text-xl mt-4 md:mt-5">{healthPercentage}%</span>
            </label>

            <label className="mt-6 text-[#c25115] mt-4 text-base md:text-xl">
              {texts.treatedInLast5Years}
              <div className="mt-2 items-center">
                <label className="mr-4 text-xl">
                  <input
                    type="checkbox"
                    value="ja"
                    checked={selectedValue === 'ja'}
                    onChange={handleChange}
                    className="form-checkbox h-4 w-4 text-[#c25115] mr-1"
                  />
                  {texts.yes}
                </label>
                <label className='text-xl'>
                  <input
                    type="checkbox"
                    value="nein"
                    checked={selectedValue === 'nein'}
                    onChange={handleChange}
                    className="form-checkbox h-4 w-4 text-[#c25115] mr-1"
                  />
                  {texts.no}
                </label>
              </div>
            </label>

           
            <div className='flex flex-col md:flex-row items-center justify-between'>

            <label className="mt-6 text-[#c25115] relative text-base md:text-xl flex flex-row items-center justify-between w-full">
                    {texts.Körpergröße}
                    <input
                      type="range"
                      min="0"
                      max="220"
                      value={healthPercentage2}
                      onChange={handleRangeChange2}
                      className="mt-2 ml-3 mr-3 appearance-none h-8 w-[45%] bg-[#f2aa84]"
                      style={{
                        accentColor: '#f2aa84',
                        background: `linear-gradient(to right, #f2aa84 0%, #f2aa84 ${(healthPercentage2 / 220) * 100}%, #fbe3d6 ${(healthPercentage2 / 220) * 100}%, #fbe3d6 100%)`,
                        WebkitAppearance: 'none',
                        MozAppearance: 'none',
                        msAppearance: 'none'
                      }}
                    />
                    <span className="text-base md:text-lg">
                      {Number(healthPercentage2).toLocaleString('de-DE')} cm
                    </span>
                  </label>

            <label className="mt-6 ml-6 text-[#c25115] relative text-base md:text-xl flex flex-row items-center justify-between w-full">
                  {texts.Gewicht}
                  <input
                  type="range"
                  min="0"
                  max="200"
                  value={healthPercentage3}
                  onChange={handleRangeChange3}
                  className="mt-2 ml-0 mr-0 appearance-none h-8 w-[60%] bg-[#f2aa84]"
                  style={{
                    accentColor: '#f2aa84',
                    background: `linear-gradient(to right, #f2aa84 0%, #f2aa84 ${(healthPercentage3 / 200) * 100}%, #fbe3d6 ${(healthPercentage3 / 200) * 100}%, #fbe3d6 100%)`,
                    WebkitAppearance: 'none', // Ensure the custom style applies on WebKit browsers
                    MozAppearance: 'none', // Ensure the custom style applies on Mozilla browsers
                    msAppearance: 'none' // Ensure the custom style applies on MS browsers
                  }}
                />
              <span className="text-base md:text-lg">{Number(healthPercentage3).toLocaleString('de-DE')} kg</span>
            </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestSix;
