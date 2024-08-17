"use client"
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const UserAppointment = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [agreement, setAgreement] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
  
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted');
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Phone:', phone);
        console.log('Date:', selectedDate);
        console.log('Agreement:', agreement);
    };

    return (
        <>
        <header className="bg-[#f97316] flex justify-between items-center p-6">
        <h1 className="text-white font-semibold text-xl md:text-xl">
          Terminbuchung für ein Onlinemeeting
        </h1>
        <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center">
          <img
            src="/a-landing-page-removebg-preview.png"
            alt="PKV-GKV Logo"
            className="object-contain"
          />
        </div>
      </header>
        <section className="bg-white py-4 md:p-10">
            <div className="w-full mx-auto flex flex-col md:flex-row items-center bg-white p-6 rounded-lg">
                <div className="md:w-2/4 md:p-16 p-2 pb-0">
                    <p className="text-orange-500 font-semibold mb-4 text-sm md:text-xl font-sans">
                        - Markt- Tarifvergleich
                    </p>
                    <p className="text-gray-700 mb-4 text-sm md:text-xl font-serif lg:w-4/5">
                        Buchen Sie hier einen kostenlosen Termin mit unserem Fachberater zum Thema „Markt- und Tarifvergleich. Nach Terminbuchung erhalten Sie eine Bestätigung per Email und den Link für das Onlinemeeting
                    </p>
                    <div className="flex justify-center md:justify-start mt-8">
                    <img
        src="/a-landing-page-removebg-preview.png"
        alt="PKV - GKV Check"
        className="h-36 md:h-36 lg:h-52"
      />
                    </div>
                </div>
                <div className="md:w-2/4 flex justify-start md:justify-start mt-6 md:mt-0">
                    <div className="max-w-md mx-auto p-6 rounded-md">
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-[#C55630]">
                                    Vorname, Nachname
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="mt-1 block w-full bg-[#FBEDE5] border border-[#C55630] rounded-md py-2 px-3 text-base text-[#C55630] placeholder-[#C55630] focus:outline-none focus:ring-2 focus:ring-[#C55630]"
                                    placeholder=""
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-[#C55630]">
                                    Email-Adresse
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="mt-1 block w-full bg-[#FBEDE5] border border-[#C55630] rounded-md py-2 px-3 text-base text-[#C55630] placeholder-[#C55630] focus:outline-none focus:ring-2 focus:ring-[#C55630]"
                                    placeholder=""
                                />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-[#C55630]">
                                    Telefon-/Mobilnummer
                                </label>
                                <input
                                    type="text"
                                    id="phone"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    className="mt-1 block w-full bg-[#FBEDE5] border border-[#C55630] rounded-md py-2 px-3 text-base text-[#C55630] placeholder-[#C55630] focus:outline-none focus:ring-2 focus:ring-[#C55630]"
                                    placeholder=""
                                />
                            </div>
                            <div>
                                <label htmlFor="date" className="block text-sm font-medium text-[#C55630]">
                                    Select Date
                                </label>
                                <DatePicker
                                    selected={selectedDate}
                                    onChange={(date) => setSelectedDate(date)}
                                    className="mt-1 block w-full bg-[#FBEDE5] border border-[#C55630] rounded-md py-2 px-3 text-base text-[#C55630] focus:outline-none focus:ring-2 focus:ring-[#C55630]"
                                    placeholderText="Choose a date"
                                />
                            </div>
                            <div className=''>
                                <label htmlFor="agreement" className="font-medium text-[#C55630]">
                                    Datenschutzerklärung
                                </label>
                            </div>
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input
                                        id="agreement"
                                        type="checkbox"
                                        checked={agreement}
                                        onChange={(e) => setAgreement(e.target.checked)}
                                        className="focus:ring-[#C55630] h-4 w-4 text-[#C55630] border border-[#C55630] rounded"
                                    />
                                </div>
                                <div className="ml-3 text-sm">
                                    <p className="text-[#C55630]">
                                        Ja, ich habe die Informationen zum Datenschutz zur Kenntnis genommen und bin einverstanden.
                                    </p>
                                </div>
                            </div>
                            <div className="flex justify-center mt-4">
                                <button
                                    type="submit"
                                    className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-700 italic"
                                >
                                    Submit
                                </button>
                                </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default UserAppointment;
