import PropTypes from 'prop-types';
import React, {Component} from "react";
import Searchbar from '../components/Searchbar/Searchbar';
import APIfetch from './API/APIfetch'
import Loader from './Loader/loader';
import Modal from './Modal/Modal';
import ImageGallery from './ImageGallery/ImageGallery';


export default class App extends Component {
  state = { 
    images:[],
    search: '',
    queryPage:1,
    lordMore:false,
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
    // console.log(prevState.search)
    // console.log(this.state.search)

      this.setState({loading:true})

      APIfetch(search, queryPage).then(response => {
     return this.setState(prevState=>({
      images:[...prevState.images, ...response.hits],
     }))
  }) 
  .catch(error=>this.setState({error}))
  .finally(()=>this.setState({loading:false}))
  }
  }
  
  lordMore=()=>{
      this.setState(prev=>({queryPage: prev.queryPage + 1}))     
  }

   handleFormSubmit = search=>{
    this.setState({search, images:[]})
   }

  clickImages=(largeImageURL)=>{
    this.setState({modal:{largeImageURL, showModal:true}})
  }
  closeModal=()=>{
    this.setState({modal:{largeImageURL:'', showModal:false}})
  }

  render() { 
    const {error, loading, images, lordMore, modal}=this.state

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
        
        {images.length===0 && loading}

        {images.length>0 && !loading && ( <ImageGallery 
        images={images}   
        clickImages={this.clickImages}
        onLoadMoreClick={this.lordMore}
        lordMore={lordMore}
        /> )}  
        
      </div>
    )
  }
}


App.propTypes={
  images:PropTypes.array.isRequired,
  search:PropTypes.string.isRequired,
  queryPage:PropTypes.number.isRequired,
  lordMore:PropTypes.bool.isRequired,
  error:PropTypes.bool.isRequired,
  loading:PropTypes.bool.isRequired,
  modal:PropTypes.shape({
    showModal:PropTypes.bool.isRequired,
    largeImageURL:PropTypes.string.isRequired
  })
}