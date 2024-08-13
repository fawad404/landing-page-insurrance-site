"use client";
import { useState } from 'react';

const Informationthird = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = (event) => {
    event.preventDefault(); // Prevent the default anchor click behavior
    setIsVisible(!isVisible);
  };

  return (
    <div className='p-1 md:p-32'>
      <div className="p-6 bg-gray-50 w-full mx-auto my-6 rounded-lg">
        <h2 className="font-bold text-orange-600 md:text-xl">
          HINWEIS: Wichtiges aus dem Vermittlerrecht
        </h2>
        <p className="mt-4 max-w-xl mb-2 text-sm md:text-lg font-serif">
          Ich bin verpflichtet, Ihnen Auskünfte zu meiner Person zu geben. Sowohl Ihr Schutz als Verbraucher sowie auch gesetzliche Regelungen halten mich dazu an. Ich biete Beratung an, für die Versicherungsvermittlung erhalte ich Provision, ferner sonstige Zuwendungen.
        </p>
        <a href="#" className="text-blue-500 underline cursor-pointer text-sm md:text-lg" onClick={toggleVisibility}>
          Mehr Informationen
        </a>
        {isVisible && (
          <div className="mt-4 p-2 md:p-4 bg-white border border-orange-600 text-sm md:text-lg font-serif">
            <p>
              Ich bin als gebundener Versicherungsvertreter mit Erlaubnis nach § 34d Abs.7 GewO im Vermittlerregister:
              <br />
              Handelskammer Hamburg, Adolphsplatz 1, 20457 Hamburg, Registrierungsnummer: D-MX9s-1OUV3-20, D-MX9s-1OUV3-20
            </p>
            <p className="mt-2">
              Ich biete Beratung an. Derzeit Vertretung folgender Versicherungsgesellschaften: ERGO Versicherung AG, ERGO Vorsorge Lebensversicherung AG, DKV Deutsche Krankenversicherung AG, ERGO Reiseversicherung AG, ERGO Krankenversicherung AG, ERGO Direkt Versicherung AG.
            </p>
            <p className="mt-2">
              Für die Versicherungsvermittlung und sonstige Versicherungsvertriebstätigkeiten erhalte ich Provisionen; ferner sonstige Zuwendungen z.B. aus Ausschreibungen. Sämtliche Vergütungen sind bereits in der Versicherungsprämie enthalten und müssen von Ihnen nicht gesondert gezahlt werden.
            </p>
            <p className="mt-2">
              Sollten Sie im Zusammenhang mit meiner Beratung einmal Anlass zur Beschwerde haben, so können Sie sich an unser Kundenservice-Center, Telefon 0800 3746 017 wenden.
            </p>
            <p className="mt-2">
              Darüber hinaus nehme ich verpflichtend an folgenden außergerichtlichen Schlichtungsstellen als Streitbeilegungsstellen i.S.d. Verbraucherstreitbeilegungsgesetzes teil:
            </p>
            <ul className="list-disc pl-4 mt-2">
              <li>
                Der Ombudsmann Private Kranken- und Pflegeversicherung, Postfach 06 02 22, 10052 Berlin, Telefon: 0800 / 2 55 04 44, Fax: 030 / 20 45 89 31, www.pkv-ombudsmann.de, sofern es um Streitigkeiten im Zusammenhang mit privaten Kranken- oder Pflegeversicherungen geht.
              </li>
              <li className="mt-2">
                Der Versicherungsombudsmann e.V., Postfach 080632, 10006 Berlin, Telefon: 0800 / 3 69 60 00, Fax: 0800 / 3 69 90 00, E-Mail: beschwerde@versicherungsombudsmann.de, http://www.versicherungsombudsmann.de, sofern es um Streitigkeiten im Zusammenhang mit anderen privaten Versicherungen geht (außer privaten Krankenversicherungen, Kreditversicherungen u.a., Rückversicherungen).
              </li>
            </ul>
            <p className="mt-2">
              Information zur Online-Streitbeilegung: Die Europäische Kommission stellt zusätzlich eine Plattform für die außergerichtliche Online-Streitbeilegung (OS-Plattform) bereit, die unter www.ec.europa.eu/consumers/odr aufrufbar ist. Die OS-Plattform dient als Anlaufstelle zur außergerichtlichen Beilegung von Streitigkeiten betreffend vertragliche Verpflichtungen, die aus online abgeschlossenen Verträgen erwachsen.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Informationthird;
