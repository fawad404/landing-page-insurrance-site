import React from 'react'
import ComHeader from '../comHeader/ComHeader'

const TestEight = () => {
  return (
    <>
    <ComHeader />
    <h2 className="p-20 md:p-10 pb-0 md:pb-0 text-[#c04f15] text-2xl md:text-2xl lg:text-3xl italic mb-6 flex md:block md:justify-start -ml-16 md:-ml-0">
      Eintrittsvoraussetzungen
      </h2>

      <div class="flex items-center justify-center min-h-[55vh] p-4  md:ml-8">
        <div class="w-full max-w-3xl relative">
            <div>
              
            <div className="relative mb-5">
                <h1 className="text-xl md:text-2xl italic text-[#c04f15]  mb-4 hover-trigger">Lebenspartnerschaftsplanung
                <span className="inline-block ml-1 group">
            <span className="text-[#c04f15] absolute -top-1 left-84">
                <img src='/info-circle-svgrepo-com (1).svg' className='h-5 w-5 text-red-900' />
              </span>
              <div className="-ml-64 mt-3 md:-ml-8 absolute hidden group-hover:block bg-white border border border-orange-500 text-black text-sm rounded p-2 whitespace-normal md:max-w-xs lg:max-w-sm z-10">
                <p className='p-2'>
                  <img src='/info-circle-svgrepo-com (1).svg' className='h-4 w-4 mb-2' />
                  Ob Kinder oder der Partner privat krankenversichert werden müssen ist auch abhängig, ob eine
                  Ehe oder nur eine Lebensgemeinschaft vorliegt.
                </p>
              </div>
            </span>
                </h1>
            </div>

            
                <div class="grid grid-cols-1 gap-4 mb-6 text-[#c04f15] md:ml-5 mb-5">
                    <label class="flex items-center space-x-3">
                        <input type="checkbox" class="form-checkbox h-5 w-5 " />
                        <span>Ich bin verheiratet oder möchte irgendwann heiraten</span>
                    </label>
                    <label class="flex items-center space-x-3">
                        <input type="checkbox" class="form-checkbox h-5 w-5 " />
                        <span>Ich möchte in einer Partnerschaft ohne Heirat leben bzw. ich bleibe Single</span>
                    </label>

                </div>

            </div>
            <div>
            
            <div className="relative mt-12">
                <h1 className="text-2xl italic text-[#c04f15]  mb-4 hover-trigger">Kinderplanung
                <span className="inline-block ml-1 group">
            <span className="text-[#c04f15] absolute -top-1 left-44">
                <img src='/info-circle-svgrepo-com (1).svg' className='h-5 w-5 text-red-900' />
              </span>
              <div className="-ml-20 mt-3 md:-ml-8 absolute hidden group-hover:block bg-white border border border-orange-500 text-black text-sm rounded p-2 whitespace-normal md:max-w-xs lg:max-w-sm z-10">
                <p className='p-2'>
                  <img src='/info-circle-svgrepo-com (1).svg' className='h-4 w-4 mb-2' />
                  Die private Krankenversicherung ist eine Risikoversicherung. Hinzuversichernde Kinder
                            bedeuten einen zusätzlichen Beitrag, während in der GKV i.d.R. die Kinder familienversichert
                            sind. Für eine langfristige Kosteneinschätzung sind deshalb die Zahl der bereits vorhandenen
                            aber auch zukünftigen Kinder von zentraler Bedeutung.
                </p>
              </div>
            </span>
                </h1>
            </div>

    
                <div class="grid grid-cols-1 gap-4 mb-6 text-[#c04f15] md:ml-5 mb-5">
                    <label class="flex items-center space-x-3">
                        <input type="checkbox" class="form-checkbox h-5 w-5 " />
                        <span>Ich habe keine Kinder und möchte keine Kinder</span>
                    </label>
                    <label class="flex items-center space-x-3">
                        <input type="checkbox" class="form-checkbox h-5 w-5 " />
                        <span>Ich habe/möchte ein Kind </span>
                    </label>
                    <label class="flex items-center space-x-3">
                        <input type="checkbox" class="form-checkbox h-5 w-5 " />
                        <span>Ich habe/möchte ein bis zwei Kinder</span>
                    </label>
                    <label class="flex items-center space-x-3">
                        <input type="checkbox" class="form-checkbox h-5 w-5 " />
                        <span>Ich habe/möchte zwei Kinder</span>
                    </label>
                    <label class="flex items-center space-x-3">
                        <input type="checkbox" class="form-checkbox h-5 w-5 " />
                        <span>Ich habe/möchte zwei bis 3 Kinder</span>
                    </label>
                    <label class="flex items-center space-x-3">
                        <input type="checkbox" class="form-checkbox h-5 w-5 " />
                        <span>Ich habe/möchte drei oder mehr Kinder</span>
                    </label>

                </div>

            </div>
        </div>
    </div>
    </>
  )
}

export default TestEight