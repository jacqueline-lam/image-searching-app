import React from 'react';
import Col from 'react-bootstrap/Col';

export default function ImageItem({ image }) {
  return (
    <div className="image-card">
      <Col xs>
        <h3>{image.tags}</h3>
        <img src={image.largeImageURL} alt={image.tags} />
        <span>Taken by: {image.user}</span>
      </Col>
    </div>

  )
}