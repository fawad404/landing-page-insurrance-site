'use client';

// Import necessary modules
import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Datenschutz from '../components/datenschutz/Datenschutz';
import DataProtections from '../components/dataProtection/DataProtections';

// Define the main content component
const PageContent = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get('language');

  React.useEffect(() => {
    console.log('Query changed:', search);
  }, [search]); // This useEffect will run whenever the query changes

  if (search === 'en') {
    return <DataProtections />;
  } else {
    return <Datenschutz />;
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
