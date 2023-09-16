import { useState } from 'react';
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
      if (selectedIDs.length === 12) {
        restartGame();
      } else {
        const newShuffledIDs = shuffleArray(picturesIDs);
        setShuffeledPicturesIDs(newShuffledIDs);
      }
    }
  }

  const cards = shuffeledPicturesIDs.map((pictureID, index) => {
    return <Card key={index} id={pictureID} handleClick={handleClick} />;
  });

  return (
    <>
      <header>
        <div>
          <h1>Pokemon Memory Game</h1>
          <p>Get points by clicking on an image you have not clicked before.</p>
        </div>
        <div>
          <p>Current score: {selectedIDs.length}</p>
          <p>High score: {currentRecord}</p>
        </div>
      </header>
      <div className="cards-container">{cards}</div>
    </>
  );
}

export default App;
