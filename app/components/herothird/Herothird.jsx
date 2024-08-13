import React from 'react'

const Herothird = () => {
  return (
<section className="bg-[#ffeae0] py-10 md:p-20">
  <div className="w-full mx-auto flex flex-col-reverse md:flex-row items-center bg-[#ffeae0a1] shadow-lg p-6 rounded-lg">
    <div className="lg:w-1/3 flex justify-start md:justify-start mt-6 md:mt-0">
      <img
        src="/a-landing-page-removebg-preview.png"
        alt="PKV - GKV Check"
        className="h-56 md:h-72 lg:h-96"
      />
    </div>
    <div className="md:w-3/5 md:p-10">
      <h2 className="text-orange-600 font-bold text-xl md:text-4xl mb-5 font-sans">
        Markt- und Tarifscheck
      </h2>
      <p className="text-orange-500 font-semibold mb-5 text-sm md:text-xl font-sans">
        Eine umfangreiche Markt- und Tarifgegenüberstellung per Onlinemeeting
      </p>
      <p className="text-gray-900 mb-4 text-sm md:text-xl font-serif">
        Sie haben sich bereits für die private Krankenversicherung entschieden, 
        wissen aber noch nicht welche Kriterien bei der Wahl der Anbieter und 
        Tarife zu berücksichtigen sind? Wir stellen Ihnen in einer 
        umfangreichen Präsentation die Besonderheiten des Marktes vor: 
        Übertragung von Rückstellungen, Tarifwechselrecht, 
        Unternehmenskennzahlen der Versicherer. Mit unserer 
        Maklersoftware können wir alle Tarife umfangreich miteinander 
        vergleichen und anhand Ihrer Prioritäten den optimalen Tarif 
        selektieren. Buchen Sie noch heute einen Termin.
      </p>
      <div className="flex justify-center mt-8">
        <button className="bg-orange-600 text-white px-6 py-2 rounded-md hover:bg-orange-700 italic">
          Termin buchen
        </button>
      </div>
    </div>
  </div>
</section>


  )
}

export default Herothird