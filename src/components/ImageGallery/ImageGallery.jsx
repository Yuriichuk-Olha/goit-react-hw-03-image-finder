import React, {Component} from "react";
import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import css from 'components/ImageGallery/ImageGallery.module.css'

// {id, webformatURL,largeImageURL}
class ImageGallery extends Component {
    state = {  } 
    render() { 
        const {images, onImage,}= this.state
        
        return (
            <>
            <ul className={css.gallery}>
              {/* {images.map(image => {
                <ImageGalleryItem
                key={image.id}
                webformatURL={image.webformatURL}
                largeImageURL={image.largeImageURL}
                onImage={onImage}
                />
              })} */}
            </ul>


            </>
        );
    }
}
 
export default ImageGallery;