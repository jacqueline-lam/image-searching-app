import React, { useState } from 'react';

export default function ImageSearch({ onSubmit }) {
  const [input, setInput] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(input);
  }

  const hanldeInput = (event) => {
    const searchInput = event.target.value;
    setInput(searchInput);
  };

  // Tells useEffect function to listen for any changes to input state var
  // when input state changes, execute this fn
  // useCallback(() => {
  //   console.log('running fetchImages');
  //   fetchImages(input);
  // }, [input],
  // );

  return (
    <form onSubmit={handleSubmit}>
      <input
        id='image-seach-bar'
        type='text'
        value={input}
        onChange={hanldeInput}
        placeholder='Search Image Here'
      />
    </form>
  );
}