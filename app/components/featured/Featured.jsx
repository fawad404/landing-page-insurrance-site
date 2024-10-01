"use client"

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Featured = ({ language, toggleLanguage }) => {
    const router = useRouter();
   // console.log(language);
  return (
    <>
    <header className="bg-white flex justify-end items-center p-6 relative h-16 md:h-20 w-full z-10">
    
    <img
      src="/a-landing-page-removebg-preview.png"
      alt="PKV-GKV Logo"
      className="object-cover absolute h-36 md:h-48 top-0 md:-top-1 start-2 md:start-8 "
      />
      <img src={language === 'de' ? '/united-kingdom.png' : '/germany2.png'} alt="" className="h-6 mr-2"/>
        <Link href="#" onClick={toggleLanguage} className="mr-5 text-[#f2aa84] font-semibold text-slate underline hover:text-orange-700">
        {language === 'de' ? 'english' : 'deutsch'}
      </Link>  
</header>
    <section className="relative pb-20 xl:pb-32 overflow-hidden h-[28rem] sm:h-[26rem] md:h-[32rem]">
          <Image
        layout="fill"
        objectFit="cover"
        src="/featured-image.jpeg"
        alt=""
        priority={true}
        loading="eager"
      />

      <nav className="py-6 mb-12 md:mb-20 bg-white">
        <div className="container px-4 mx-auto"></div>
      </nav>
      <div className="container mt-16 md:mt-0 px-4 md:px-12  relative">
        <div className="max-w-60 sm:max-w-4xl  md:mx-3 text-left">
          <h1 className={`text-lg sm:text-3xl md:text-4xl lg:text-5xl text-[#c04f15] mb-3 md:mb-4 font-abc font-bold`} style={{lineHeight: '1.3'}}>
          {language === 'de' ? 'Gesetzliche oder private Krankenversicherung?' : 'Public or private health insurance?'
            }
          </h1>
          <p className="text-[#df8556] text-base sm:text-lg md:text-2xl font-abc font-semibold lg:text-2xl mb-2 md:mb-4">
          {language === 'de' ? 'Wo bin ich am besten aufgehoben?' : 'What is the best for me?'
            }
          </p>
          <p className="text-gray-500 text-base font-semibold lg:text-lg mb-2 md:mb-6 lg:mb-2 max-w-[20rem] md:max-w-[27rem] lg:max-w-[34rem]">
          {language === 'de' ? 
          ' Machen Sie den kostenlosen PKV–GKV–Check und unsere Experten senden Ihnen eine individuelle und ausführliche Chancen-Risiko-Bewertung per Email!' 
          : 
          'Take the free private vs. public health insurance check and our experts will send you an individual and detailed analyze and risk assessment via email!'
            }
           
           
          </p>

        </div>
        <div className="flex justify-center">
            <button 
            onClick={()=> router.push(`/testpage?language=${language}`)}
            className="bg-[#c25115] mb-2 md:mb-4 text-white px-6 text-base sm:px-10 md:px-20 py-3 sm:text-lg md:text-xl rounded-md hover:bg-orange-700 italic">
           {language === 'de' ? 
            'Los geht´s!' 
            : 
            'Let´s start'
            }
            

            </button>
</div>
      </div>
    </section>
        </>
  );
};

export default Featured;
