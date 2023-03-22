import React from 'react'
import css from '../ImageGalleryItem/ImageGalleryItem.module.css'

export default function ImageGalleryItem({webformatURL,largeImageURL, clickImages}){
    
  return <li className={css.ImageGalleryItem}>
            <img src={webformatURL} alt="" 
            className={css.ImageGalleryItemImage}
            width='260'
            onClick={()=>clickImages(largeImageURL)}
            />
            </li>
}



