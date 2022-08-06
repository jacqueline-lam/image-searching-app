import React, { useEffect, useState } from "react";
import ImageSearch from '../components/ImageSearch';

const API_KEY = process.env.REACT_APP_API_KEY;
const IMAGE_API = "https://pixabay.com/api/" + `?key=${API_KEY}`;

export default function ImageContainer() {
  const [images, setImages] = useState([]);
  const [maxResults, setMaxResults] = useState('20');
  const [searchInput, setSearchInput] = useState('');

  const fetchImages = (input) => {
    let query = input.split(' ').join('+');
    let imagesOnly = '&image_type=photo';
    let resultsPerPage = `&per_page=${maxResults}`
    let apiUrl = IMAGE_API.concat(`&q=${query}`, imagesOnly, resultsPerPage);
    return apiUrl;
  };

  // Send GET request to PixaBay API and store search results from resp in container states
  useEffect(() => {
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
      .catch(err => {
        console.error(err);
      });
  }, [searchInput, maxResults])

  return (
    <ImageSearch onSubmit={fetchImages} />
  );
}