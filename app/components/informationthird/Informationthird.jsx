"use client";
import Link from 'next/link';
import { useState } from 'react';

const Informationthird = ({language}) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = (event) => {
    event.preventDefault(); // Prevent the default anchor click behavior
    setIsVisible(!isVisible);
  };

  return (
    <>
    <div className='p-1 md:p-32 md:pb-5 md:pt-2'>
      <div className="p-6 w-full mx-auto my-6 rounded-lg">
        <h2 className="font-bold text-[#ed8b55] md:text-xl">
        {language === 'de' ? 
            'HINWEIS: Wichtiges aus dem Vermittlerrecht' 
            : 
            'Important Information on Brokerage Law'
            }
          
        </h2>
        <p className="mt-4 mb-2 text-sm md:text-lg font-serif">
        {language === 'de' ? 
            'Ich bin verpflichtet, Ihnen Auskünfte zu meiner Person zu geben. Sowohl Ihr Schutz als Verbraucher sowie auch gesetzliche Regelungen halten mich dazu an. Ich biete Beratung an, für die Versicherungsvermittlung erhalte ich Provision, ferner sonstige Zuwendungen.' 
            : 
            'I am obligated to provide you with information about myself. Both your protection as a consumer and legal regulations require me to do so. I offer advice and receive a commission for insurance mediation, as well as other forms of compensation'
            }
        </p>
        <a href="#" className="text-[#c25115] cursor-pointer text-sm md:text-lg" onClick={toggleVisibility}>
        {language === 'de' ? 
            'Mehr Informationen' 
            : 
            'More Informations'
            }
          
        </a>
        {isVisible && (
  <div className="mt-4 p-2 md:p-4 bg-white border border-[#ed8b55] text-sm md:text-lg font-serif">
    <p>
    {language === 'de' ? 
    'Ich bin als gebundener Versicherungsvertreter mit Erlaubnis nach § 34d Abs.7 GewO im Vermittlerregister:' 
    : 
    'I am a tied insurance agent with authorization under § 34d Abs.7 GewO in the intermediary register: Chamber of Commerce '
    }
      
      <br />
      {language === 'de' ? 
    'Handelskammer Hamburg, Adolphsplatz 1, 20457 Hamburg, Registrierungsnummer: D-MX9s-1OUV3-20, D-MX9s-1OUV3-20' 
    : 
    'Hamburg, Adolphsplatz 1, 20457 Hamburg, Registration number: D-MX9S-1OUV3-20I offer advice and currently represent the following insurance companies: '
    }
      
    </p>
    <p className="mt-2">
    {language === 'de' ? 
    'Ich biete Beratung an. Derzeit Vertretung folgender Versicherungsgesellschaften: ERGO Versicherung AG, ERGO Vorsorge Lebensversicherung AG, DKV Deutsche Krankenversicherung AG, ERGO Reiseversicherung AG, ERGO Krankenversicherung AG, ERGO Direkt Versicherung AG.' 
    : 
    'ERGO Versicherung AG, ERGO Vorsorge Lebensversicherung AG, DKV Deutsche Krankenversicherung AG, ERGO '
    }
    </p>
    <p className="mt-2">
      {language === 'de' ? 
      'Für die Versicherungsvermittlung und sonstige Versicherungsvertriebstätigkeiten erhalte ich Provisionen; ferner sonstige Zuwendungen z.B. aus Ausschreibungen. Sämtliche Vergütungen sind bereits in der Versicherungsprämie enthalten und müssen von Ihnen nicht gesondert gezahlt werden.' 
      : 
      'Reiseversicherung AG, ERGO Krankenversicherung AG, ERGO Direkt Versicherung AG.'
      }
    </p>
    <p className="mt-2">
      {language === 'de' ? 
      'Sollten Sie im Zusammenhang mit meiner Beratung einmal Anlass zur Beschwerde haben, so können Sie sich an unser Kundenservice-Center, Telefon 0800 3746 017 wenden.' 
      : 
      'or insurance mediation and other insurance distribution activities, I receive commissions as well as other forms of compensation, such as from tenders. All fees are already included in the insurance premium and do not need to be paid separately by you.If you have any complaints in connection with my advice, you can contact our customer service center at phone number 0800 3746 017.'
      }
    </p>
    <p className="mt-2">
      {language === 'de' ? 
      'Darüber hinaus nehme ich verpflichtend an folgenden außergerichtlichen Schlichtungsstellen als Streitbeilegungsstellen i.S.d. Verbraucherstreitbeilegungsgesetzes teil:' 
      : 
      'Additionally, I am required to participate in the following extrajudicial arbitration boards as dispute resolution bodies in accordance with the Consumer Dispute Resolution Act:'
      }
    </p>
    <ul className="list-disc pl-4 mt-2">
      <li>
        {language === 'de' ? 
        'Der Ombudsmann Private Kranken- und Pflegeversicherung, Postfach 06 02 22, 10052 Berlin, Telefon: 0800 / 2 55 04 44, Fax: 030 / 20 45 89 31, www.pkv-ombudsmann.de, sofern es um Streitigkeiten im Zusammenhang mit privaten Kranken- oder Pflegeversicherungen geht.' 
        : 
        'The Ombudsman for Private Health and Long-Term Care Insurance, P.O. Box 06 02 22, 10052 Berlin, Phone: 0800 / 2 55 04 44, Fax: 030 / 20 45 89 31, www.pkv-ombudsmann.de, for disputes related to private health or long-term care insurance.'
        }
      </li>
      <li className="mt-2">
        {language === 'de' ? 
        'Der Versicherungsombudsmann e.V., Postfach 080632, 10006 Berlin, Telefon: 0800 / 3 69 60 00, Fax: 0800 / 3 69 90 00, E-Mail: beschwerde@versicherungsombudsmann.de, http://www.versicherungsombudsmann.de, sofern es um Streitigkeiten im Zusammenhang mit anderen privaten Versicherungen geht (außer privaten Krankenversicherungen, Kreditversicherungen u.a., Rückversicherungen).' 
        : 
        'The Insurance Ombudsman e.V., P.O. Box 080632, 10006 Berlin, Phone: 0800 / 3 69 60 00, Fax: 0800 / 3 69 90 00, Email: beschwerde@versicherungsombudsmann.de, http://www.versicherungsombudsmann.de, for disputes related to other private insurance (excluding private health insurance, credit insurance, and reinsurance).'
        }
      </li>
    </ul>
    <p className="mt-2">
      {language === 'de' ? 
      'Information zur Online-Streitbeilegung: Die Europäische Kommission stellt zusätzlich eine Plattform für die außergerichtliche Online-Streitbeilegung (OS-Plattform) bereit, die unter www.ec.europa.eu/consumers/odr aufrufbar ist. Die OS-Plattform dient als Anlaufstelle zur außergerichtlichen Beilegung von Streitigkeiten betreffend vertragliche Verpflichtungen, die aus online abgeschlossenen Verträgen erwachsen.' 
      : 
      'Information on online dispute resolution: The European Commission also provides a platform for online extrajudicial dispute resolution (OS platform), accessible at www.ec.europa.eu/consumers/odr. The OS platform serves as a point of contact for extrajudicial resolution of disputes related to contractual obligations arising from online contracts."'
      }
    </p>
  </div>
)}

      </div>
    </div>
    <header className="bg-[#f2aa84] pt-7 pl-8 md:pl-12 relative h-44 w-full">
    <h1 className="text-white text-lg md:text-2xl font-semibold md:ml-24 mb-4">
          <Link href={`/impressum?language=${language}`}>{language === 'de' ? 'Impressum' : 'Imprint'}</Link>
        </h1>
        <h1 className="text-white text-lg md:text-2xl font-semibold md:ml-24 mb-4">
          <Link href={`/kontakt?language=${language}`}>{language === 'de' ? 'Kontakt' : 'Contact'}</Link>
        </h1>
        <h1 className="text-white text-lg md:text-2xl font-semibold md:ml-24">
          <Link href={`/datenschutz?language=${language}`}>{language === 'de' ? 'Datenschutz' : 'Data Protection'}</Link>
        </h1>
            </header>
    </>
    
  );
};

export default Informationthird;
