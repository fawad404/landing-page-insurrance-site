// pages/contact.js
export default function Contactfourth() {
    return (
      <div className="min-h-screen flex flex-col items-center">
        {/* Header Section */}
        <div className="w-full bg-orange-300 p-4">
          <h1 className="text-white text-2xl font-semibold">Kontakt</h1>
        </div>
  
        {/* Contact Section */}
        <div className="flex justify-between items-start w-full p-16 bg-white shadow-md">
          <div>
            <p className="text-lg">Telefon:</p>
            <p className="text-lg">Mobil: 01732176700</p>
            <p className="text-lg">Fax:</p>
            <p className="text-lg">Große Bäckerstraße 10</p>
            <p className="text-lg">20095 Hamburg</p>
            <p className="text-lg">
              Email:{" "}
              <a href="mailto:poggensee@poggensee.de" className="text-blue-500 underline">
                poggensee@poggensee.de
              </a>
            </p>
          </div>
          <div>
            <img src="/a-landing-page-removebg-preview.png" alt="PKV GKV Check" className="w-32" />
          </div>
        </div>
      </div>
    );
  }