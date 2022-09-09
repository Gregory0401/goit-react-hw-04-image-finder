import React, { Component } from 'react';
import pixFetch  from '../components/Image/pixabay';
import { BallTriangle } from 'react-loader-spinner';
import ImageGallery from '../components/ImageGallery/ImageGallery';
import ImageGalleryItem from '../components/ImageGalleryItem/ImageGalleryItem';
import Searchbar from '../components/Searchbar/Searchbar';
import Button from '../components/Button/Button';
import Modal from '../components/Modal/Modal';

class App extends Component {
  state = {
    photos: [],
    searchQuery: '',
    status: 'idle',
    showModal: false,
    clickedImg: {},
  };

  resetPage = ()=> {
    this.setState({
    photos: [],
    page: 1
    })
  }
  
  getValue = searchValue => {
    this.resetPage();
    this.setState({ searchQuery: searchValue });
    pixFetch(searchValue)
      .then(data => this.onHandleData(data.hits))
      .catch(error => console.log(error));
  };


  onLoadMore = () => {
    this.setState({ status: 'pending' });
    pixFetch(this.state.searchQuery)
      .then(data => this.onHandleData(data.hits))
      .catch(error => console.log(error));
  };

  onHandleData = data => {
    this.setState(prevState =>
      prevState.searchQuery !== this.state.searchQuery
        ? { photos: data, status: 'loaded' }
        : { photos: [...this.state.photos, ...data], status: 'loaded'}
    );
  };

  onHandleClick = click => {
    const foundImage = this.state.photos.find(photo => photo.tags === click);
    this.setState({ clickedImg: foundImage, showModal: true });
  };

  onCloseModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const spinnerStyle = { justifyContent: 'center' };

    return (
      <>
        <Searchbar onSubmit={this.getValue} />
        <ImageGallery>
          <ImageGalleryItem
            photos={this.state.photos}
            onHandleClick={this.onHandleClick}
          />
        </ImageGallery>

        {this.state.status === 'pending' && (
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

        {this.state.status === 'loaded' && (
          <Button onLoadMore={this.onLoadMore} />
        )}

        {this.state.showModal && (
          <Modal
            photo={this.state.clickedImg}
            onCloseModal={this.onCloseModal}
          ></Modal>
        )}
      </>
    );
  }
}

export default App;




