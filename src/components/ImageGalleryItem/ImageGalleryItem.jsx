import React from 'react'
import css from '../ImageGalleryItem/ImageGalleryItem.module.css'

export default function ImageGalleryItem({webformatURL,largeImageURL, clickImage}){
    
  return <li className={css.ImageGalleryItem}>
             <img src={webformatURL} alt="" 
             className={css.ImageGalleryItemImage}
           
             onClick={()=>clickImage(largeImageURL)}
             />
            </li>
}



