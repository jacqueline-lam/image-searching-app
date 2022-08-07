import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./styles.css";
import ImageSearch from './components/SearchBar';
import ImageResults from './components/ImageResults'

const API_KEY = process.env.REACT_APP_PIXABAY_API_KEY;
const IMAGE_API = "https://pixabay.com/api/" + `?key=${API_KEY}`;

export default function App() {
  const [images, setImages] = useState([]);
  const [maxResults, setMaxResults] = useState('20');
  const [query, setQuery] = useState('');

  const imagesOnly = '&image_type=photo';

  const handleSearch = (input) => {
    setQuery(input.split(' ').join('+'));
    setMaxResults('20');
  }


  // Send GET request to PixaBay API and store search results from resp in container states
  // Only fetch data when query changes
  useEffect(() => {
    let resultsPerPage = `&per_page=${maxResults}`
    let apiUrl = IMAGE_API.concat(`&q=${query}`, imagesOnly, resultsPerPage);

    fetch(apiUrl)
      .then(resp => resp.json())
      .then(imagesData => {
        if (imagesData.totalHits > 0) {
          setImages(imagesData.hits);
          console.log(imagesData.totalHits);
        } else {
          setImages([]);
        }
      })
      .catch(err => {
        console.error(err);
      });
  }, [query]);

  return (
    <div className="App">
      <ImageSearch onSubmit={handleSearch} />
      <ImageResults results={images} perPage={maxResults} />
    </div>
  );
}


