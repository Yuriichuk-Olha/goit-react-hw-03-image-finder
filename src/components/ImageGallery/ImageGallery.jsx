import PropTypes from 'prop-types';
import React, {Component} from "react";

import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import css from 'components/ImageGallery/ImageGallery.module.css'

class ImageGallery extends Component {
    render() { 
        const {images,clickImages}= this.props
        
        return (
            <>
            <ul className={css.ImageGallery}>

              {images.map(({id, webformatURL, largeImageURL}) => {
      
              return  <ImageGalleryItem
                key={id}
                webformatURL={webformatURL}
                largeImageURL={largeImageURL}
                clickImages={clickImages}
                />

              })}
            </ul> 
            
        </>
        )
    }
}
 
export default ImageGallery;

ImageGallery.propTypes= {
  loading:PropTypes.bool,
  images:PropTypes.array,
  clickImages:PropTypes.func,
  loadMore:PropTypes.bool,
  onLoadMoreClick:PropTypes.func,
}