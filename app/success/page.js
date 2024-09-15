'use client';

// Import Suspense from React
import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import TestSeventeen from '../components/testSeventeen/TestSeventeen';

const PageContent = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get('language');

  React.useEffect(() => {
    //console.log('Query changed:', search);
  }, [search]);

  return <TestSeventeen language={search}/>
};

const Page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PageContent />
    </Suspense>
  );
};

export default Page;
