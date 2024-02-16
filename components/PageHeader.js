// PageHeader.js
import React from 'react';
import { Card } from 'react-bootstrap';

const PageHeader = (props) => {
  return (
    <div className="page-header">
      <Card className="bg-light">
        <Card.Body>
          <Card.Title>{props.text}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PageHeader;
