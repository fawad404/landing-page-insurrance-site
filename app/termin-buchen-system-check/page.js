'use client';

// Import necessary modules
import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
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
    return <EnglishUserrAppoinment headContent={'System comparison ,,PKV-GKV”'} description={'PKV vs GKV System Comparison'}/>;
  } else {
    return <UserAppointment headContent={'Systemvergleich ,,PKV-GKV”'} description={'PKV-GKV Systemvergleich'}/>;
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
