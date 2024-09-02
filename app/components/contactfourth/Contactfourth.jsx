export default function Contactfourth() {
  return (
    <div className="flex flex-col items-center">
      {/* Header Section */}
      <div className="w-full bg-[#f2aa84] p-10 md:pl-36">
        <h1 className="text-white text-2xl font-semibold">Kontakt</h1>
      </div>

      {/* Contact Section */}
      <div className="w-full mx-auto flex flex-col md:flex-row justify-between items-start p-8 md:p-36 bg-white">
        <div className="md:w-3/5 w-full">
          <p className="text-lg ">Ralf Poggensee</p>
          <p className="text-lg mt-4">Große Bäckerstraße 10</p>
          <p className="text-lg mt-4">20095 Hamburg</p>
          <p className="text-lg mt-4">Tel.: +49 (0) 1732176700</p>
          <p className="text-lg mt-4">Fax.: +49 (0) 40 2286 14 277</p>
          <p className="text-lg mt-4">
            Email:{" "}
            <a href="mailto:poggensee@poggensee.de" className="text-blue-500 underline">
              service@pkv-gkv-check.de
            </a>
          </p>
        </div>
        <div className="md:w-1/3 w-full mt-16 md:mt-0 md:mt-0">
          <img src="/a-landing-page-removebg-preview.png" alt="PKV GKV Check" 
          className="md:h-96 h-60 w-full object-contain md:-mt-20" />
        </div>
      </div>
    </div>
  );
}
