"use client"
import Link from "next/link";

// pages/contact.js
export default function Impressumfifth() {
    return (
        <div className="w-full flex flex-col items-center font-canadara">
        {/* Header Section */}
        <div className="w-full bg-[#f2aa84] p-10 md:pl-36">
          <h1 className="text-white text-2xl font-canadara">Impressum</h1>
        </div>

          <div className="md:px-20">
            <div className="p-6 md:p-12 pb-4 md:pb-4 md:pt-8 pt-4">
          <Link href='/'
              className="text-[#f2aa84] font-semibold text-xl underline hover:text-orange-700"
              >
              Zurück
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
        Ich bin als gebundener Versicherungsvertreter mit Erlaubnis nach § 34d Abs.7 GewO im Vermittlerregister:</p>
        <p className="mt-2">
        Han¬dels¬kam¬mer Ham¬burg, Adolphs¬platz 1, 20457 Ham¬burg, Registrierungsnummer: D-MX9S-1OUV3-20,
        D-MX9S-1OUV3-20
        </p>
        <p className="mt-2">
        Ich biete Beratung an. Derzeit Vertretung folgender Versicherungsgesellschaften: ERGO Versicherung AG, ERGO Vorsorge
Lebensversicherung AG, DKV Deutsche Krankenversicherung AG, ERGO Reiseversicherung AG, ERGO Krankenversicherung
AG, ERGO Direkt Versicherung AG.
        </p>
        <p className="mt-2">
        Für die Versicherungsvermittlung und sonstige Versicherungsvertriebstätigkeiten erhalte ich Provisionen; ferner sonstige
Zuwendungen z.B. aus Ausschreibungen. Sämtliche Vergütungen sind bereits in der Versicherungsprämie enthalten und müssen
von Ihnen nicht gesondert gezahlt werden.
        </p>
        <p className="mt-2">
        Sollten Sie im Zusammenhang mit meiner Beratung einmal Anlass zur Beschwerde haben, so können Sie sich an unser
        Kundenservice-Center, Telefon 0800 3746 017 wenden.
        </p>
        <p className="mt-2">
        Darüber hinaus nehme ich verpflichtend an folgenden außergerichtlichen Schlichtungsstellen als Streitbeilegungsstellen i.S.d.
        Verbraucherstreitbeilegungsgesetzes teil:
        </p>

        <ul className="list-disc ml-2 w-full mt-2">
              <li>
              Der Ombudsmann Private Kranken- und Pflegeversicherung, Postfach 06 02 22, 10052 Berlin, Telefon: 0800 / 2 55 04 44,
Fax: 030 / 20 45 89 31, www.pkv-ombudsmann.de, sofern es um Streitigkeiten im Zusammenhang mit privaten Kranken- oder
Pflegeversicherungen geht.
              </li>
              <li className="mt-2">
              Der Versicherungsombudsmann e.V., Postfach 080632, 10006 Berlin, Telefon: 0800 / 3 69 60 00, Fax: 0800 / 3 69 90 00,
E-Mail: beschwerde@versicherungsombudsmann.de, http://www.versicherungsombudsmann.de, sofern es um Streitigkeiten im
Zusammenhang mit anderen privaten Versicherungen geht (außer privaten Krankenversicherungen, Kreditversicherungen u.,
Rückversicherungen).
</li>
            </ul>
            <p className="mt-2">
Information zur Online-Streitbeilegung: Die Europäische Kommission stellt zusätzlich eine Plattform für die außergerichtliche
Online-Streitbeilegung (OS-Plattform) bereit, die unter
            </p>

 <p className="mt-2">www.ec.europa.eu/consumers/odr</p>
 <p className="mt-2">
aufrufbar ist. Die OS-Plattform dient als Anlaufstelle zur außergerichtlichen Beilegung von Streitigkeiten betreffend vertragliche
Verpflichtungen, die aus online abgeschlossenen Verträgen erwachsen.
 </p>
              
        </div>

      </div>
      </div>
    );
  }