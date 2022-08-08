import React, { useEffect } from 'react';
import ImageCard from './ImageCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';



export default function ImageResults({
  results,
  perPage,
}) {

  // const handleScroll = (event) => {
  //   console.log('scrollTop: ', event.currentTarget.scrollTop);
  //   console.log('offsetHeight: ', event.currentTarget.offsetHeight);
  // }
  return (
    <div
      className="results"
    // onScroll={handleScroll}
    // style={{
    //   border: '3px solid black',
    //   width: '100%',
    //   height: '800px',
    //   overflow: 'scroll',
    // }}
    >
      <h1>Image Results</h1>
      <div className="image-grid">
        {results.map((imageData) => (
          <ImageCard
            key={imageData.id}
            image={imageData}
          />
        ))}
      </div>
    </div>
  )
}