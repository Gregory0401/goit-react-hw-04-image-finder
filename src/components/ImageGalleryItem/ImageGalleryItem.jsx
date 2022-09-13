import PropTypes from 'prop-types';
import s from '../ImageGalleryItem/ImageGalleryItem.module.css';

function ImageGalleryItem({ photos, onHandleClick }) {

  const handleClick = e => {
    onHandleClick(e.target.alt);
  };

    return photos.map(photo => {
      return (
        <li
          key={photo.id}
          className={s.item}
          onClick={handleClick}
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

ImageGalleryItem.propTypes = {
  photos: PropTypes.array.isRequired,
  onHandleClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;