"use client"
import '../testFourteen/testFourteen.css'
import React, { useEffect, useState } from 'react';
import ComHeader from '../comHeader/ComHeader'
const TestTen = ({ data, onChange }) => {
    const [selectedValue, setSelectedValue] = useState('');
    const [selectedValueTwo, setSelectedValueTwo] = useState('');

    useEffect(() => {
        // Retrieve the value from localStorage when the component mounts
        const storedValue = localStorage.getItem('page10');
        if (storedValue) {
          setSelectedValue(storedValue);
        }
        const storedValueTwo = localStorage.getItem('page10Two');
        if (storedValueTwo) {
          setSelectedValueTwo(storedValueTwo);
        }
      }, []);

    const handleChange = (event) => {
      const value = event.target.value;
      setSelectedValue(value);
      localStorage.setItem('page10', value);
      onChange('page10', value);
      console.log(`${value}`);
    };
    const handleChangeTwo = (event) => {
        const value = event.target.value;
        setSelectedValueTwo(value);
        localStorage.setItem('page10Two', value);
        onChange('page10Two', value);
        console.log(`${value}`);
      };

  return (
    <>
    <ComHeader />
    <h2 className="p-20 md:p-10 pb-0 md:pb-0 text-[#c25115] text-2xl md:text-2xl lg:text-2xl font-fijala italic mb-6 flex md:block md:justify-start -ml-16 md:-ml-0">
    Familienplanung
      </h2>

      <div className="text-textColor flex items-center justify-center min-h-[55vh] font-fijala p-4  md:ml-8">
        <div className="w-full max-w-3xl relative">
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

            
                <div className="grid grid-cols-1 gap-4 mb-6 text-[#c25115] md:ml-5 mb-5">
                    <label className="flex items-center space-x-3">
                        <input type="checkbox" 
                        value="Elternzeit: Ich möchte in die Elternzeit"
                        checked={selectedValue === 'Elternzeit: Ich möchte in die Elternzeit'}
                        onChange={handleChange}
                        className="form-checkbox h-5 w-5 " />
                        <span>Ich möchte in die Elternzeit</span>
                    </label>
                    <label className="flex items-center space-x-3">
                        <input type="checkbox" 
                        value="Elternzeit: Mein Lebenspartner möchte in die Elternzeit"
                        checked={selectedValue === 'Elternzeit: Mein Lebenspartner möchte in die Elternzeit'}
                        onChange={handleChange}
                        className="form-checkbox h-5 w-5 " />
                        <span>Mein Lebenspartner möchte in die Elternzeit</span>
                    </label>
                    <label className="flex items-center space-x-3">
                        <input type="checkbox" 
                        value="Elternzeit: Wir beide wollen in die Elternzeit"
                        checked={selectedValue === 'Elternzeit: Wir beide wollen in die Elternzeit'}
                        onChange={handleChange}
                        className="form-checkbox h-5 w-5 " />
                        <span>Wir beide wollen in die Elternzeit</span>
                    </label>
                    <label className="flex items-center space-x-3">
                        <input type="checkbox" 
                        value="Elternzeit: Wir beide wollen nicht in die Elternzeit"
                        checked={selectedValue === 'Elternzeit: Wir beide wollen nicht in die Elternzeit'}
                        onChange={handleChange}
                        className="form-checkbox h-5 w-5 " />
                        <span>Wir beide wollen nicht in die Elternzeit</span>
                    </label>

                </div>

            </div>
            <div>
            
            <div className="mt-12">
                <h1 className="relative text-xl sm:text-2xl md:text-2xl text-[#c25115] mb-4 hover-trigger">Berufsplanung bei Kindern (keine
                    sozialversicherungspflichtige Berufstätigkeit)
                <span className="inline-block ml-1 group">
            <span className="text-[#c25115] -top-3 ">
                <img src='/info-circle-svgrepo-com (1).svg' className='h-5 w-5 text-red-900' />
              </span>
              <div className=" absolute sm:-ml-72 md:-ml-32 hidden group-hover:block bg-white border border border-orange-500 text-black text-sm rounded p-2 whitespace-normal max-w-sm sm:max-w-sm z-10">
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

    
                <div className="grid grid-cols-1 gap-4 mb-6 text-[#c25115] md:ml-5 mb-5">
                    <label className="flex items-center space-x-3">
                        <input type="checkbox" 
                        value="Berufsplanung bei Kindern: Wir wollen nach der Elternzeit wieder berufstätig werden"
                        checked={selectedValueTwo === 'Berufsplanung bei Kindern: Wir wollen nach der Elternzeit wieder berufstätig werden'}
                        onChange={handleChangeTwo}
                        className="form-checkbox h-5 w-5 " />
                        <span>Wir wollen nach der Elternzeit wieder berufstätig werden</span>
                    </label>
                    <label className="flex items-center space-x-3">
                        <input type="checkbox" 
                        value="Berufsplanung bei Kindern: Ich möchte länger als 5 Jahre Hausmann/frau sein"
                        checked={selectedValueTwo === 'Berufsplanung bei Kindern: Ich möchte länger als 5 Jahre Hausmann/frau sein'}
                        onChange={handleChangeTwo}
                        className="form-checkbox h-5 w-5 " />
                        <span>Ich möchte länger als 5 Jahre Hausmann/frau sein</span>
                    </label>
                    <label className="flex items-center space-x-3">
                        <input type="checkbox" 
                        value="Berufsplanung bei Kindern: Mein Lebenspartner möchte länger als 5 Jahre Hausmann/Hausfrau sein"
                        checked={selectedValueTwo === 'Berufsplanung bei Kindern: Mein Lebenspartner möchte länger als 5 Jahre Hausmann/Hausfrau sein'}
                        onChange={handleChangeTwo}
                        className="form-checkbox h-5 w-5 " />
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