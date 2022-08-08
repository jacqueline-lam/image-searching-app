import React from 'react';

export default function ImageCard({ image }) {
  return (
    <div className="item image-card">
      <p>{image.tags}</p>
      <img src={image.largeImageURL} alt={image.tags} />
      {/* <span>Taken by: {image.user}</span> */}
    </div>
  )
}
