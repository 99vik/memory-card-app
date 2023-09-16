import PropTypes from 'prop-types';

export default function Card({ id, handleClick }) {
  Card.propTypes = {
    id: PropTypes.number,
    handleClick: PropTypes.func,
  };
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
