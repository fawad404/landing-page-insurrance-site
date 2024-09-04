"use client";
import React, { useEffect, useState } from 'react';
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

  useEffect(() => {
    // Retrieve the value from localStorage when the component mounts
    const storedUsername = localStorage.getItem('username');
    const storedEmail = localStorage.getItem('email');
    const storedPhone = localStorage.getItem('phone');
    const storedChecked = localStorage.getItem('isChecked');
    if (storedUsername) setUsername(storedUsername);
    if (storedEmail) setEmail(storedEmail);
    if (storedPhone) setPhone(storedPhone);
    if (storedChecked) setIsChecked(storedChecked);
  }, []);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone) => /^[0-9]{10,15}$/.test(phone);

  const handleChange = (field, value) => {
    switch (field) {
      case 'username':
        setUsername(value);
        localStorage.setItem('username', value);
        break;
      case 'email':
        setEmail(value);
        localStorage.setItem('email', value);
        break;
      case 'phone':
        setPhone(value);
        localStorage.setItem('phone', value);
        break;
      default:
        break;
    }
    // Validate the field and handle errors
    handleBlur(field, value);
  };

  const handleBlur = (field, value) => {
    let errorMsg = '';
    
    if (field === 'username') {
      if (value.trim() === '') {
        errorMsg = 'Username is required.';
      } else if (/\d/.test(value)) {
        errorMsg = "Username should not contain numbers.";
      }
    } 
    if (field === 'email') {
      if (!validateEmail(value)) {
        errorMsg = 'Please enter a valid email address.';
      }
    }
    if (field === 'phone') {
      if (!validatePhone(value)) {
        errorMsg = 'Please enter a valid phone number (10-15 digits).';
      }
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: errorMsg,
    }));
    
    // Check if all fields are valid
    if (!errorMsg && isChecked) {
      onChange('username', username);
      onChange('email', email);
      onChange('phone', phone);
      onChange('isChecked', isChecked);
    } 
    
    if(errorMsg === 'Please enter a valid phone number (10-15 digits).'){
      onChange('phone', '');
    }
    if(errorMsg === 'Please enter a valid email address.'){
      onChange('email', '');
    }
    if(errorMsg === 'Username should not contain numbers.' || errorMsg === 'Username is required.' ){
      onChange('username', '');
    }
  };

  const handleCheckboxChange = (e) => {
    const isChecked = e.target.checked;
    setIsChecked(isChecked);
    setErrors((prevErrors) => ({
      ...prevErrors,
      isChecked: isChecked ? '' : 'You must agree to the privacy policy.',
    }));
    
    // Check if all fields are valid
    if (isChecked && !errors.username && !errors.email && !errors.phone) {
      onChange('username', username);
      onChange('email', email);
      onChange('phone', phone);
      onChange('isChecked', isChecked);
    }else {
      onChange('isChecked', false);
    }
  };

  return (
    <>
      <ComHeader />

      <div className="text-textColor flex items-center justify-center min-h-[55vh] p-4 mt-12 md:mt-8 font-fijala md:ml-8">
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
              value={username}
              onChange={(e) => handleChange('username', e.target.value)}
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
              value={email}
              onChange={(e) => handleChange('email', e.target.value)}
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
              value={phone}
              onChange={(e) => handleChange('phone', e.target.value)}
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
              <Link href="/testpage/datenschutz">
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
