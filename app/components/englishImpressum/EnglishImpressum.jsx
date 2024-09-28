"use client"
import Link from "next/link";

// pages/contact.js
export default function EnglishImpressum() {
    return (
        <div className="w-full flex flex-col items-center font-canadara">
        {/* Header Section */}
        <div className="w-full bg-[#f2aa84] p-10 md:pl-32">
          <h1 className="text-white text-2xl font-semibold font-canadara">Imprint</h1>
        </div>

          <div className="md:px-20">
            <div className="p-6 md:p-12 pb-4 md:pb-4 md:pt-8 pt-4">
          <Link href='/'
              className="text-[#f2aa84] font-semibold text-xl underline hover:text-orange-700"
              >
              Back
            </Link>
              </div>
        {/* Contact Section */}
        <div className="flex md:justify-between items-start w-full p-6 md:p-12 md:pb-0 md:pt-0">
          <div className="mt-2">
            <p className="md:text-lg text-slate mt-2">Ralf Poggensee</p>
            <p className="md:text-lg text-slate mt-1">Große Bäckerstraße 10</p>
            <p className="md:text-lg text-slate mt-1">20095 Hamburg</p>
          </div>
          <div>
            <img src="/a-landing-page-removebg-preview.png" alt="PKV GKV Check" 
            className="md:h-64 md:-mt-16 h-40" 

            />
          </div>
        </div>
        <div className="w-full text-sm md:text-base p-6 md:p-12 md:pt-0 md:pb-0 pt-0 md:-mt-20">
        <p className="mt-2">
        I am a tied insurance agent with authorization under § 34d Abs.7 GewO in the intermediary register: Chamber of Commerce
        </p>
        <p className="mt-2">
        Hamburg, Adolphsplatz 1, 20457 Hamburg, Registration number: D-MX9S-1OUV3-20I offer advice and currently represent the following insurance companies: 
        </p>
        <p className="mt-2">
  ERGO Versicherung AG, ERGO Vorsorge Lebensversicherung AG, DKV Deutsche Krankenversicherung AG, ERGO<br />
  Reiseversicherung AG, ERGO Krankenversicherung AG, ERGO Direkt Versicherung AG.
</p>


        
        <p className="mt-2">
        I receive commissions as well as other forms of compensation, such as from tenders. All fees are already included in the insurance premium and do not need to be paid separately by you.If you have any complaints in connection with my advice, you can contact our customer service center at phone number 0800 3746 017.
        </p>
        <p className="mt-2">
        Additionally, I am required to participate in the following extrajudicial arbitration boards as dispute resolution bodies in accordance with the Consumer Dispute Resolution Act:
        </p>

        <ul className="list-disc ml-2 w-full mt-2">
              <li>
              The Ombudsman for Private Health and Long-Term Care Insurance, P.O. Box 06 02 22, 10052 Berlin, Phone: 0800 / 2 55 04 44, Fax: 030 / 20 45 89 31, www.pkv-ombudsmann.de, for disputes related to private health or long-term care insurance.
              </li>
              <li className="mt-2">
              The Insurance Ombudsman e.V., P.O. Box 080632, 10006 Berlin, Phone: 0800 / 3 69 60 00, Fax: 0800 / 3 69 90 00, Email: beschwerde@versicherungsombudsmann.de, http://www.versicherungsombudsmann.de, for disputes related to other private insurance (excluding private health insurance, credit insurance, and reinsurance).
              </li>
            </ul>
            <p className="mt-2">
            Information on online dispute resolution: The European Commission also provides a platform for online extrajudicial dispute resolution (OS platform), accessible at
            </p>

            <p className="mt-2">www.ec.europa.eu/consumers/odr. The OS platform serves as a point of contact for extrajudicial resolution of disputes related to contractual obligations arising from online contracts.</p>
           
            
              
        </div>

      </div>
      </div>
    );
  }
