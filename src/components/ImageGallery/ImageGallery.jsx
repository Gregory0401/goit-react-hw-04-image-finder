import s from './ImageGallery.module.css';

function ImageGallery({ children }) {
  return <ul className={s.gallery}>{children}</ul>;
}

export default ImageGallery;