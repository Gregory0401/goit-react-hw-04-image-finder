import PropTypes from 'prop-types';
import s from '../Modal/Modal.module.css';

function Modal({ photo, onCloseModal }) {

  const handleClose = e => {
    e.currentTarget === e.target &&
      onCloseModal();
  };

    window.addEventListener('keydown', e => {
      e.code === 'Escape' && onCloseModal()
    })
  
    return (
      <div className={s.backdrop} onClick={handleClose}>
        <div className={s.modal}>
          <img src={photo.largeImageURL} alt={photo.tags} />
        </div>
      </div>
    );
  }


Modal.propTypes = {
  photo: PropTypes.object.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};

export default Modal;