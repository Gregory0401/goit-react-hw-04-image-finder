import pixFetch from 'service/pixabay';
import { BallTriangle } from 'react-loader-spinner';
import ImageGallery from '../components/ImageGallery/ImageGallery';
import ImageGalleryItem from '../components/ImageGalleryItem/ImageGalleryItem';
import Searchbar from '../components/Searchbar/Searchbar';
import Button from '../components/Button/Button';
import Modal from '../components/Modal/Modal';
import { useState, useEffect } from 'react';

function App() {
  const [photos, setPhotos] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [status, setStatus] = useState('idle');
  const [showModal, setShowModal] = useState(false);
  const [clickedImg, setClickedImg] = useState({});
  const [page, setPage] = useState(1);

  const onSubmit = searchValue => {
  
    setSearchQuery(searchValue);
setPage(1)
  };

  useEffect(() => {
    if(searchQuery.trim()) {
      setStatus("pending");
      pixFetch(searchQuery, page)
      .then(data => onHandleData(data.hits))
      .catch(error => console.log(error))
      .finally(() => setStatus(''))
    }  
    // eslint-disable-next-line
  }, [searchQuery, page])

  const onLoadMore = () => { 
    setPage(prevState => prevState += 1)
  };


  function onHandleData(data) {
    setPhotos([...photos, ...data]);
  }

  const onHandleClick = click => {
    const foundImage = photos.find(photo => photo.tags === click);
    setClickedImg(foundImage);
    setShowModal(true);
  };

  const onCloseModal = () => {
    setShowModal(false);
  };

  
    const spinnerStyle = { justifyContent: 'center' };

    return (
      <>
        <Searchbar onSubmit={onSubmit} />
        <ImageGallery>
          <ImageGalleryItem
            photos={photos}
            onHandleClick={onHandleClick}
          />
        </ImageGallery>

        {status === 'pending' && (
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="#f61313"
            ariaLabel="ball-triangle-loading"
            wrapperClass={{}}
            wrapperStyle={spinnerStyle}
            visible={true}
          />
        )}

        {photos.length ? (
          <Button onLoadMore={onLoadMore} />
        ) : ''}

        {showModal && (
          <Modal
            photo={clickedImg}
            onCloseModal={onCloseModal}
          ></Modal>
        )}
      </>
    );
  }


export default App;




