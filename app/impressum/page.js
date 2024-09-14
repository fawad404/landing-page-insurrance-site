'use client';

// Import Suspense from React
import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Impressumfifth from '../components/impressumfifth/Impressumfifth';
import EnglishImpressum from '../components/englishImpressum/EnglishImpressum';

const PageContent = () => {
  const searchParams = useSearchParams();
  const search = searchParams.get('language');

  React.useEffect(() => {
    console.log('Query changed:', search);
  }, [search]);

  if (search === 'en') {
    return <EnglishImpressum />;
  } else {
    return <Impressumfifth />;
  }
};

const Page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PageContent />
    </Suspense>
  );
};

export default Page;
