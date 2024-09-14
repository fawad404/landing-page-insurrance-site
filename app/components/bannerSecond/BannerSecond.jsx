import Featured from '@/app/components/featured/Featured'
import React from 'react'

const BannerSecond = ({language}) => {
  console.log('banner language:',language);
  return (
    <>
      
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
              <div className='text-[#e97132] font-cabin md:text-xl font-semibold'>
              {language === 'de' ? 
              'GKV PKV Check' 
              : 
              'Private or public health insurance check'
            }
                
                </div>
            </div>
            <p className="text-gray-700 mb-4 font-cabin text-lg md:text-lg lg:w-[90%] mt-3">
            {language === 'de' ? 
            'Sie sind ein freiwilliges Mitglied einer Krankenkasse und haben sich schon immer die Frage gestellt, ob es sinnvoller ist, sich privatkrankenzuversichern oder doch in der gesetzlichen zu bleiben? Eine pauschale Antwort kann Ihnen hier leider keiner geben. Die richtige Systementscheidung ist abhängig von vielen individuellen Kriterien. Diese im Zusammenhang der Thematik richtig einzuordnen ist eine große Herausforderung. Deshalb bieten wir Ihnen einen unverbindlichen GKV–PKV–Check. Sie erhalten eine Expertise von Fachleuten, die Ihnen konkret bei der Entscheidungsfindung hilft.' 
            : 
            'You are a voluntary member of a the public health insurance and have always wondered whether it would make more sense to have private health insurance or to stay in the public system? Unfortunately, no one can give you a general answer to this. The right decision between systems depends on many individual criteria. Correctly assessing these in the context of the topic is a major challenge. That is why we offer you a non-binding public vs. private health insurance check. You will receive an expert opinion from specialists that will specifically help you in your decision-making process."'
            }
              
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
              <div className='text-[#e97132] font-semibold md:text-xl'>
              {language === 'de' ? 
            'Wie funktioniert unser Check' 
            : 
            'How our check works?'
            }
                
                </div>
            </div>
            <p className="text-gray-700 mb-4 text-lg md:text-lg font-serif lg:w-[90%] mt-3">
            {language === 'de' ? 
            'Wir stellen Ihnen eine Vielzahl von Fragen, die einen direkten und indirekten Bezug auf die Krankenversicherung haben. Dabei berücksichtigen wir Ihre heutige Ausgangslage, Ihre zukünftige Lebensplanung und Ihre Prioritäten bei den Leistungen. Anhand Ihrer Antworten erstellen unsere Experten kostenlos für Sie eine individuelle und umfangreiche Expertise, bei denen die Chancen – Risiken beider Systeme veranschaulicht werden.Diese dient für Sie als Orientierung, die eigene richtige Entscheidung zu treffen.' 
            : 
            'We ask you a variety of questions that have a direct and indirect relation to health insurance. We take into account your current situation, your future life plans, and your priorities regarding benefits. Based on your answers, our experts will create a free, personalized, and comprehensive analysis for you, showing the opportunities and risks of both systems. This serves as a guide to help you make the right decision for yourself."'
            }
              
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
              <div className='text-[#e97132] font-semibold md:text-xl'>
              {language === 'de' ? 
            'Unser Versprechen' 
            : 
            ' Our Promise'
            }
                
                </div>
            </div>
            <p className="text-gray-700 mb-4 text-lg md:text-lg font-serif lg:w-[100%] mt-3">
            {language === 'de' ? 
            'Wir begleiten Sie in dem kompletten Beratungsprozess. Beginnend mit der Grundsatzfrage private oder gesetzliche Krankenversicherung erörtern wir die wichtigsten Themenpunkte: Wie entwickeln sich die Beiträge langfristig? Wo sind die Leistungsunterschiede beider Systeme? Wie gestaltet sich die Private bei der Familienplanung? Wie ist der Beitragsvergleich im Rentenalter? Unter welchen Voraussetzungen kommt man in die Gesetzliche zurück? Diese und andere Fragen sind wichtiger Bestandteil einer Gegenüberstellung. Darüber hinaus unterstützen wir Sie beim Markt– und Tarifvergleich und begleiten Sie bei den Antragsprozessen.' 
            : 
            'We guide you through the entire consultation process. Starting with the fundamental question of private or public health insurance, we discuss the most important topics: How do the tariffs develop in the long term? What are the differences in benefits between the two systems? How does private insurance work when planning a family? What is the comparison of contributions in retirement? Under what conditions can one return to public  insurance? These and other questions are key components of the comparison. Additionally, we assist you with market and tariff comparisons and support you throughout the decision processes."'
            }
              
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default BannerSecond
