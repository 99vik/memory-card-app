import { useEffect, useState } from 'react';
import './App.css';
import generateRandomNumbers from './generateRandomNumbers';
import Card from './components/Card.jsx';
import shuffleArray from './shuffleArray';

function App() {
  const [picturesIDs, setPicturesIDs] = useState(generateRandomNumbers());
  const [selectedIDs, setSelectedIDs] = useState([]);
  const [currentRecord, setCurrentRecord] = useState(0);
  const [shuffeledPicturesIDs, setShuffeledPicturesIDs] = useState(
    shuffleArray(picturesIDs)
  );

  function restartGame() {
    const newPicturesIDs = generateRandomNumbers();
    const newShuffeledPictures = shuffleArray(newPicturesIDs);
    const newSelectedIDs = [];
    setPicturesIDs(newPicturesIDs);
    setShuffeledPicturesIDs(newShuffeledPictures);
    setSelectedIDs(newSelectedIDs);
  }

  function handleClick(id) {
    if (selectedIDs.includes(id)) {
      restartGame();
    } else {
      const newSelectedIDs = selectedIDs;
      newSelectedIDs.push(id);
      if (selectedIDs.length > currentRecord) {
        setCurrentRecord(newSelectedIDs.length);
      }
      console.log('score: ' + newSelectedIDs.length);
      console.log('record: ' + currentRecord);
      const newShuffledIDs = shuffleArray(picturesIDs);
      setShuffeledPicturesIDs(newShuffledIDs);
    }
  }

  const cards = shuffeledPicturesIDs.map((pictureID, index) => {
    return <Card key={index} id={pictureID} handleClick={handleClick} />;
  });

  return (
    <>
      <p>Current score: {selectedIDs.length}</p>
      <p>High score: {currentRecord}</p>
      <div className="cards-container">{cards}</div>
    </>
  );
}

export default App;
