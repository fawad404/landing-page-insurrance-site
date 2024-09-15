'use client';

// Import Suspense from React
import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Contactfourth from '../components/contactfourth/Contactfourth';

const PageContent = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get('language');

  React.useEffect(() => {
    //console.log('Query changed:', search);
  }, [search]);

  return <Contactfourth language={search}/>
};

const Page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PageContent />
    </Suspense>
  );
};

export default Page;
