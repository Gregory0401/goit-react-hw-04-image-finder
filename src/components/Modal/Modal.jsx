import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from '../Modal/Modal.module.css';

class Modal extends Component {
  
  componentDidMount() {
    document.addEventListener('keydown', this.handleClose);
  }
  
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleClose);
  }

  
  handleClose = e => {
    const { onCloseModal } = this.props;
    if (e.currentTarget === e.target || e.code === 'Escape') {
      onCloseModal();
    }
  };

  render() {
    const { photo } = this.props;
    return (
      <div className={s.backdrop} onClick={this.handleClose}>
        <div className={s.modal}>
          <img src={photo.largeImageURL} alt={photo.tags} />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  photo: PropTypes.object.isRequired,
  onCloseModal: PropTypes.func.isRequired,
};

export default Modal;