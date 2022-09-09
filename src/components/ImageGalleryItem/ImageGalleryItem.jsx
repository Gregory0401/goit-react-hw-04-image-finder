import { Component } from 'react';
import PropTypes from 'prop-types';
import s from '../ImageGalleryItem/ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {

  handleClick = e => {
    const { onHandleClick } = this.props;
    onHandleClick(e.target.alt);
  };

  render() {
    const { photos } = this.props;
    return photos.map(photo => {
      return (
        <li
          key={photo.id}
          className={s.item}
          onClick={this.handleClick}
        >
          <img
            src={photo.webformatURL}
            alt={photo.tags}
            className={s.image}
          />
        </li>
      );
    });
  }
}

ImageGalleryItem.propTypes = {
  photos: PropTypes.array.isRequired,
  onHandleClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;