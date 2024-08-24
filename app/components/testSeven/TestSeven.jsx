import React from 'react'
import ComHeader from '../comHeader/ComHeader'

const TestSeven = () => {
  return (
    <>
    
    <ComHeader />
    <h2 className="p-20 md:p-10 pb-0 md:pb-0 text-[#c25115] text-2xl md:text-2xl lg:text-2xl font-fijala italic mb-6 flex md:block md:justify-start -ml-12 md:-ml-0">
      Eintrittsvoraussetzungen
      </h2>
    <div className="text-textColor flex items-center min-h-[55vh] justify-center font-fijala">
 
        <div className="w-full max-w-3xl  p-6 relative">
   
            <div className="relative">
                <h1 className="text-2xl italic text-[#c25115]  mb-4 hover-trigger">Gesundheitsstatus
                <span className="inline-block ml-1 group">
            <span className="text-[#c25115] absolute -top-2 left-52">
                <img src='/info-circle-svgrepo-com (1).svg' className='h-5 w-5 text-red-900' />
              </span>
              <div className="-ml-52 mt-3 md:-ml-8 absolute hidden group-hover:block bg-white border border border-orange-500 text-black text-sm rounded p-2 whitespace-normal md:max-w-xs lg:max-w-sm z-10">
                <p className='p-2'>
                  <img src='/info-circle-svgrepo-com (1).svg' className='h-4 w-4 mb-2' />
                  Beim Eintritt in die private Krankenversicherung erheben Versicherer Gesundheitsdaten. Sie
                        können im Antragsprozess bestimmen, unter welchen Konditionen eine Annahme erfolgt. Bei
                        Vorerkrankungen ist es möglich, von Versichererseite Zuschläge zu verlangen oder den Antrag
                        komplett abzulehnen. Der Gesundheitszustand und die Gesundheitshistorie bei Antragstellung sind
                        aus diesem Grund wichtige Faktoren für die Beurteilung, ob die PKV eine Alternative darstellt.
                        Wir können hier nur Tendenzen ableiten. Eine konkrete Einschätzung des Versicherers ist erst
                        nach einer vollständigen Beantwortung aller im Antrag vorliegenden Fragen möglich.
                </p>
              </div>
            </span>
                </h1>
            </div>

            
            <h2 className="text-lg md:text-2xl text-[#c25115] mt-8 mb-8">Vorhandene Diagnosen/Behandlungen in den letzten 5
                Jahren</h2>

            
            <div className="grid grid-cols-1 md:grid-cols-2 text-lg  gap-4 mb-6 text-[#c25115]">
                <label className="flex checkbox-label gap-x-3 items-center">
                    <input type="checkbox" className="form-checkbox h-4 w-4 border-2 border-[#c04f15] focus:ring-orange-500" />
                    <span>Rückenschmerzen</span>
                </label>
                <label className="flex checkbox-label gap-x-3 items-center">
                    <input type="checkbox" className="form-checkbox h-4 w-4 text-[#c25115]" />
                    <span>Bandscheiben</span>
                </label>
                <label className="flex checkbox-label gap-x-3 items-center">
                    <input type="checkbox" className="form-checkbox h-4 w-4 text-[#c25115]" />
                    <span>Schilddrüsenerkrankung</span>
                </label>
                <label className="flex checkbox-label gap-x-3 items-center">
                    <input type="checkbox" className="form-checkbox h-4 w-4 text-[#c25115]" />
                    <span>Allergien</span>
                </label>
                <label className="flex checkbox-label gap-x-3 items-center">
                    <input type="checkbox" className="form-checkbox h-4 w-4 text-[#c25115]" />
                    <span>Asthma</span>
                </label>
                <label className="flex checkbox-label gap-x-3 items-center">
                    <input type="checkbox" className="form-checkbox h-4 w-4 text-[#c25115]" />
                    <span>Krebserkrankungen</span>
                </label>
                <label className="flex checkbox-label gap-x-3 items-center">
                    <input type="checkbox" className="form-checkbox h-4 w-4 text-[#c25115]" />
                    <span>Long COVID</span>
                </label>
                <label className="flex checkbox-label gap-x-3 items-center">
                    <input type="checkbox" className="form-checkbox h-4 w-4 text-[#c25115]" />
                    <span>Nieren/Lebererkrankungen</span>
                </label>
                <label className="flex checkbox-label gap-x-3 items-center">
                    <input type="checkbox" className="form-checkbox h-4 w-4 text-[#c25115]" />
                    <span>Diabetes</span>
                </label>
                <label className="flex checkbox-label gap-x-3 items-center">
                    <input type="checkbox" className="form-checkbox h-4 w-4 text-[#c25115]" />
                    <span>Psychotherapien</span>
                </label>
            </div>
        </div>
    </div>
    </>
  )
}

export default TestSeven