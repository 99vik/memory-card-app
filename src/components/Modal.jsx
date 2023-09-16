import PropTypes from 'prop-types';
import CloseIcon from '../assets/close-btn.svg';

export default function Modal({ message, setPopupVisible }) {
  Modal.propTypes = {
    message: PropTypes.string,
    setPopupVisible: PropTypes.func,
  };
  return (
    <div className="modal">
      <button onClick={() => setPopupVisible(false)}>
        <img src={CloseIcon} alt="" />
      </button>
      <p>{message}</p>
    </div>
  );
}
