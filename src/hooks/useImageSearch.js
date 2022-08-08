import React, { useState, useEffect, useCallback } from 'react';

const API_KEY = process.env.REACT_APP_PIXABAY_API_KEY;
const IMAGE_API = "https://pixabay.com/api/" + `?key=${API_KEY}`;

export default function useImageSearch({ input, maxResults }) {
  const [loading, setLoading] = useSate(true);
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const sendQuery = useCallback((input) => {

  })
  let query = input.split(' ').join('+');
  let imagesOnly = '&image_type=photo';
  let resultsPerPage = `&per_page=${maxResults}`
  let apiUrl = IMAGE_API.concat(`&q=${query}`, imagesOnly, resultsPerPage);

  fetch(apiUrl)
    .then(resp => resp.json())
    .then(imagesData => {
      if (imagesData.totalHits > 0) {
        console.log(imagesData.totalHits);
        return (imagesData.hits);
      } else {
        return ([]);
      }
    })
    .catch(err => {
      console.error(err);
    });

  useEffect(() => {
    sendQuery(input);
  }, [input, sendQuery, maxResults]);

  // Send GET request to PixaBay API and store search results from resp in container states
  // useEffect(() => {
  //   fetch(apiUrl)
  //     .then(resp => resp.json())
  //     .then(imagesData => {
  //       if (imagesData.totalHits > 0) {
  //         setImages(imagesData.hits);
  //         console.log(imagesData.hits);
  //       } else {
  //         setImages([]);
  //       }
  //     })
  //     .catch(err => {
  //       console.error(err);
  //     });
  // }, [searchInput, maxResults])

}
