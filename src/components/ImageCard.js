import React from 'react';
import Col from 'react-bootstrap/Col';

export default function ImageCard({ image }) {
  return (
    <Col>
      <div className="image-card">
        <p>{image.tags}</p>
        <img src={image.largeImageURL} alt={image.tags} />
        {/* <span>Taken by: {image.user}</span> */}
      </div>
    </Col>
  )
}
