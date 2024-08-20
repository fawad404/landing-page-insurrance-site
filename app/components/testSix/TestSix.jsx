import React from 'react'
import ComHeader from '../comHeader/ComHeader'

const TestSix = () => {
  return (
    <>
      <ComHeader />
      <h2 className="p-20 md:p-10 pb-0 md:pb-2 text-[#c04f15] text-xl md:text-2xl lg:text-3xl font-sans italic mb-6 flex md:block md:justify-start -ml-8 md:-ml-0">
        Eintrittsvoraussetzungen
      </h2>
      <div className="p-2  md:p-4 flex flex-col items-center">
        <div className="bg-white w-full max-w-4xl p-8 pt-0 md:p-20 md:pt-0 rounded-lg">
          <label className="text-[#c04f15] text-lg italic md:text-xl flex items-center justify-start relative">
            Gesundheitsstatus
            <span className="inline-block ml-1 group">
              <span className="text-orange-600 absolute -top-2 left-44">
                <img src='/info-circle-svgrepo-com (1).svg' className='h-5 w-5 text-red-900' />
              </span>
              <div className="-ml-44 md:-ml-8 absolute hidden group-hover:block bg-white border border border-orange-500 text-black text-sm rounded p-2 md:p-4 whitespace-normal z-10">
                <p>
                Beim Eintritt in die private Krankenversicherung erheben Versicherer Gesundheitsdaten.. Sie können im Antragsprozess bestimmen unter welchen Konditionen eine Annahme erfolgt. Bei Vorerkrankungen ist es möglich von Versichererseite Zuschläge zu verlangen oder den Antrag komplett abzulehnen. Der Gesundheitszustand und die Gesundheitshistorie bei Antragstellung ist aus diesem Grund ein wichtiger Faktor für die Beurteilung, ob die PKV eine Alternative darstellt. ​
                Wir können hier hier nur
                Tendenzen ableiten. Eine konkrete Einschätzung des Versicherers ist
                  erst nach einer vollständigen Beantwortung aller im Antrag vorliegenden Fragen möglich​.
                </p>
              </div>
            </span>
          </label>

          <label className="mt-6 text-[#c04f15] relative text-base md:text-xl flex flex-wrap items-center justify-start">
            <span className="flex-shrink-0 mb-4 sm:mb-0">Selbsteinschätzung Gesundheit:</span>
            <div className='flex flex-col'>
            <span className="text-xs ml-4 -mt-2">Sehr gesund</span>
            <input
                    type="text"
                    className="bg-[#f2aa84] ml-4  mr-4 text-lg text-white placeholder-white rounded-md border-none px-2 py-0 focus:outline-none focus:ring-2 focus:ring-[#c04f15] focus:ring-opacity-50 shadow-md w-full max-w-20 md:max-w-20"
                    placeholder=""
                />
            </div>
            <div className='flex flex-col'>
            <span className="text-xs ml-4 -mt-2">Sehr krank​</span>
            <input
                    type="text"
                    className="bg-[#f2aa84] ml-4  mr-4 text-lg text-white placeholder-white rounded-md border-none px-2 py-0 focus:outline-none focus:ring-2 focus:ring-[#c04f15] focus:ring-opacity-50 shadow-md w-full max-w-20 md:max-w-20"
                    placeholder=""
                />
            </div>
              </label>

          <label className="mt-6 text-[#c04f15] text-base md:text-xl flex items-center justify-start">
            Waren Sie in den letzten 5 Jahren in Behandlung: 
            <div className="ml-4 items-center">
              <label className="mr-4 text-xl">
                <input type="checkbox" className="form-checkbox h-4 w-4 text-[#c04f15] mr-1" />
                ja
              </label>
              <label className='text-xl'>
                <input type="checkbox" className="form-checkbox h-4 w-4 text-[#c04f15] mr-1" />
                nein
              </label>
            </div>
          </label>

          <label className="mt-4 text-[#c04f15] text-base md:text-xl flex items-center justify-start">
            Wenn Ja, welche Diagnosen
          </label>
          <div className="mt-2">
            <textarea
              className="mt-6 bg-[#f2aa84] text-lg text-white placeholder-white rounded-md border-none px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#c04f15] focus:ring-opacity-50 shadow-md w-full h-16"
              placeholder=""
            />
          </div>

        </div>
      </div>
    </>
  )
}

export default TestSix
