import { useEffect, useState } from 'react';
import './App.css';
import generateRandomNumbers from './generateRandomNumbers';
import Card from './components/Card.jsx';

function App() {
  const [pictures, setPictures] = useState(generateRandomNumbers());

  const cards = pictures.map((pictureID, index) => {
    return <Card key={index} id={pictureID} />;
  });

  return (
    <>
      <h1>hello world</h1>
      <div className="cards-container">{cards}</div>
    </>
  );
}

export default App;
