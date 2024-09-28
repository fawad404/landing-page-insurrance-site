"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const EnglishUserrAppoinment = ({ headContent , description}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [agreement, setAgreement] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState('09:00');
    const [success, setSuccess] = useState('');
    const [errors, setErrors] = useState({});
    const [catchError, setCatchError] = useState(false);

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
        
        return emailRegex.test(email);
    };
    

    const validatePhoneNumber = (phone) => {
        const phoneRegex = /^(\+|\d|[\/\-().\s]){7,20}$/;
        return phoneRegex.test(phone);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = {};

        // Username validation
        if (!name) {
            newErrors.name = 'Username is Required!';
        } else if (name.length > 40) {
            newErrors.name = 'Der Benutzername darf nicht länger als 40 Zeichen sein!';
        }

        // Email validation
        if (!email) {
            newErrors.email = 'E-Mail is Required!';
        } else if (!validateEmail(email)) {
            newErrors.email = 'Bitte geben Sie eine gültige E-Mail-Adresse ein!';
        }

        // Phone validation
        if (!phone) {
            newErrors.phone = 'Phone Number is Required!';
        } else if (!validatePhoneNumber(phone)) {
            newErrors.phone = 'Bitte geben Sie eine gültige Telefonnummer ein!';
        }

        // Date validation
        if (!selectedDate) {
            newErrors.date = 'Date is Required!';
        }

        // Time validation
        if (!selectedTime) {
            newErrors.time = 'Time is Required!';
        }

        // Agreement validation
        if (!agreement) {
            newErrors.agreement = 'Please accept the privacy policy!';
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            return; // Do not submit if there are errors
        }

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
            if (result.message) {
                setSuccess(result.message);
            }
            console.log('Response from server:', result);
        } catch (error) {
            setCatchError(true);
            console.error('Error sending data:', error);
        }
    };

    // Handlers for updating input and clearing errors
    const handleNameChange = (e) => {
        setName(e.target.value);
        if (errors.name && e.target.value.length <= 40) {
            setErrors((prevErrors) => ({ ...prevErrors, name: '' }));
        }
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        if (errors.email && validateEmail(e.target.value)) {
            setErrors((prevErrors) => ({ ...prevErrors, email: '' }));
        }
    };

    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
        if (errors.phone && validatePhoneNumber(e.target.value)) {
            setErrors((prevErrors) => ({ ...prevErrors, phone: '' }));
        }
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
        if (errors.date) {
            setErrors((prevErrors) => ({ ...prevErrors, date: '' }));
        }
    };

    const handleAgreementChange = (e) => {
        setAgreement(e.target.checked);
        if (errors.agreement && e.target.checked) {
            setErrors((prevErrors) => ({ ...prevErrors, agreement: '' }));
        }
    };

    // Generate time options from 09:00 to 19:00 in 24-hour format
    const timeOptions = [];
    for (let hour = 9; hour <= 19; hour++) {
        for (let minute = 0; minute < 60; minute += 30) {
            const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
            timeOptions.push(time);
        }
    }

    return (
        <>
            <header className="bg-[#f2aa84] flex justify-between p-8 relative h-24 md:h-28 w-full">
            <h1 className="text-white text-lg md:text-2xl font-semibold md:ml-24">
                    Terminbuchung für ein Onlinemeeting <br />
                    <span className='text-lg mt-1'>{headContent}</span>
                </h1>
                <img
                    src="/a-landing-page-removebg-preview.png"
                    alt="PKV-GKV Logo"
                    className="hidden md:block absolute h-32 md:h-48 top-12 md:top-5 end-0"
                />
            </header>

            <div className="md:p-32 md:pt-8 md:pb-0">
          <Link href='/'
              className="text-[#f2aa84] font-semibold text-2xl underline hover:text-orange-700"
              >
              Back
            </Link>
              </div>
            <section className="bg-white py-4 md:p-10">
                <div className="w-full mx-auto flex flex-col md:flex-row items-center bg-white p-6 rounded-lg">
                    <div className="md:w-2/4 md:p-16 p-2 pb-0">
                        
                        <p className="text-gray-500 mb-4 text-sm md:text-2xl font-serif lg:w-4/5">
                        Book a free appointment with our expert advisor on ‘{description}&apos; here. After booking, you will receive a confirmation by email and the link for the online meeting.
                        </p>
                        <div className="flex justify-center md:justify-start mt-16">
                            <img
                                src="/straight-a-landing-page-removebg-preview.png"
                                alt="PKV - GKV Check"
                                className="h-36 md:h-72 lg:h-80"
                            />
                        </div>
                    </div>
                    <div className="md:w-2/4 flex justify-start md:justify-start mt-6 md:mt-0">
                        <div className="max-w-md mx-auto p-6 rounded-md">
                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-[#c04f15]">
                                    Name, Surname
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="mt-1 block w-full bg-[#FBEDE5] border border-[#c04f15] rounded-md py-2 px-3 text-base text-[#c04f15] placeholder-[#c04f15] focus:outline-none focus:ring-2 focus:ring-[#c04f15]"
                                        placeholder=""
                                    />
                                    {errors.name && <p className='font-medium text-[#f92222]'>{errors.name}</p>}
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-[#c04f15]">
                                    Email-adress
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="mt-1 block w-full bg-[#FBEDE5] border border-[#c04f15] rounded-md py-2 px-3 text-base text-[#c04f15] placeholder-[#c04f15] focus:outline-none focus:ring-2 focus:ring-[#c04f15]"
                                        placeholder=""
                                    />
                                    {errors.email && <p className='font-medium text-[#f92222]'>{errors.email}</p>}
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-[#c04f15]">
                                    Phonenumber
                                    </label>
                                    <input
                                        type="text"
                                        id="phone"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        className="mt-1 block w-full bg-[#FBEDE5] border border-[#c04f15] rounded-md py-2 px-3 text-base text-[#c04f15] placeholder-[#c04f15] focus:outline-none focus:ring-2 focus:ring-[#c04f15]"
                                        placeholder=""
                                    />
                                    {errors.phone && <p className='font-medium text-[#f92222]'>{errors.phone}</p>}
                                </div>
                                <div>
                                    <label htmlFor="date" className="block text-sm font-medium text-[#c04f15]">
                                    Choose a date
                                    </label>
                                    <DatePicker
                                        selected={selectedDate}
                                        onChange={(date) => setSelectedDate(date)}
                                        className="mt-1 block w-full bg-[#FBEDE5] border border-[#c04f15] rounded-md py-2 px-3 text-base text-[#c04f15] focus:outline-none focus:ring-2 focus:ring-[#c04f15]"
                                        placeholderText="Choose a date"
                                    />
                                    {errors.date && <p className='font-medium text-[#f92222]'>{errors.date}</p>}
                                </div>
                                <div>
                                    <label htmlFor="time" className="block text-sm font-medium text-[#c04f15]">
                                    Choose a time
                                    </label>
                                    <select
                                        id="time"
                                        value={selectedTime}
                                        onChange={(e) => setSelectedTime(e.target.value)}
                                        className="mt-1 block w-full bg-[#FBEDE5] border border-[#c04f15] rounded-md py-2 px-3 text-base text-[#c04f15] focus:outline-none focus:ring-2 focus:ring-[#c04f15]"
                                    >
                                        {timeOptions.map((time) => (
                                            <option key={time} value={time}>
                                                {time}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.time && <p className='font-medium text-[#f92222]'>{errors.time}</p>}
                                </div>
                                <div className=''>
                                    <label htmlFor="agreement" className="font-medium text-[#c04f15]">
                                    Data protection agreement

                                    </label>
                                </div>
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input
                                            id="agreement"
                                            type="checkbox"
                                            checked={agreement}
                                            onChange={(e) => setAgreement(e.target.checked)}
                                            className="focus:ring-[#c04f15] h-4 w-4 text-[#c04f15] border border-[#c04f15] rounded"
                                        />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <p className="text-[#c04f15]">
                                            <Link href="/datenschutz">
                                            Yes, I have taken note of the information on data protection and agree.
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                                {errors.agreement && <p className='font-medium text-[#f92222]'>{errors.agreement}</p>}
                                <div className="flex justify-center mt-4">
                                    <button
                                        type="submit"
                                        className="bg-[#c04f15] text-white px-6 py-2 rounded-md hover:bg-orange-700 italic"
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
}

export default EnglishUserrAppoinment;
