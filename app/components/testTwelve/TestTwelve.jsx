import React from 'react'
import ComHeader from '../comHeader/ComHeader'

const TestTwelve = () => {
  return (
    <>
    <ComHeader />
    <h2 className="p-20 md:p-10 pb-0 md:pb-0 text-[#c04f15] text-2xl md:text-2xl lg:text-3xl italic mb-6 flex md:block md:justify-start -ml-16 md:-ml-0">
    Rentenalter
      </h2>

      <div class="text-textColor flex items-center justify-center min-h-[55vh] p-4  md:ml-8">
        <div class="w-full max-w-3xl relative">
            <div>
              
            <div className="relative mt-12">
                <h1 className="text-xl md:text-2xl italic text-[#c04f15] mb-4 hover-trigger">Prognose: Einnahmen im Rentenalter (inflationsbereinigt)
                <span className="inline-block ml-1 group">
            <span className="text-[#c04f15] -top-3 ">
                <img src='/info-circle-svgrepo-com (1).svg' className='h-5 w-5 text-red-900' />
              </span>
              <div className="-ml-36 absolute sm:-ml-20 md:-ml-28 hidden group-hover:block bg-white border border border-orange-500 text-black text-sm rounded p-2 whitespace-normal lg:max-w-sm z-10">
                <p className='p-2'>
                  <img src='/info-circle-svgrepo-com (1).svg' className='h-4 w-4 mb-2' />
                  Bitte tragen Sie hier Ihre zu erwartende gesetzliche Rente ein.
                        Sie finden diese auch in der jährlichen Renteninformation von der Deutschen Rentenversicherung. Lassen Sie bitte inflationsbedingte Steigerungen außen vor.
                </p>
              </div>
            </span>
                </h1>
            </div>

            
            <h2 class="text-xl text-[#c04f15] mb-4">Einkommen: 70,000.00 Euros p.a.</h2>

            </div>
            <div>
            

            </div>
        </div>
    </div>
      </>

  )
}

export default TestTwelve