"use client";
import '../testFourteen/testFourteen.css';
import React, { useEffect, useState } from 'react';

// Define text content for each language
const texts = {
  en: {
    title: 'Family planning',
    parentalLeaveTitle: 'Parental leave',
    parentalLeaveInfo: 'The question of whether children or a life partner must be insured in a private health insurance scheme as part of a family situation is very complex and depends on professional status, insured status and income. Parental leave also plays a role, as does whether one of the life partners will be employed below the social insurance threshold or will not be employed (housewife/ househusband ). In order to make a correct assessment, these data - if foreseeable and available - must be answered in advance.',
    careerPlanningTitle: 'Career planning for children (no employment subject to social insurance contributions)',
    careerPlanningInfo: "Under 'housewife/househusband,' we refer to the status of a partner who does not have mandatory social insurance membership with a health insurance fund. This includes, for example, no professional activity, an employment relationship as a mini-jobber with an income of up to 538 euros (currently), or unemployment without entitlement to benefits from the employment office (§5 SGB V).",
    parentalLeaveOptions: [
      'I want to take parental leave',
      'My partner wants to take parental leave',
      'We both want to go on parental leave',
      'Neither of us wants to go on parental leave'
    ],
    careerPlanningOptions: [
      'We want to return to work after parental leave',
      'I want to be a housewife/househusband for more than 5 years',
      'My partner wants to be a housewife/househusband for more than 5 years'
    ]
  },
  de: {
    title: 'Familienplanung',
    parentalLeaveTitle: 'Elternzeit',
    parentalLeaveInfo: 'Die Frage, ob Kinder oder der Partner im Rahmen einer Familienplanung privat krankenversichert werden müssen, ist sehr komplex und abhängig von Beschäftigungsstatus, Versicherungsstatus und Einkommenssituation. Auch die Elternzeit spielt eine Rolle, ebenso wie eine Beschäftigung unterhalb der sozialversicherungspflichtigen Grenze oder eine Berufsausübung ohne Erwerbstätigkeit (als Hausfrau oder Hausmann).',
    careerPlanningTitle: 'Berufsplanung bei Kindern (keine sozialversicherungspflichtige Berufstätigkeit)',
    careerPlanningInfo: 'Unter Hausfrau/mann verstehen wir den Status des Lebenspartners ohne eine sozialversicherungspflichtige Mitgliedschaft in einer Krankenkasse. Hierzu gehört z.B. keine berufliche Tätigkeit, ein Beschäftigungsverhältnis als Minijobber bis zu einem Einkommen von derzeit 538 Euro oder eine Arbeitslosigkeit ohne Anspruch auf Leistungen vom Arbeitsamt (§5 SGB V).',
    parentalLeaveOptions: [
      'Ich möchte in die Elternzeit',
      'Mein Lebenspartner möchte in die Elternzeit',
      'Wir beide wollen in die Elternzeit',
      'Wir beide wollen nicht in die Elternzeit'
    ],
    careerPlanningOptions: [
      'Wir wollen beide nach der Elternzeit wieder berufstätig werden',
      'Ich möchte nach der Elternzeit noch weitere 3 oder mehr Jahre Hausmann/frau sein',
      'Mein Lebenspartner möchte nach der Elternzeit noch weitere 3 oder mehr Jahre Hausmann/frau sein'
    ]
  }
};

const TestTen = ({ data, language, onChange }) => {
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

  const text = texts[language] || texts.en; // Fallback to English if language is not found

  return (
    <>
      <h2 className="p-20 md:p-10 pb-0 md:pb-0 text-[#c25115] text-2xl md:text-2xl lg:text-2xl font-fijala italic mb-6 flex md:block md:justify-start -ml-16 md:-ml-0">
        {text.title}
      </h2>

      <div className="text-textColor flex items-center justify-center min-h-[55vh] font-fijala p-4 md:ml-8">
        <div className="w-full max-w-3xl relative">
          <div className="relative mb-5">
            <h1 className="text-xl md:text-2xl italic text-[#c25115] mb-4 hover-trigger">
              {text.parentalLeaveTitle}
              <span className="inline-block ml-1 group">
                <span className="text-[#c25115] absolute -top-1 left-84">
                  <img src='/info-circle-svgrepo-com (1).svg' className='h-5 w-5 text-red-900' />
                </span>
                <div className="-ml-20 mt-3 md:-ml-8 absolute hidden group-hover:block bg-white border border border-orange-500 text-black text-sm rounded p-2 whitespace-normal md:max-w-xs lg:max-w-sm z-10">
                  <p className='p-2'>
                    <img src='/info-circle-svgrepo-com (1).svg' className='h-4 w-4 mb-2' />
                    {text.parentalLeaveInfo}
                  </p>
                </div>
              </span>
            </h1>
          </div>

          <div className="grid grid-cols-1 gap-4 mb-6 text-[#c25115] md:ml-5 mb-5">
            {text.parentalLeaveOptions.map(option => (
              <label className="flex items-center space-x-3" key={option}>
                <input type="checkbox"
                  value={option}
                  checked={selectedValue === option}
                  onChange={handleChange}
                  className="form-checkbox h-5 w-5" />
                <span>{option}</span>
              </label>
            ))}
          </div>
          <div className="mt-12">
            <h1 className="relative text-xl sm:text-2xl md:text-2xl text-[#c25115] mb-4 hover-trigger">
              {text.careerPlanningTitle}
              <span className="inline-block ml-1 group">
                <span className="text-[#c25115] -top-3 ">
                  <img src='/info-circle-svgrepo-com (1).svg' className='h-5 w-5 text-red-900' />
                </span>
                <div className="absolute sm:-ml-72 md:-ml-32 hidden group-hover:block bg-white border border border-orange-500 text-black text-sm rounded p-2 whitespace-normal max-w-sm sm:max-w-sm z-10">
                  <p className='p-2'>
                    <img src='/info-circle-svgrepo-com (1).svg' className='h-4 w-4 mb-2' />
                    {text.careerPlanningInfo}
                  </p>
                </div>
              </span>
            </h1>
          </div>

          <div className="grid grid-cols-1 gap-4 mb-6 text-[#c25115] md:ml-5 mb-5">
            {text.careerPlanningOptions.map(option => (
              <label className="flex items-center space-x-3" key={option}>
                <input type="checkbox"
                  value={option}
                  checked={selectedValueTwo === option}
                  onChange={handleChangeTwo}
                  className="form-checkbox h-5 w-5" />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TestTen;
