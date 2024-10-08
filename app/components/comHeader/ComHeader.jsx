"use client"
import Link from 'next/link'
import React from 'react'

const ComHeader = ({ language }) => {
  return (
    <header className="bg-[#f2aa84] flex justify-between items-center p-6 relative h-20 w-full">
    <div className="p-10  mt-10 md:pl-24">
          <Link  href="/" className="text-white text-slate font-canadara underline">
          {language === 'en' ? 
          'Home' 
          :
           'Home'
           }
          </Link>
        </div>
      <img
        src="/a-landing-page-removebg-preview.png"
        alt="PKV-GKV Logo"
        className="absolute h-32 md:h-44 top-5 md:top-0 end-0 "
      />
    
  </header>
  )
}

export default ComHeader
