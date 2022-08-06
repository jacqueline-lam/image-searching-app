import React, { useEffect, useState } from "react";
import "./styles.css";
import ImageSearch from './components/SearchBar';
import ImageResults from './components/ImageResults'

const API_KEY = process.env.REACT_APP_PIXABAY_API_KEY;
const IMAGE_API = "https://pixabay.com/api/" + `?key=${API_KEY}`;

export default function App() {
  const [images, setImages] = useState([]);
  const [maxResults, setMaxResults] = useState('20');
  const [searchInput, setSearchInput] = useState('');

  const fetchImages = (input) => {
    let query = input.split(' ').join('+');
    let imagesOnly = '&image_type=photo';
    let resultsPerPage = `&per_page=${maxResults}`
    let apiUrl = IMAGE_API.concat(`&q=${query}`, imagesOnly, resultsPerPage);

    fetch(apiUrl)
      .then(resp => resp.json())
      .then(imagesData => {
        if (imagesData.totalHits > 0) {
          setImages(imagesData.totalHits);
          console.log(imagesData.totalHits);
        } else {
          setImages([]);
        }
      })
      .catch(err => {
        console.error(err);
      });
  };

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

  return (
    <div className="App">
      <ImageSearch onSubmit={fetchImages} />
      <ImageResults />
    </div>
  );
}


