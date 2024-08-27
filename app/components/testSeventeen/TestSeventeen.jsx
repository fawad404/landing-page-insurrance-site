"use client"
import React from 'react'
import ComHeader from '../comHeader/ComHeader'
import { useRouter } from 'next/navigation'

const TestSeventeen = () => {
  const router = useRouter();
  return (
    <>
    <ComHeader />

      <div class="text-textColor flex items-center justify-center min-h-[55vh] font-fijala p-4 mt-12 md:mt-8  md:ml-8">
        <div class="w-full max-w-5xl relative">
        <div className="relative">
                <h1 className="text-xl md:text-2xl italic text-[#c25115] hover-trigger">
                Vielen Dank!​
                </h1>
                <h1 className="text-xl md:text-2xl  text-[#c25115] mb-12 hover-trigger">
                    Wir haben Ihre Daten erhalten und werden Ihnen in den nächsten Tagen unsere Ausarbeitung zusenden.</h1>
                    <h1 className="text-xl md:text-2xl  text-[#c25115] mb-8 hover-trigger">
                    Einfacher ist es, wenn Ihnen unser Facharbeiter die Ausarbeitung erläutert und Ihnen noch wichtige Hintergrundinformationen zu den Themenbereichen gibt.
                    </h1>
                    <h1 className="text-xl md:text-2xl  text-[#c25115] mb-4 hover-trigger">
                    Buchen Sie einfach einen persönlichen Termin
                    </h1>
                    <div className="flex justify-start md:ml-20 mt-16">
                      <button 
                      onClick={()=> router.push('/termin-buchen')}
                      className="bg-[#c25115] mb-2 md:mb-0 text-white px-6 text-base sm:px-10 md:px-12 py-3 sm:text-lg md:text-xl rounded-md hover:bg-orange-700 italic">
                        Termin buchen
                      </button>
                    </div>
            </div>
            </div>
            </div>
            
            </>
  )
}

export default TestSeventeen