import { useRouter } from 'next/router';
import useSWR from 'swr';
import ListingDetail from '@/components/ListingDetail';
import Error from 'next/error'
import PageHeader from '@/components/PageHeader';

export default function Listing() {
  const router = useRouter();
  const { id } = router.query;

  const { data, error, isValidating } = useSWR(id ? `https://listingsapisp.onrender.com/api/listings/${id}`:null);

  if (isValidating) {
    return null; 
  }

  if (!data || error ) {
    return<Error statusCode={404} /> ; 
  }

  return (
    <div>
      <PageHeader text={data.name}/>
      <ListingDetail listing={data} />
    </div>
  );
}
  //const { data, error, isValidating } = useSWR(`https://listingsapisp.onrender.com/api/listings/${id}`);
