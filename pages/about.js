import React from 'react';
import { Card } from 'react-bootstrap';
import Link from 'next/link';
import ListingDetail from '@/components/ListingDetail';

import PageHeader from '@/components/PageHeader';

const about = ({ listing }) => {
  return (
    <div>
      <PageHeader text="About the Developer: Srushti Patel" />

      <Card>
        <Card.Body>
          <p>
            Welcome to SP site World!
            <br />
            <br />
  I'm Srushti Patel, currently pursuing the Computer Programming course at Seneca College, with just one semester left before graduation. Engaged in a thrilling web project, my sights are set on becoming a proficient full-stack developer. With a passion for innovation and a commitment to continuous learning, I'm excited to harness the power of technology to create impactful solutions. Let's connect and embark on this coding journey together!
  If I ever designed my Bedroom , it would definetly looked something like this 

<Link href={`/listing/${listing._id}`} passHref>
              <Card.Link> Cute Tiny Family Room</Card.Link>
            </Link>

          </p>
          </Card.Body>
      </Card>

      
      <ListingDetail listing={listing} />
    </div>
  );
};

export async function getStaticProps() {
  try {
    const listingId = "18173787";
    const res = await fetch(`https://listingsapisp.onrender.com/api/listings/${listingId}`);
    const listing = await res.json();

    if (!listing) {
      console.error("Listing data is null or undefined");
      return {
        notFound: true,
      };
    }

    return {
      props: {
        listing,
      },
    };
  } catch (error) {
    console.error("Error fetching listing:", error);
    return {
      notFound: true,
    };
  }
}

export default about;
