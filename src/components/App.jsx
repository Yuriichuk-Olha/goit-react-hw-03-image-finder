import Searchbar from '../components/Searchbar/Searchbar';
import APIfetch from './API/APIfetch'
import Loader from './Loader/loader';
import Modal from './Modal/Modal';
//import Button from './Button/Button';
import ImageGallery from './ImageGallery/ImageGallery';
import React, {Component} from "react";

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
// images
  componentDidUpdate(_, prevState){
  const {search,queryPage,} = this.state;
  if(prevState.search !== search){
    // console.log(prevState.search)
    // console.log(this.state.search)

      this.setState({loading:true})

      APIfetch(search, queryPage).then(response => {
     //  console.log(response)
     return this.setState(prevState=>({

      images:[...prevState.images, ...response.hits],
      // queryPage: queryPage +1,
     }))
  }) 
  .catch(error=>this.setState({error}))
  .finally(()=>this.setState({loading:false}))
  }
 
  }

  onLoadMoreClick=(prevState)=>{ 
  const {search,queryPage} = this.state;
  // this.setState({lordMore:true})
    APIfetch(search, queryPage).then(response=>{
       console.log(response)
   return this.setState(prevState=>({
      images:[...prevState.images, ...response.hits],
      queryPage: prevState.queryPage + 1,
    }))
    })
    .catch(error=>this.setState({error}))
   .finally(()=>this.setState({loading:false}))
  }
  
  lordMore=()=>{
    //if(this.state.queryPage > 0){
      this.setState(prev=>({queryPage: prev.queryPage + 1}))
   //}
    
  }

   handleFormSubmit = search=>{
    this.setState({search, images:[]})
   }

  clickImages=(largeImageURL)=>{
    //console.log(largeImageURL)
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
        onLoadMoreClick={this.onLoadMoreClick}
        lordMore={lordMore}
        /> )}  
      </div>
    )
  }
}






















/* export const App = ({children}) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridGap: 16,
        paddingBottom: 24,
      }}
    >
      <Searchbar />
      
      {children}
      
    </div>
  );
}; */

// * Стили компонента App


 // height: '100vh',
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        // fontSize: 40,
        // color: '#010101'