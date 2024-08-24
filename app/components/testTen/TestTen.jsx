import React from 'react'
import ComHeader from '../comHeader/ComHeader'
const TestTen = () => {
  return (
    <>
    <ComHeader />
    <h2 className="p-20 md:p-10 pb-0 md:pb-0 text-[#c25115] text-2xl md:text-2xl lg:text-2xl font-fijala italic mb-6 flex md:block md:justify-start -ml-16 md:-ml-0">
    Familienplanung
      </h2>

      <div class="text-textColor flex items-center justify-center min-h-[55vh] font-fijala p-4  md:ml-8">
        <div class="w-full max-w-3xl relative">
            <div>
              
            <div className="relative mb-5">
                <h1 className="text-xl md:text-2xl italic text-[#c25115]  mb-4 hover-trigger">Elternzeit
                <span className="inline-block ml-1 group">
            <span className="text-[#c25115] absolute -top-1 left-84">
                <img src='/info-circle-svgrepo-com (1).svg' className='h-5 w-5 text-red-900' />
              </span>
              <div className="-ml-20 mt-3 md:-ml-8 absolute hidden group-hover:block bg-white border border border-orange-500 text-black text-sm rounded p-2 whitespace-normal md:max-w-xs lg:max-w-sm z-10">
                <p className='p-2'>
                  <img src='/info-circle-svgrepo-com (1).svg' className='h-4 w-4 mb-2' />
                  Die Frage, ob Kinder oder der Partner im Rahmen einer Familienplanung privat
                            krankenversichert
                            werden müssen, ist sehr komplex und abhängig von Beschäftigungsstatus, Versicherungsstatus
                            und
                            Einkommenssituation. Auch die Elternzeit spielt eine Rolle, ebenso wie eine Beschäftigung
                            unterhalb der sozialversicherungspflichtigen Grenze oder eine Berufsausübung ohne
                            Erwerbstätigkeit (als Hausfrau oder Hausmann).
                </p>
              </div>
            </span>
                </h1>
            </div>

            
                <div class="grid grid-cols-1 gap-4 mb-6 text-[#c25115] md:ml-5 mb-5">
                    <label class="flex items-center space-x-3">
                        <input type="checkbox" class="form-checkbox h-5 w-5 " />
                        <span>Ich möchte in die Elternzeit</span>
                    </label>
                    <label class="flex items-center space-x-3">
                        <input type="checkbox" class="form-checkbox h-5 w-5 " />
                        <span>Mein Lebenspartner möchte in die Elternzeit</span>
                    </label>
                    <label class="flex items-center space-x-3">
                        <input type="checkbox" class="form-checkbox h-5 w-5 " />
                        <span>Wir beide wollen in die Elternzeit</span>
                    </label>
                    <label class="flex items-center space-x-3">
                        <input type="checkbox" class="form-checkbox h-5 w-5 " />
                        <span>Wir beide wollen nicht in die Elternzeit</span>
                    </label>

                </div>

            </div>
            <div>
            
            <div className="relative mt-12">
                <h1 className=" text-2xl italic text-[#c25115]  mb-4 hover-trigger">Berufsplanung bei Kindern (keine
                    sozialversicherungspflichtige Berufstätigkeit)
                <span className="inline-block ml-1 group">
            <span className="text-[#c25115] absolute -top-1 right-5 ">
                <img src='/info-circle-svgrepo-com (1).svg' className='h-5 w-5 text-red-900' />
              </span>
              <div className="-ml-28 md:ml-52 -mt-4 md:-mt-3 md:-ml-8 absolute hidden group-hover:block bg-white border border border-orange-500 text-black text-sm rounded p-2 whitespace-normal md:max-w-xs lg:max-w-sm z-10">
                <p className='p-2'>
                  <img src='/info-circle-svgrepo-com (1).svg' className='h-4 w-4 mb-2' />
                  Unter Hausmann/frau verstehen wir keinen sozialversicherungspflichtigen Mitgliedschaft in
                            einer
                            Krankenkasse. Hierzu gehört keine berufliche Tätigkeit oder ein Beschäftigungsverhältnis bis
                            als
                            Minijobber bis zu einem Einkommen von 450 Euro sowie ein auf Leistungen vom Arbeitsamt (§5
                            SGB
                            V).
                </p>
              </div>
            </span>
                </h1>
            </div>

    
                <div class="grid grid-cols-1 gap-4 mb-6 text-[#c25115] md:ml-5 mb-5">
                    <label class="flex items-center space-x-3">
                        <input type="checkbox" class="form-checkbox h-5 w-5 " />
                        <span>Wir wollen nach der Elternzeit wieder berufstätig werden</span>
                    </label>
                    <label class="flex items-center space-x-3">
                        <input type="checkbox" class="form-checkbox h-5 w-5 " />
                        <span>Ich möchte länger als 5 Jahre Hausmann/frau sein</span>
                    </label>
                    <label class="flex items-center space-x-3">
                        <input type="checkbox" class="form-checkbox h-5 w-5 " />
                        <span>Mein Lebenspartner möchte länger als 5 Jahre Hausmann/Hausfrau sein</span>
                    </label>

                </div>

            </div>
        </div>
    </div>
    </>
  )
}

export default TestTen