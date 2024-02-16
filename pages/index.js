/*********************************************************************************
*  WEB422 – Assignment 3
*
*  I declare that this assignment is my own work in accordance with Seneca's
*  Academic Integrity Policy:
* 
*  https://www.senecapolytechnic.ca/about/policies/academic-integrity-policy.html
* 
*  Name: Srushti Patel Student ID: 117791228 Date: 16/02/2024
*
********************************************************************************/ 
import { useState, useEffect } from 'react';
import useSWR from 'swr';
import { Pagination, Accordion } from 'react-bootstrap';
import ListingDetail from '@/components/ListingDetail';
import PageHeader from '@/components/PageHeader';

const Home = () => {
  const [page, setPage] = useState(1);
  const [pageData, setPageData] = useState([]);

  const { data, error } = useSWR(`https://listingsapisp.onrender.com/api/listings?page=${page}&perPage=10`);

  useEffect(() => {
    if (data) {
      setPageData(data);
    }
  }, [data]);

  const previous = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const next = () => {
    setPage(page + 1);
  };

  return (
    <div>
      
      <PageHeader text="Browse Listings : Sorted by Number of Ratings..." />

     
      <Accordion>
        {pageData.map((listing) => (
          <Accordion.Item key={listing._id} eventKey={listing._id}>
            <Accordion.Header>
              <strong>{listing.name}</strong> - {listing.address.street}
            </Accordion.Header>
            <Accordion.Body>
              <ListingDetail listing={listing} />
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>

   
      <Pagination>
        <Pagination.Prev onClick={previous} />
        <Pagination.Item>{page}</Pagination.Item>
        <Pagination.Next onClick={next} />
      </Pagination>
    </div>
  );
};

export default Home;