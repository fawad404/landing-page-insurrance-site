"use client";
import '../testFourteen/testFourteen.css';
import React, { useEffect, useState } from 'react';

// Define texts for each language
const languageTexts = {
  de: {
    healthStatusLabel: 'Ihre Mitteilung an uns',
    healthStatusTooltip: 'Sie wollen noch etwas ergänzen oder uns Ihren speziellen Sachverhalt übermitteln? Sie haben noch Fragen an uns? Nutzen Sie dieses Formularfeld!',
  },
  en: {
    healthStatusLabel: 'Health status',
    healthStatusTooltip: 'Would you like to add something else or share your specific situation with us? Do you have any further questions for us?',
  }
};

const TestEighteen = ({ data, language = 'de', onChange }) => {
  const [selectedText, setSelectedText] = useState('');

  useEffect(() => {
    // Retrieve the value from localStorage when the component mounts
    const storedText = localStorage.getItem('page18Text');
    if (storedText) {
      setSelectedText(storedText);
    }
  }, []);

  const handleTextArea = (event) => {
    const value = event.target.value;
    setSelectedText(value);
    localStorage.setItem('page18Text', value);
    onChange('page18Text', value);
    console.log(`Selected: ${value}`);
  };

  // Get text based on the selected language
  const texts = languageTexts[language] || languageTexts['de'];

  return (
    <>
     

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
                  <div className="-ml-20 mt-3 md:-ml-8 absolute hidden group-hover:block bg-white border border-orange-500 text-black text-sm rounded p-2 whitespace-normal md:max-w-xs lg:max-w-sm z-10">
                    <p className='p-2'>
                      <img src='/info-circle-svgrepo-com (1).svg' className='h-4 w-4 mb-2' />
                      {texts.healthStatusTooltip}
                    </p>
                  </div>
                </span>
              </h1>
            </div>

            
            <div className="mt-2">
              <textarea
                value={selectedText || ''}
                onChange={handleTextArea}
                className="mt-6 bg-[#fbe3d6] text-lg text-gray-900 placeholder-white rounded-md border-none px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#c04f15] focus:ring-opacity-50 w-full h-24 md:h-48"
                placeholder=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestEighteen;
