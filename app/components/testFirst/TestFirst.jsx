"use client"

const TestFirst = () => {
  
    return (
        <>
                <header className="bg-[#f97316] flex justify-between items-center p-6">
        <h1 className="text-white font-semibold text-xl md:text-xl">
        </h1>
        <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center">
          <img
            src="/a-landing-page-removebg-preview.png"
            alt="PKV-GKV Logo"
            className="object-contain"
          />
        </div>
      </header>
        <div className="p-4">
        <div className="bg-white w-full px-44 py-16 rounded-lg">
          {/* Background Image */}
        
  
  <h2 className="text-orange-600 text-xl md:text-2xl lg:text-3xl font-bold mb-4 flex justify-center md:justify-start md:items-start">
  Eintrittsvoraussetzungen
</h2>

  
<div className="mb-6 flex flex-col items-center md:items-stretch md:mt-16">
  <label className="text-orange-600 text-lg md:text-2xl font-semibold mb-2 block self-center md:ml-[-207px]">Berufsstatus</label>
  <div className="flex flex-wrap items-center justify-center md:justify-center space-x-4 mt-8 md:mt-16">
    <label className="flex items-center text-xl text-orange-600 mb-2 md:mb-0">
      <input type="checkbox" className="mr-2" />
      angestellt
    </label>
    <label className="flex items-center text-lg text-orange-600 mb-2 md:mb-0">
      <input type="checkbox" className="mr-2" />
      selbständig
    </label>
    <label className="flex items-center text-lg text-orange-600 mb-2 md:mb-0">
      <input type="checkbox" className="mr-2" />
      verbeamtet
    </label>
  </div>
  <button className="w-[90px] mt-8 md:mt-52 ml-0 md:ml-64 self-center bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-orange-700 focus:outline-none">
    Weiter
  </button>
</div>

  
  
        </div>
          <p className="text-center text-orange-600 mt-0 flex justify-center">Frage 1 von 17</p>
      </div>
        </>
  
    )
}

export default TestFirst