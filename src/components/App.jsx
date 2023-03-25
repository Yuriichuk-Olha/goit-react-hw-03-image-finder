import PropTypes from 'prop-types';
import React, {Component} from "react";
import Searchbar from '../components/Searchbar/Searchbar';
import APIfetch from './API/APIfetch'
import Loader from './Loader/loader';
import Modal from './Modal/Modal';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';


export default class App extends Component {
  state = { 
    images:[],
    search: '',
    total:null,
    queryPage:1,
    error:null,
    loading:false,
    modal:{
      showModal: false,
      largeImageURL: '',
    }
  } 
  componentDidUpdate(_, prevState){
  const {search,queryPage,} = this.state;
  if(prevState.search !== search || prevState.queryPage !== queryPage){
      this.setState({loading:true})

      APIfetch(search, queryPage).then(response => { 
      
        return this.setState(prevState=>({
      images:[...prevState.images, ...response.hits],
      total:response.totalHits,
      }))
      
    }) 
    .catch(error=>this.setState({error}))
    .finally(()=>this.setState({loading:false}))
    }
  }
  
  onLoadMore=()=>{   
          this.setState(prev=>({
            queryPage: prev.queryPage + 1,
          }))

  }

   handleFormSubmit = search=>{
    this.setState({search, images:[], queryPage:1})
   }

  clickImages=(largeImageURL)=>{
    this.setState({modal:{largeImageURL, showModal:true}})
  }
  closeModal=()=>{
    this.setState({modal:{largeImageURL:'', showModal:false}})
  }

  render() { 
    const {total,error, loading, images,  modal} = this.state;
    

    let loadMore=false;
    if (images.length < total){
      console.log(images.length, total)
      loadMore = true;
    }
    
    
    return (
      <div style={{display: 'grid', gridTemplateColumns: '1fr',
        gridGap: 16, paddingBottom: 24}}
      > 
      {modal.showModal && (<Modal 
      closeModal={this.closeModal} 
      largeImageURL={modal.largeImageURL} />)}
        
        <Searchbar onSubmit={this.handleFormSubmit}/>     
        {error && <h1>{error.message}</h1>}
        {loading && <Loader/>}
        {images.length===0 && loading }

        

        { images.length>0 && !loading && ( <ImageGallery 
        images={images}   
        clickImages={this.clickImages}
        loadMore={loadMore}
        /> )} 
        {loadMore && (
        <Button onLoadMoreClick={this.onLoadMore}/>)} 
        
      </div>
    )
  }
}


App.propTypes={
  images:PropTypes.array,
  search:PropTypes.string,
  queryPage:PropTypes.number,
  lordMore:PropTypes.bool,
  error:PropTypes.bool,
  loading:PropTypes.bool,
  modal:PropTypes.shape({
    showModal:PropTypes.bool,
    largeImageURL:PropTypes.string,
  })
}