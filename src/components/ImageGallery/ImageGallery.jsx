import React, {Component} from "react";
import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import Button from "components/Button/Button";
import css from 'components/ImageGallery/ImageGallery.module.css'


class ImageGallery extends Component {
    render() { 
        const {images, clickImages,loadMore, children}= this.props
        
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
            {!loadMore && (<Button onLoadMore={this.props.onLoadMore}/>)} 
            {children}          
        </>
        )
    }
}
 
export default ImageGallery;