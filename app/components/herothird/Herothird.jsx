"use client"
import { useRouter } from 'next/navigation';
import React from 'react'

const Herothird = ({language}) => {
  const router = useRouter();
  return (
<section className="bg-[#fae0d2] py-10 md:p-20 md:pb-0 md:pt-0">
  <div className="w-full mx-auto flex flex-col-reverse md:flex-row items-center bg-[#fae0d2]  p-6 pb-2 pt-2 rounded-lg">
    <div className="lg:w-1/3 flex justify-start md:justify-start mt-6 md:mt-0">
      
    </div>
    <div className="md:w-3/5 md:p-10">
      <h2 className="text-[#c25115] font-bold text-xl md:text-4xl mb-5 font-sans">
      {language === 'de' ? 
            'Markt- und Tarifscheck' 
            : 
            'Market and tariff check'
            }
        
      </h2>
      <p className="text-[#ed8b55] font-semibold mb-5 text-sm md:text-xl font-sans">
      {language === 'de' ? 
            'Eine umfangreiche Markt- und Tarifgegenüberstellung per Onlinemeeting' 
            : 
            'A comprehensive market and tariff comparison via online meeting'
            }
        
      </p>
      <p className="text-gray-900 mb-4 text-sm md:text-xl font-serif">
      {language === 'de' ? 
            'Sie haben sich bereits für die private Krankenversicherung entschieden, wissen aber noch nicht welche Kriterien bei der Wahl der Anbieter und Tarife zu berücksichtigen sind? Wir stellen Ihnen in einer umfangreichen Präsentation die Besonderheiten des Marktes vor: Übertragung von Rückstellungen, Tarifwechselrecht, Unternehmenskennzahlen der Versicherer. Mit unserer Maklersoftware können wir alle Tarife umfangreich miteinander vergleichen und anhand Ihrer Prioritäten den optimalen Tarif selektieren. Buchen Sie noch heute einen Termin.' 
            : 
            'You have already decided on private health insurance but are not yet sure which criteria to consider when choosing companies and tariffs? We will present the specifics of the market in a comprehensive presentation: transfer of reserves, rights to change tariffs, and company key figures of the insurers. With our brokerage software, we can extensively compare all tariffs and select the optimal one based on your priorities. Schedule an appointment today."'
            }
        
      </p>
      <div className="flex justify-center mt-8">
        <button 
        onClick={()=> router.push(`/termin-buchen?language=${language}`)}
        className="bg-[#c25115] mb-2 md:mb-0 text-white px-6 text-base sm:px-10 md:px-16 py-3 sm:text-lg md:text-xl rounded-md hover:bg-orange-700 italic">
          {language === 'de' ? 
            'Termin buchen' 
            : 
            'Book an onlinemeeting'
            }
          
        </button>
      </div>
    </div>
  </div>
</section>


  )
}

export default Herothird