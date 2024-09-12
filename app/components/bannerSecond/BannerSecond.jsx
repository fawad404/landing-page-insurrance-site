import Featured from '@/app/featured/Featured'
import React from 'react'

const BannerSecond = () => {
  return (
    <>
      <Featured />
      <section className="bg-white py-10 md:p-20 md:pb-0 md:pt-0">
        <div className="w-full mx-auto flex flex-col md:flex-row items-start bg-white p-6 rounded-lg">
          <div className="md:w-4/12 md:p-10 md:pl-0 flex flex-col items-start">
            <div className="w-full -ml-2 flex flex-row items-center justify-start bg-white rounded-lg">
              <div>
                <img
                  src="/a-landing-page-removebg-preview.png"
                  alt="PKV - GKV Check"
                  className="h-8 md:h-8 lg:h-12"
                />
              </div>
              <div className='text-[#e97132] font-cabin md:text-xl font-semibold'>GKV PKV Check</div>
            </div>
            <p className="text-gray-700 mb-4 font-cabin text-lg md:text-lg lg:w-[90%] mt-3">
              Sie sind ein freiwilliges Mitglied einer Krankenkasse und haben sich schon immer die Frage gestellt, ob es sinnvoller ist, sich privatkrankenzuversichern oder doch in der gesetzlichen zu bleiben? Eine pauschale Antwort kann Ihnen hier leider keiner geben. Die richtige Systementscheidung ist abhängig von vielen individuellen Kriterien. Diese im Zusammenhang der Thematik richtig einzuordnen ist eine große Herausforderung. Deshalb bieten wir Ihnen einen unverbindlichen GKV–PKV–Check.
              Sie erhalten eine Expertise von Fachleuten, die Ihnen konkret bei der Entscheidungsfindung hilft.
            </p>
          </div>

          <div className="md:w-4/12 md:p-10 md:pl-0 flex flex-col items-start">
            <div className="w-full -ml-2 flex flex-row items-center justify-start bg-white rounded-lg">
              <div>
                <img
                  src="/a-landing-page-removebg-preview.png"
                  alt="PKV - GKV Check"
                  className="h-8 md:h-8 lg:h-12"
                />
              </div>
              <div className='text-[#e97132] font-semibold md:text-xl'>Wie funktioniert unser Check</div>
            </div>
            <p className="text-gray-700 mb-4 text-lg md:text-lg font-serif lg:w-[90%] mt-3">
              Wir stellen Ihnen eine Vielzahl von Fragen, die einen direkten und indirekten Bezug auf die Krankenversicherung haben. Dabei berücksichtigen wir Ihre heutige Ausgangslage, Ihre zukünftige Lebensplanung und Ihre Prioritäten bei den Leistungen. Anhand Ihrer Antworten erstellen unsere Experten kostenlos für Sie eine individuelle und umfangreiche Expertise, bei denen die Chancen – Risiken beider Systeme veranschaulicht werden.
              Diese dient für Sie als Orientierung, die eigene richtige Entscheidung zu treffen.
            </p>
          </div>

          <div className="md:w-4/12 md:p-10 md:pl-0 flex flex-col items-start">
            <div className="w-full -ml-2 flex flex-row items-center justify-start bg-white rounded-lg">
              <div>
                <img
                  src="/a-landing-page-removebg-preview.png"
                  alt="PKV - GKV Check"
                  className="h-8 md:h-8 lg:h-12"
                />
              </div>
              <div className='text-[#e97132] font-semibold md:text-xl'>Unser Versprechen</div>
            </div>
            <p className="text-gray-700 mb-4 text-lg md:text-lg font-serif lg:w-[100%] mt-3">
              Wir begleiten Sie in dem kompletten Beratungsprozess. Beginnend mit der Grundsatzfrage private oder gesetzliche Krankenversicherung erörtern wir die wichtigsten Themenpunkte: Wie entwickeln sich die Beiträge langfristig? Wo sind die Leistungsunterschiede beider Systeme? Wie gestaltet sich die Private bei der Familienplanung? Wie ist der Beitragsvergleich im Rentenalter? Unter welchen Voraussetzungen kommt man in die Gesetzliche zurück? Diese und andere Fragen sind wichtiger Bestandteil einer Gegenüberstellung. Darüber hinaus unterstützen 
              wir Sie beim Markt– und Tarifvergleich und begleiten Sie bei den Antragsprozessen.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default BannerSecond
