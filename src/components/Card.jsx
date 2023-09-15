export default function Card({ id }) {
  return (
    <img
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
      alt="pokemon picture"
    />
  );
}
