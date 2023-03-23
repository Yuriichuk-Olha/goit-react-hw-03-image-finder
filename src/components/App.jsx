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
    total:0,
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
    // console.log(prevState.search, 'prevSearch')
    // console.log(prevState.queryPage,'prevQuery')

    // console.log(this.state.search, 'stateSearch')
    // console.log(queryPage,'stateQuery')

      APIfetch(search, queryPage).then(response => {
      
        //  const total=response.totalHits;
        //  this.setState({total})
    // //  this.setState({total})
    //    console.log(total,'total',queryPage,'queryPage')
    //this.setState({loading:true})
    //  console.log(response.totalHits)
         if(response.totalHits <= 12){
         return this.setState({loading:false})
        }

        return this.setState(prevState=>({
      images:[...prevState.images, ...response.hits],
      
      }))
     
  

    }) 
    .catch(error=>this.setState({error}))
    .finally(()=>this.setState({loading:false}))
    }
  }
  
  lordMore=()=>{
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
    const {error, loading, images, lordMore, modal} = this.state
    
    
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
       
        { images.length>0 && !loading && ( <ImageGallery 
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