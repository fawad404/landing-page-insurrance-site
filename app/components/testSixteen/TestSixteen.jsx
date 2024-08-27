"use client"
import React, { useState } from 'react'
import ComHeader from '../comHeader/ComHeader'
import Link from 'next/link'

const TestSixteen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  console.log(username, email, phone);
  return (
    <>
    <ComHeader />

      <div class="text-textColor flex items-center justify-center min-h-[55vh] p-4 mt-12 md:mt-8 font-fijala  md:ml-8">
        <div class="w-full max-w-5xl relative">
        <div className="relative">
                <h1 className="text-xl md:text-2xl italic text-[#c25115] mb-4 hover-trigger">Ich möchte eine kostenlose und individuelle Chancen-Risiko-Analyse erhalten!​
                <span className="inline-block ml-1 group">
            <span className="text-[#c25115] -top-3 ">
                <img src='/info-circle-svgrepo-com (1).svg' className='h-5 w-5 text-red-900' />
              </span>
              <div className=" absolute -ml-20 sm:-ml-28 md:-ml-32 hidden group-hover:block bg-white border border border-orange-500 text-black text-sm rounded p-2 whitespace-normal lg:max-w-sm z-10">
                <p className='p-2'>
                  <img src='/info-circle-svgrepo-com (1).svg' className='h-4 w-4 mb-2' />
                  Da Sie in der gesetzlichen Krankenversicherung als freiwilliges Mitglied auch Beiträge auf
                        andere zusätzliche Einkunftsarten zu entrichten haben, sind diese bei einer Gegenüberstellung
                        von Bedeutung. Bitte tragen Sie hier Ihre Schätzung ein, mit welcher monatlichen Gesamtsumme
                        (ohne gesetzliche Rente) Sie rechnen. Lassen Sie bitte inflationsbedingte Steigerungen außen
                        vor.
                </p>
              </div>
            </span>
                </h1>
            </div>
            <div className='pl-0 mb-6 text-[#c25115] w-full md:w-2/4 mx-auto mt-8'>
            <label class="flex items-center space-x-3">Vorname, Nachname <span>(Pflichtfeld)​</span>
                    </label>
                    <input
                    type="text"
                    onChange={(e) => setUsername(e.target.value)}
                    className="bg-[#fbe3d6] text-lg  h-12 text-gray-900 placeholder-white rounded-md border-none px-2 py-0 focus:outline-none focus:ring-2 focus:ring-[#c04f15] focus:ring-opacity-50 w-full"
                    placeholder=""
                />
            </div>
            <div className='pl-0 mb-6 text-[#c25115] w-full md:w-2/4 mx-auto mt-8'>
            <label class="flex items-center space-x-3">Email-Adresse<span>(Pflichtfeld)​​</span>
                    </label>
                    <input
                    type="text"
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-[#fbe3d6] text-lg  h-12 text-gray-900 placeholder-white rounded-md border-none px-2 py-0 focus:outline-none focus:ring-2 focus:ring-[#c04f15] focus:ring-opacity-50 w-full"
                    placeholder=""
                />
            </div>
            <div className='pl-0 mb-6 text-[#c25115] w-full md:w-2/4 mx-auto mt-8'>
               
            <label class="flex items-center space-x-3">Telefon-/Mobilnummer<span>(Pflichtfeld)​​</span>
                    </label>
                    <input
                    type="text"
                    onChange={(e) => setPhone(e.target.value)}
                    className="bg-[#fbe3d6] text-lg  h-12 text-gray-900 placeholder-white rounded-md border-none px-2 py-0 focus:outline-none focus:ring-2 focus:ring-[#c04f15] focus:ring-opacity-50 w-full"
                    placeholder=""
                />
            </div>
            <p className='pl-0 md:w-2/4 mx-auto mb-6 text-[#c25115] mt-8'>Datenschutzerklärung.</p>
            <div className='pl-0 mb-6 text-[#c25115] mt-8 items-center flex w-2/4 mx-auto'>
            <input type="checkbox" className="form-checkbox h-7 w-7 mr-3" />
            <span>
                <Link href="/">
                Ja, ich habe die Informationen zum Datenschutz zur Kenntnis genommen und bin einverstanden.
                </Link>
                ​</span>                
                        </div>
                    </div>
                    </div>
      </>
  )
}

export default TestSixteen