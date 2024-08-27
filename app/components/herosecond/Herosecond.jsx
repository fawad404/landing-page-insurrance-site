"use client"
import { useRouter } from 'next/navigation';
import React from 'react'

const Herosecond = () => {
  const router = useRouter();
  return (
    <>
    <header className="bg-[#f2aa84] flex justify-between items-center p-6 h-24 w-full">
</header>
    <section className="bg-white py-10 md:p-20 md:pt-0">
    <div className="w-full mx-auto flex flex-col md:flex-row items-center bg-white p-6 rounded-lg">
      <div className="md:w-3/5 md:p-10 ">
        <h2 className="text-[#c25115] font-semibold text-xl md:text-4xl mb-5 font-roboto-condensed-italic">
          Systemvergleich „PKV – GKV“
        </h2>
        <p className="text-[#ed8b55] font-semibold mb-5 text-sm md:text-xl font-canadara">
          Per Onlinemeeting schnell im Thema drin sein!
        </p>
        <p className="text-gray-700 mb-4 text-sm md:text-xl font-serif lg:w-4/5 ">
          Wir bieten einen umfangreichen Systemvergleich zwischen der
          gesetzlichen oder privaten Krankenversicherung per Onlineberatung.
          Wir stellen die wichtigen entscheidungsrelevanten Punkte in der
          Entscheidungsfindung gegenüber. Wir erläutern Ihnen die strukturellen
          Unterschiede, gehen auf die Beitragskalkulation beider Systeme ein und
          erörtern die wichtigen Punkte, wie Beitragsentwicklung,
          Familieninstitution, Rentenalter und Exitstrategien. Buchen Sie noch
          heute einen Termin!
        </p>
        <div className="flex justify-center mt-8">
  <button 
  onClick={()=> router.push('/termin-buchen')}
  className="bg-[#c25115] mb-2 md:mb-0 text-white px-6 text-base sm:px-10 md:px-16 py-3 sm:text-lg md:text-xl rounded-md hover:bg-orange-700 italic">
    Termin buchen
  </button>
</div>
      </div>
      <div className="md:w-1/3 flex justify-start md:justify-start mt-6 md:mt-0">
        <img
          src="/straight-a-landing-page-removebg-preview.png"
          alt="PKV - GKV Check"
          className="h-56 md:h-72 lg:h-96"
          />
      </div>
    </div>
  </section>
          </>
  )
}

export default Herosecond