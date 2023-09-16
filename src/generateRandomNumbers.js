export default function generateRandomNumbers() {
  const array = [];

  do {
    let randomNumber;
    do {
      randomNumber = Math.floor(Math.random() * 200 + 1);
    } while (array.includes(randomNumber));
    array.push(randomNumber);
  } while (array.length < 12);
  return array;
}
