"use client";
import React from 'react';
import ComHeader from '../comHeader/ComHeader';
import { useRouter } from 'next/navigation';
import { translations } from '../../utilis/thankyouTranslations'; // Adjust the path according to your project structure

const TestSeventeen = ({ language }) => {
  const router = useRouter();
  const t = translations[language] || translations.en;

  return (
    <>
      <ComHeader language={language} />

      <div className="text-textColor flex items-center justify-center min-h-[55vh] font-fijala p-4 mt-12 md:mt-8 md:ml-8">
        <div className="w-full max-w-5xl relative">
          <div className="relative">
            <h1 className="text-xl md:text-2xl italic text-[#c25115] hover-trigger">
              {t.thankYou}
            </h1>
            <h1 className="text-xl md:text-2xl text-[#c25115] mb-12 hover-trigger">
              {t.dataReceived}
            </h1>
            <h1 className="text-xl md:text-2xl text-[#c25115] mb-8 hover-trigger">
              {t.explanationOffer}
            </h1>
            <h1 className="text-xl md:text-2xl text-[#c25115] mb-4 hover-trigger">
              {t.bookAppointment}
            </h1>
            <div className="flex justify-start md:ml-20 mt-16">
              <button
                onClick={() => router.push(`/termin-buchen?language=${language}`)}
                className="bg-[#c25115] mb-2 md:mb-0 text-white px-6 text-base sm:px-10 md:px-12 py-3 sm:text-lg md:text-xl rounded-md hover:bg-orange-700 italic"
              >
                {t.bookButton}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestSeventeen;
