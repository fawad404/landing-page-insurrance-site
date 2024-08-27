"use client";
import React, { useState } from 'react';
import ComHeader from '../comHeader/ComHeader';
import Link from 'next/link';

const TestSixteen = ({ data, onChange }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    phone: '',
    isChecked: '',
  });

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePhone = (phone) => {
    const regex = /^[0-9]{10,15}$/;
    return regex.test(phone);
  };

  const handleBlur = (field, value) => {
    let errorMsg = '';
    
    if (field === 'username') {
      if (value.trim() === '') {
        errorMsg = 'Username is required.';
      } else if(/\d/.test(value)){ 
        errorMsg = "Username should not contain numbers.";
        onChange(field, '');
      }else {
        setUsername(value);
        onChange(field, value);
      }
    }
    if (field === 'email') {
      if (!validateEmail(value)) {
        errorMsg = 'Please enter a valid email address.';
        onChange(field, '');
      } 
      else {
        setEmail(value);
        onChange(field, value);
      }
    }
    if (field === 'phone') {
      if (!validatePhone(value)) {
        errorMsg = 'Please enter a valid phone number (10-15 digits).';
        onChange(field, '');
      } else {
        setPhone(value);
        onChange(field, value);
      }
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: errorMsg,
    }));
  };

  const handleCheckboxChange = (e) => {
    const isChecked = e.target.checked;
    if (!isChecked) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        isChecked: 'You must agree to the privacy policy.',
      }));
      onChange('isChecked', false);
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        isChecked: '',
      }));
      onChange('isChecked', isChecked);
    }
    setIsChecked(isChecked);
  };

  return (
    <>
      <ComHeader />

      <div className="text-textColor flex items-center justify-center min-h-[55vh] p-4 mt-12 md:mt-8 font-fijala  md:ml-8">
        <div className="w-full max-w-5xl relative">
          <div className="relative">
            <h1 className="text-xl md:text-2xl italic text-[#c25115] mb-4 hover-trigger">
              Ich möchte eine kostenlose und individuelle Chancen-Risiko-Analyse erhalten!​
            </h1>
          </div>
          <div className='pl-0 mb-6 text-[#c25115] w-full md:w-2/4 mx-auto mt-8'>
            <label className="flex items-center space-x-3">
              Vorname, Nachname <span>(Pflichtfeld)​</span>
            </label>
            <input
              type="text"
              onBlur={(e) => handleBlur('username', e.target.value)}
              className="bg-[#fbe3d6] text-lg h-12 text-gray-900 placeholder-white rounded-md border-none px-2 py-0 focus:outline-none focus:ring-2 focus:ring-[#c04f15] focus:ring-opacity-50 w-full"
              placeholder=""
            />
            {errors.username && <p className="text-red-500 mt-1">{errors.username}</p>}
          </div>
          <div className='pl-0 mb-6 text-[#c25115] w-full md:w-2/4 mx-auto mt-8'>
            <label className="flex items-center space-x-3">
              Email-Adresse<span>(Pflichtfeld)​​</span>
            </label>
            <input
              type="email"
              onBlur={(e) => handleBlur('email', e.target.value)}
              className="bg-[#fbe3d6] text-lg h-12 text-gray-900 placeholder-white rounded-md border-none px-2 py-0 focus:outline-none focus:ring-2 focus:ring-[#c04f15] focus:ring-opacity-50 w-full"
              placeholder=""
            />
            {errors.email && <p className="text-red-500 mt-1">{errors.email}</p>}
          </div>
          <div className='pl-0 mb-6 text-[#c25115] w-full md:w-2/4 mx-auto mt-8'>
            <label className="flex items-center space-x-3">
              Telefon-/Mobilnummer<span>(Pflichtfeld)​​</span>
            </label>
            <input
              type="text"
              onBlur={(e) => handleBlur('phone', e.target.value)}
              className="bg-[#fbe3d6] text-lg h-12 text-gray-900 placeholder-white rounded-md border-none px-2 py-0 focus:outline-none focus:ring-2 focus:ring-[#c04f15] focus:ring-opacity-50 w-full"
              placeholder=""
            />
            {errors.phone && <p className="text-red-500 mt-1">{errors.phone}</p>}
          </div>
          <p className='pl-0 md:w-2/4 mx-auto mb-6 text-[#c25115] mt-8'>Datenschutzerklärung.</p>
          <div className='pl-0 mb-6 text-[#c25115] mt-8 items-center flex w-2/4 mx-auto'>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
              className="form-checkbox h-7 w-7 mr-3"
            />
            <span>
              <Link href="/">
                Ja, ich habe die Informationen zum Datenschutz zur Kenntnis genommen und bin einverstanden.
              </Link>
            </span>
          </div>
          {errors.isChecked && <p className="text-red-500 mt-1 w-2/4 mx-auto">{errors.isChecked}</p>}
        </div>
      </div>
    </>
  );
};

export default TestSixteen;
