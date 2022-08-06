import React from 'react';
import ImageCard from './ImageCard';

export default function ImageResults({
  results,
  perPage,
}) {
  return (
    <div className="results">
      <h1>Image Results</h1>
      {results.map((imageData) => (
        <ImageCard
          key={imageData.id}
          image={imageData}
        />
      ))}
    </div>
  )
}