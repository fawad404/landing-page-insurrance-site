import React from 'react'
import ComHeader from '../comHeader/ComHeader'

const TestNine = () => {
  return (
    <>
    <ComHeader />
    <h2 className="p-20 md:p-10 pb-0 md:pb-0 text-[#c04f15] text-xl md:text-2xl lg:text-3xl italic mb-6 flex md:block md:justify-start -ml-12 md:-ml-0">
    Familienplanung
      </h2>

      <div class="text-textColor flex items-center justify-center min-h-[70vh] p-8 md:-mt-12 lg:-mt-20 ">

        <div class="w-full max-w-3xl bg-white  relative">
            <div class="relative">
                <label class="flex items-center space-x-3 text-[#c04f15]">
                    <input type="checkbox" class="form-checkbox h-5 w-5 " />
                    <span class="inline-block text-base font-normal text-base">Keine Lebenspartnerschaft geplant</span>
                </label>
                <h2 class="text-2xl mb-8 italic text-[#c04f15] mt-6">Versichertenstatus Lebenspartner
                    <span class="inline-block ml-2 text-sm cursor-pointer ">
                        <i class="fa fa-info-circle text-lg"></i>
                    </span>
                </h2>
                <div class="hidden absolute left-0 top-2
                 max-w-xs p-4 border border-orange-600 bg-orange-100 text-sm rounded-lg shadow-lg hover-box">
                    <p>
                        Whether children or the partner need to be insured under private health insurance in a family
                        situation is complex and depends on professional status, insurance status, and income. Parental
                        leave and the partner’s future employment under social insurance are also factors. Correct
                        evaluation requires answering these questions in advance, where applicable.
                    </p>
                </div>
            </div>
    
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 text-base text-[#c04f15]">
                <label class="flex items-center space-x-3">
                    <input type="checkbox" class="form-checkbox h-5 w-5 " />
                    <span>PKV versichert</span>
                </label>
                <label class="flex items-center space-x-3">
                    <input type="checkbox" class="form-checkbox h-5 w-5 " />
                    <span>GKV familienversichert</span>
                </label>
                <label class="flex items-center space-x-3">
                    <input type="checkbox" class="form-checkbox h-5 w-5 " />
                    <span>GKV pflichtversichert</span>
                </label>
                <label class="flex items-center space-x-3">
                    <input type="checkbox" class="form-checkbox h-5 w-5 " />
                    <span>GKV freiwillig versichert</span>
                </label>
                <label class="flex items-center space-x-3">
                    <input type="checkbox" class="form-checkbox h-5 w-5 " />
                    <span>Lebenspartner noch nicht bekannt</span>
                </label>
                
            </div>

      
            <h2 class="text-2xl mb-8 italic text-[#c04f15]">Berufsstatus Lebenspartner</h2>

            <div class="grid grid-rows-3 sm:grid-rows-2 md:grid-rows-1 text-base grid-flow-col gap-4 mb-6 text-[#c04f15]">
                <label class="flex items-center space-x-3">
                    <input type="checkbox" class="form-checkbox h-5 w-5 " />
                    <span>angestellt</span>
                </label>
                <label class="flex items-center space-x-3">
                    <input type="checkbox" class="form-checkbox h-5 w-5 " />
                    <span>selbständig</span>
                </label>
                <label class="flex items-center space-x-3">
                    <input type="checkbox" class="form-checkbox h-5 w-5 " />
                    <span>verbeamtet</span>
                </label>
                <label class="flex items-center space-x-3">
                    <input type="checkbox" class="form-checkbox h-5 w-5 " />
                    <span>Hausfrau/mann
                    </span>
                </label>
                <label class="flex items-center space-x-3">
                    <input type="checkbox" class="form-checkbox h-5 w-5 " />
                    <span>Elternzeit</span>
                </label>
            </div>

    
            <h2 class="text-2xl mb-6 italic text-[#c04f15]">Einkommen Lebenspartner</h2>
            <h2 class="text-xl text-[#c04f15] mb-4">Einkommen: 70,000.00 Euros p.a.</h2>

            <div class="mb-6">
                <label class="block">
                    <input
                    type="text"
                    className="bg-[#fbe3d6] text-lg text-white placeholder-white rounded-md border-none px-2 py-0 focus:outline-none focus:ring-2 focus:ring-[#c04f15] focus:ring-opacity-50 w-full max-w-xs md:max-w-48"
                    placeholder=""
                />
                </label>
            </div>
        </div>
    </div>
    </>
  )
}

export default TestNine