"use client";
import '../testFourteen/testFourteen.css';
import React, { useEffect, useState } from 'react';
import { translations } from '../../utilis/translations'; // Adjust the path according to your project structure

const TestNine = ({ data, language, onChange }) => {
  const [income, setIncome] = useState(0);
  const [selectedValueTwo, setSelectedValueTwo] = useState('');
  const [selectedValueThree, setSelectedValueThree] = useState('');

  useEffect(() => {
    const storedValueTwo = localStorage.getItem('page9Two');
    if (storedValueTwo) {
      setSelectedValueTwo(storedValueTwo);
    }
    const storedValueThree = localStorage.getItem('page9Three');
    if (storedValueThree) {
      setSelectedValueThree(storedValueThree);
    }
    const storedValueRange = localStorage.getItem('page9Range');
    if (storedValueRange) {
      setIncome(storedValueRange);
    }
  }, []);

  const handleChangeTwo = (event) => {
    const value = event.target.value;
    setSelectedValueTwo(value);
    localStorage.setItem('page9Two', value);
    onChange('page9Two', value);
    console.log(`${value}`);
  };

  const handleChangeThree = (event) => {
    const value = event.target.value;
    setSelectedValueThree(value);
    localStorage.setItem('page9Three', value);
    onChange('page9Three', value);
    console.log(`${value}`);
  };

  const handleRangeChange = (e) => {
    const roundedValue = Math.round(e.target.value / 1000) * 1000;
    setIncome(roundedValue);
    localStorage.setItem('page9Range', roundedValue);
    onChange('page9Range', roundedValue);
    console.log(roundedValue);
  };

  const t = translations[language] || translations.en;

  return (
    <>
      <h2 className="p-20 md:p-10 pb-0 md:pb-0 text-[#c25115] font-fijala text-xl md:text-2xl lg:text-2xl italic mb-3 flex md:block md:justify-start -ml-12 md:-ml-0">
        {t.familyPlanning}
      </h2>

      <div className="flex items-center justify-center min-h-[55vh] font-fijala p-8 md:-mt-8 lg:-mt-8">
        <div className="w-full max-w-3xl bg-white relative">
          <div className="relative">
            <h2 className="text-2xl mb-4 italic text-[#c25115] mt-3">
              {t.insuredStatusLifePartner}
              <span className="inline-block ml-2 text-sm cursor-pointer">
                <i className="fa fa-info-circle text-lg"></i>
              </span>
            </h2>
            <div className="hidden absolute left-0 top-2 max-w-xs p-4 border border-orange-600 bg-orange-100 text-sm rounded-lg shadow-lg hover-box">
              <p>{t.insuredStatusTooltip}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-3 text-base text-[#c25115]">
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                value="Versichertenstatus Lebenspartner: PKV versichert"
                checked={selectedValueTwo === 'Versichertenstatus Lebenspartner: PKV versichert'}
                onChange={handleChangeTwo}
                className="form-checkbox h-5 w-5"
              />
              <span>{t.privateHealthInsurance}</span>
            </label>
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                value="Versichertenstatus Lebenspartner: GKV familienversichert"
                checked={selectedValueTwo === 'Versichertenstatus Lebenspartner: GKV familienversichert'}
                onChange={handleChangeTwo}
                className="form-checkbox h-5 w-5"
              />
              <span>{t.gkvFamilyInsurance}</span>
            </label>
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                value="Versichertenstatus Lebenspartner: KV pflichtversicher"
                checked={selectedValueTwo === 'Versichertenstatus Lebenspartner: KV pflichtversicher'}
                onChange={handleChangeTwo}
                className="form-checkbox h-5 w-5"
              />
              <span>{t.compulsoryStatutoryHealthInsurance}</span>
            </label>
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                value="Versichertenstatus Lebenspartner: GKV freiwillig versichert"
                checked={selectedValueTwo === 'Versichertenstatus Lebenspartner: GKV freiwillig versichert'}
                onChange={handleChangeTwo}
                className="form-checkbox h-5 w-5"
              />
              <span>{t.lifePartnerNotYetKnown}</span>
            </label>
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                value="Versichertenstatus Lebenspartner: Lebenspartner noch nicht bekannt"
                checked={selectedValueTwo === 'Versichertenstatus Lebenspartner: Lebenspartner noch nicht bekannt'}
                onChange={handleChangeTwo}
                className="form-checkbox h-5 w-5"
              />
              <span>{t.voluntaryStatutoryHealthInsurance}</span>
            </label>
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                value="Familienplanung: Keine Lebenspartnerschaft geplant"
                checked={selectedValueTwo === 'Familienplanung: Keine Lebenspartnerschaft geplant'}
                onChange={handleChangeTwo}
                className="form-checkbox h-5 w-5"
              />
              <span>{t.noCivilPartnershipPlanned}</span>
            </label>
          </div>

          <h2 className="text-2xl mb-4 italic text-[#c25115]">
            {t.professionalStatusOfLifePartner}
          </h2>

          <div className="grid grid-rows-3 sm:grid-rows-2 md:grid-rows-1 text-base grid-flow-col gap-4 mb-3 text-[#c25115]">
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                value="Berufsstatus Lebenspartnerr: angestellt"
                checked={selectedValueThree === 'Berufsstatus Lebenspartnerr: angestellt'}
                onChange={handleChangeThree}
                className="form-checkbox h-5 w-5"
              />
              <span>{t.employed}</span>
            </label>
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                value="Berufsstatus Lebenspartner: selbständig"
                checked={selectedValueThree === 'Berufsstatus Lebenspartner: selbständig'}
                onChange={handleChangeThree}
                className="form-checkbox h-5 w-5"
              />
              <span>{t.selfEmployed}</span>
            </label>
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                value="Berufsstatus Lebenspartner: verbeamtet"
                checked={selectedValueThree === 'Berufsstatus Lebenspartner: verbeamtet'}
                onChange={handleChangeThree}
                className="form-checkbox h-5 w-5"
              />
              <span>{t.civilServant}</span>
            </label>
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                value="Berufsstatus Lebenspartner: Hausfrau/mann"
                checked={selectedValueThree === 'Berufsstatus Lebenspartner: Hausfrau/mann'}
                onChange={handleChangeThree}
                className="form-checkbox h-5 w-5"
              />
              <span>{t.housewife}</span>
            </label>
            <label className="flex items-center space-x-3">
              <input
                type="checkbox"
                value="Berufsstatus Lebenspartner: Elternzeit"
                checked={selectedValueThree === 'Berufsstatus Lebenspartner: Elternzeit'}
                onChange={handleChangeThree}
                className="form-checkbox h-5 w-5"
              />
              <span>{t.parentalLeave}</span>
            </label>
          </div>

          <h2 className="text-2xl mb-3 mt-4 italic text-[#c25115]">
            {t.incomeOfLifePartner}
          </h2>
          <h2 className="text-xl text-[#c25115] mb-4">
            {t.income} : {Number(income).toLocaleString('de-DE')} {t.eurosPerYear}
          </h2>

          <div className="mb-3">
            <label className="block">
              <input
                type="range"
                min="0"
                max="200000"
                value={income}
                onChange={handleRangeChange}
                className="appearance-none h-8 w-full max-w-xs md:max-w-48"
                style={{
                  background: `linear-gradient(to right, #f2aa84 0%, #f2aa84 ${(income / 200000) * 100}%, #fbe3d6 ${(income / 200000) * 100}%, #fbe3d6 100%)`,
                  accentColor: '#c04f15',
                  WebkitAppearance: 'none',
                  MozAppearance: 'none',
                  msAppearance: 'none',
                }}
              />
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestNine;
