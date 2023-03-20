import css from '../ImageGalleryItem/ImageGalleryItem.module.css'

function ImageGalleryItem({webformatURL,largeImageURL,onImage}){
    
  return <li className={css.galleryItem}>
             <img src={webformatURL} alt="" 
             onClick={()=>onImage(largeImageURL)}/>
            </li>
}



// class ImageGalleryItem extends Component {
//     state = {  } 
//     render() { 
//         return (

//         );
//     }
// }
 
export default ImageGalleryItem;

