import React, { useState } from "react";
import ImageSearch from '../components/ImageSearch';

const API_KEY = process.env.REACT_APP_API_KEY;
const IMAGE_API = "https://pixabay.com/api/" + `?key=${API_KEY}`;

export default function ImageContainer() {
  const [images, setImages] = useState([])
  const [maxResults, setMaxResults] = useState('12');

  const fetchImages = (input) => {
    let query = input.split(' ').join('+');
    let imagesOnly = '&image_type=photo';
    let resultsPerPage = `&per_page=${maxResults}`
    let apiUrl = IMAGE_API.concat(`&q=${query}`, imagesOnly, resultsPerPage);

    fetch(apiUrl)
      .then(resp => resp.json())
      .then(imagesData => {
        if (imagesData.totalHits > 0) {
          setImages(imagesData.hits);
          console.log(imagesData.hits);
        } else {
          setImages([]);
        }

      })
  };

  return (
    <ImageSearch onSubmit={fetchImages} />
  );
}