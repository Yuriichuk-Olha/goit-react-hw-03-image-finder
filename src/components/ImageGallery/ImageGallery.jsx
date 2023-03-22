import React, {Component} from "react";
import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import Button from "components/Button/Button";
import css from 'components/ImageGallery/ImageGallery.module.css'

// children,
class ImageGallery extends Component {
    render() { 
        const { loading, images, clickImages,loadMore,   onLoadMoreClick}= this.props
        
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
            {!loading && (<Button 
            loadMore={loadMore}
            onLoadMoreClick={onLoadMoreClick}
            />)} 
            {/* {children}           */}
        </>
        )
    }
}
 
export default ImageGallery;