import React from 'react';
import ImageCard from './ImageCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';



export default function ImageResults({
  results,
  perPage,
}) {
  return (
    <div className="results">
      <h1>Image Results</h1>
      <Container>
        <Row xs="auto">
          {results.map((imageData) => (
            <ImageCard
              key={imageData.id}
              image={imageData}
            />
          ))}
        </Row>
      </Container>
    </div>
  )
}