import PropTypes from 'prop-types';
import CloseIcon from '../assets/close-btn.svg';

export default function Modal({ setPopupVisible }) {
  Modal.propTypes = {
    setPopupVisible: PropTypes.func,
  };
  return (
    <div className="modal">
      <button>
        <img src={CloseIcon} alt="" />
      </button>
      Modal
    </div>
  );
}
