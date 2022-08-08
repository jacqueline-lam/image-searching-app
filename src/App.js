import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./styles.css";
import ImageSearch from './components/SearchBar';
import ImageResults from './components/ImageResults'

const API_KEY = process.env.REACT_APP_PIXABAY_API_KEY;
const IMAGE_API = "https://pixabay.com/api/" + `?key=${API_KEY}`;

export default function App() {
  const [images, setImages] = useState([]);
  const [resultsNum, setResultsNum] = useState(20);
  const [query, setQuery] = useState('');

  const handleSearch = (input) => {
    setQuery(input.split(' ').join('+'));
    setResultsNum(20);
  }
  // Send GET request to PixaBay API and store search results from resp in container states
  // Only fetch data when query changes
  useEffect(() => {
    fetchData(query, resultsNum)
  }, [query, resultsNum]);

  const fetchData = (searchTerm, perPageRequested) => {
    let resultsPerPage = `&per_page=${perPageRequested}`
    const imagesOnly = '&image_type=photo';
    let apiUrl = IMAGE_API.concat(`&q=${searchTerm}`, imagesOnly, resultsPerPage);

    fetch(apiUrl)
      .then(resp => resp.json())
      .then(imagesData => {
        let currResultsNum = imagesData.hits.length;
        let maxHits = imagesData.totalHits;

        // To display more more results
        console.log('currResultsNum', currResultsNum)
        console.log('perPageRequested', perPageRequested)
        console.log('resultsNum', resultsNum)

        if (perPageRequested > 20 && maxHits > perPageRequested) {
          // append new data to the array instead of just replacing the array with the new data
          // Tell state object to add entire contents of the data object to the end of the array
          console.log('requested num per page', perPageRequested, 'imagesData hits length', imagesData.hits.length);
          setImages([...images, imagesData.hits]);
        } else {
          if (maxHits > 0) {
            setImages(imagesData.hits);
            console.log(maxHits);
            console.log(currResultsNum);
          } else {
            setImages([]);
          }
        }
      })
      .catch(err => {
        console.error(err);
      });
  }


  const infiniteScroll = () => {
    // Check if end of doc reached?
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
      console.log('reached end of results')
      let newPerPage = resultsNum;
      newPerPage += 20;
      setResultsNum(newPerPage)
      console.log(`query: ${query}, newPerPage: ${newPerPage}`)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', infiniteScroll);
  }, []);

  // useEffect(() => {
  //   const handleScroll = event => {
  //     console.log('window.scrollY', window.scrollY);
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
    <div className="App">
      <ImageSearch onSubmit={handleSearch} />
      <ImageResults results={images} perPage={resultsNum} />
    </div>
  );
}


