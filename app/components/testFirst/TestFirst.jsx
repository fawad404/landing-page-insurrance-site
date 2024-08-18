import ComHeader from "../comHeader/ComHeader";

const TestFirst = () => {
  
    return (
        <>
               <ComHeader />
               <h2 className="p-20 md:p-10 pb-0 md:pb-2 text-orange-600 text-xl md:text-2xl lg:text-3xl font-bold mb-6 flex md:block md:justify-start -ml-8 md:-ml-0">
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
  <button className="w-[90px] mt-8 md:mt-28 ml-0 md:ml-64 self-center bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-orange-700 focus:outline-none">
    Weiter
  </button>
</div>

  
  
      
          <p className="text-center text-orange-600 mt-12 flex justify-center">Frage 1 von 17</p>
      
        </>
  
    )
}

export default TestFirst;