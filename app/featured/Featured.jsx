"use client"

import { useRouter } from "next/navigation";

const Featured = () => {
    const router = useRouter();
  return (
    <>
    <header className="bg-white flex justify-between items-center p-6 relative h-16 md:h-20 w-full z-10">
    
    <img
      src="/a-landing-page-removebg-preview.png"
      alt="PKV-GKV Logo"
      className="object-cover absolute h-24 md:h-36 top-2 md:top-3 start-2 md:start-8 "
      />
  
</header>
    <section className="relative pb-20 xl:pb-32 overflow-hidden">
      <img
        className="absolute bottom-0 left-0 w-full h-full object-cover"
        src="https://img.freepik.com/free-photo/cute-family-playing-summer-field_1157-36897.jpg"
        alt=""
      />
      <nav className="py-6 mb-12 md:mb-24 bg-white">
        <div className="container px-4 mx-auto"></div>
      </nav>
      <div className="container px-4 mx-auto relative">
        <div className="max-w-4xl mx-auto md:mx-3 text-left">
          <h1 className="text-xl md:text-4xl lg:text-6xl text-[#c04f15] mb-3 md:mb-8 font-abc font-bold" style={{lineHeight: '1.3'}}>
            Gesetzliche oder private Krankenversicherung?
          </h1>
          <p className="text-[#df8556] text-lg md:text-2xl font-abc font-semibold lg:text-4xl mb-2 md:mb-6 lg:mb-8">
            Wo bin ich am besten aufgehoben?
          </p>
          <p className="text-gray-700 text-base lg:text-xl mb-6 max-w-80 md:max-w-lg lg:max-w-2xl">
            Mach den kostenlosen PKV-GKV Scheck und unsere Experten senden Ihnen eine individuelle und ausführliche Chancen-Risiko-Bewertung per Email!
          </p>

        </div>
        <div className="flex justify-center mt-8">
            <button 
            onClick={()=> router.push('/testpage')}
            className="bg-[#c25115] text-white px-10 py-3 rounded-md hover:bg-orange-700 italic">
            Los geht&apos;s!

            </button>
</div>
      </div>
    </section>
        </>
  );
};

export default Featured;
