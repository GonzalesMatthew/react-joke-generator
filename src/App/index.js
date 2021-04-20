import React, { useState } from 'react';
import './App.scss';

function App() {
  // const [domWriting, setDomWriting] = useState('Nothing Here!');
  const [randomJoke, setRandomJoke] = useState({});

  const handleClick = (e) => {
    console.warn(`You clicked ${e.target.id}`);
  //   setDomWriting(`You clicked ${e.target.id}! Check the Console!`);
  };

  return(
    <>
      <h1>Joke Generator</h1>
      <button onClick={handleClick}>GET A JOKE</button>
    </>
  );
}

export default App;
