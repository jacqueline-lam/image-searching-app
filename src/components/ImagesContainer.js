import React from "react";
import ImageSearch from '../components/ImageSearch';

const API_KEY = process.env.REACT_APP_API_KEY;
const IMAGE_API = "https://pixabay.com/api/" + API_KEY;

const fetchImages = (input) => {
  let query = input.split(' ').join('+');
  let apiUrl = IMAGE_API.concat(`&q=${query}`);
  console.log(apiUrl);
  // fetch(apiUrl)
  //   .then(resp => resp.json())
  //   .then(imagesData => {

  //   })
};

export default function ImageContainer() {
  return (
    <ImageSearch onSubmit={fetchImages} />
  );
}