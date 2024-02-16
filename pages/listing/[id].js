import React from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import ListingDetail from '@/components/ListingDetail';
import PageHeader from '@/components/PageHeader';

const Listing = () => {
  const router = useRouter();
  const { id } = router.query;

  // Fetch data using SWR
  const { data, error, isValidating } = useSWR(`https://listingsapisp.onrender.com/api/listings/${id}`);

  // If data is still loading, return null
  if (isValidating) {
    return null;
  }

 
  if (error) {
    
    return <p>Listing not found!</p>;
  }

  if (!data) {
    return <p>Listing not found!</p>;
  }

  const { name } = data;

  return (
    <div>
      {/* PageHeader with listing's "name" property */}
      <PageHeader text={`Listing: ${name}`} />

      {/* ListingDetails with "listing" property */}
      <ListingDetail listing={data} />
    </div>
  );
};

export default Listing;
  //const { data, error, isValidating } = useSWR(`https://listingsapisp.onrender.com/api/listings/${id}`);
