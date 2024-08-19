"use client";
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const UserAppointment = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [agreement, setAgreement] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState('09:00 AM'); // Default time
    const [success, setSuccess] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();
        if (!name || !email || !phone || !selectedDate || !selectedTime) {
            alert('Please fill all details');
            return;
        }
        if (!agreement) {
            alert('Please checkmark the agreement');
            return;
        }
        // Extract only the date part (YYYY-MM-DD)
        const formattedDate = selectedDate ? selectedDate.toISOString().split('T')[0] : null;

        const data = {
            name,
            email,
            phone,
            date: formattedDate,
            time: selectedTime
        };

        try {
            const response = await fetch('https://landing-page-insurrance-site.vercel.app/api/sendMailer', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();
            if(result.message){
                setSuccess(result.message)
            }
            console.log('Response from server:', result);
        } catch (error) {
            console.error('Error sending data:', error);
        }
    };

    // Generate time options from 9 AM to 7 PM in 12-hour format
    const timeOptions = [];
    for (let hour = 9; hour <= 12; hour++) {
        for (let minute = 0; minute < 60; minute += 30) {
            const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')} AM`;
            timeOptions.push(time);
        }
    }
    for (let hour = 1; hour <= 7; hour++) {
        for (let minute = 0; minute < 60; minute += 30) {
            const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')} PM`;
            timeOptions.push(time);
        }
    }

    return (
        <>
            <header className="bg-[#f2aa84] flex justify-between items-center p-12 relative h-24 md:h-28 w-full mt-8">
                <h1 className="text-white text-lg md:text-2xl font-semibold md:ml-24">
                    Terminbuchung für ein Onlinemeeting
                </h1>
                <img
                    src="/a-landing-page-removebg-preview.png"
                    alt="PKV-GKV Logo"
                    className="hidden md:block absolute h-32 top-12 end-0"
                />
            </header>

            <section className="bg-white py-4 md:p-10">
                <div className="w-full mx-auto flex flex-col md:flex-row items-center bg-white p-6 rounded-lg">
                    <div className="md:w-2/4 md:p-16 p-2 pb-0">
                        <p className="text-[#c25115] font-semibold mb-4 text-sm md:text-2xl font-sans">
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
                                    <label htmlFor="name" className="block text-sm font-medium text-[#c25115]">
                                        Vorname, Nachname
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="mt-1 block w-full bg-[#FBEDE5] border border-[#c25115] rounded-md py-2 px-3 text-base text-[#c25115] placeholder-[#c25115] focus:outline-none focus:ring-2 focus:ring-[#c25115]"
                                        placeholder=""
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-[#c25115]">
                                        Email-Adresse
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="mt-1 block w-full bg-[#FBEDE5] border border-[#c25115] rounded-md py-2 px-3 text-base text-[#c25115] placeholder-[#c25115] focus:outline-none focus:ring-2 focus:ring-[#c25115]"
                                        placeholder=""
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-[#c25115]">
                                        Telefon-/Mobilnummer
                                    </label>
                                    <input
                                        type="text"
                                        id="phone"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        className="mt-1 block w-full bg-[#FBEDE5] border border-[#c25115] rounded-md py-2 px-3 text-base text-[#c25115] placeholder-[#c25115] focus:outline-none focus:ring-2 focus:ring-[#c25115]"
                                        placeholder=""
                                    />
                                </div>
                                <div>
                                    <label htmlFor="date" className="block text-sm font-medium text-[#c25115]">
                                        Select Date
                                    </label>
                                    <DatePicker
                                        selected={selectedDate}
                                        onChange={(date) => setSelectedDate(date)}
                                        className="mt-1 block w-full bg-[#FBEDE5] border border-[#c25115] rounded-md py-2 px-3 text-base text-[#c25115] focus:outline-none focus:ring-2 focus:ring-[#c25115]"
                                        placeholderText="Choose a date"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="time" className="block text-sm font-medium text-[#c25115]">
                                        Select Time
                                    </label>
                                    <select
                                        id="time"
                                        value={selectedTime}
                                        onChange={(e) => setSelectedTime(e.target.value)}
                                        className="mt-1 block w-full bg-[#FBEDE5] border border-[#c25115] rounded-md py-2 px-3 text-base text-[#c25115] focus:outline-none focus:ring-2 focus:ring-[#c25115]"
                                    >
                                        {timeOptions.map((time) => (
                                            <option key={time} value={time}>
                                                {time}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className=''>
                                    <label htmlFor="agreement" className="font-medium text-[#c25115]">
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
                                            className="focus:ring-[#c25115] h-4 w-4 text-[#c25115] border border-[#c25115] rounded"
                                        />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <p className="text-[#c25115]">
                                            Ja, ich habe die Informationen zum Datenschutz zur Kenntnis genommen und bin einverstanden.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex justify-center mt-4">
                                    <button
                                        type="submit"
                                        className="bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-700 italic"
                                        disabled={success}
                                    >
                                        Submit
                                    </button>
                                  
                                    
                                </div>
                                {success && 
                                    <p className="text-gray-900 flex justify-center px-6 py-2 rounded-md hover:bg-orange-700">{success}</p>
                                }
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default UserAppointment;
