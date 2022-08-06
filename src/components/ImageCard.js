import React from 'react';

export default function ImageItem({ image }) {
  return (
    <div className="image-card">
      <h3>{image.tags}</h3>
      <img src={image.largeImageURL} alt={image.tags} />
      <span>Taken by: {image.user}</span>
    </div>

  )
}