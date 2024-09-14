'use client';

// Import necessary modules
import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Impressumfifth from '../components/impressumfifth/Impressumfifth';
import EnglishImpressum from '../components/englishImpressum/EnglishImpressum';
import UserAppointment from '../components/userAppointment/UserAppointment';
import EnglishUserrAppoinment from '../components/englishUserrAppoinment/EnglishUserrAppoinment';

// Define the main content component
const PageContent = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get('language');

  React.useEffect(() => {
    console.log('Query changed:', search);
  }, [search]); // This useEffect will run whenever the query changes

  if (search === 'en') {
    return <EnglishUserrAppoinment />;
  } else {
    return <UserAppointment />;
  }
};

// Define the Page component with Suspense
const Page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PageContent />
    </Suspense>
  );
};

export default Page;
