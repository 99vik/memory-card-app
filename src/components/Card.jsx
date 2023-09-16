export default function Card({ id, handleClick }) {
  return (
    <div className="card" onClick={() => handleClick(id)}>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
        alt="pokemon picture"
        draggable="false"
      />
    </div>
  );
}
