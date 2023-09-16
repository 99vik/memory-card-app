export default function shuffleArray(array) {
  const randomizedArray = [];

  do {
    let randomValue;
    do {
      randomValue = array[Math.floor(Math.random() * array.length)];
    } while (randomizedArray.includes(randomValue));
    randomizedArray.push(randomValue);
  } while (randomizedArray.length < array.length);

  return randomizedArray;
}
