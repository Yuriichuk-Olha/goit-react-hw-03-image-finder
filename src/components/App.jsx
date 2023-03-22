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

  componentDidUpdate(prevProps, prevState){
  const {search,queryPage,images} = this.state;
  if(prevState.search !== this.state.search){
    console.log(prevState.search)
    console.log(this.state.search)

      this.setState({loading:true})

      APIfetch(search, queryPage).then(response => {
       console.log(response)
     return this.setState(prevstate=>({

      images:[...prevstate.images, ...response.hits],
      // queryPage: queryPage +1,
     }))
  }) 
  .catch(error=>this.setState({error}))
  .finally(()=>this.setState({loading:false}))
  }
 
  }

  onLoadMoreClick=(prevState)=>{ 
  const {search,queryPage,images,lordMore} = this.state;
  this.setState({lordMore:true})
    const api = APIfetch(search, queryPage).then()
    console.log(api)
   return this.setState((prevState=>({
      images:[...prevState.images, ...api.hits],
      queryPage: prevState.queryPage + 1,
   })
   ))    
  }
  
   handleFormSubmit = search=>{
    this.setState({search, images:[]})
   }

  clickImage=(largeImageURL)=>{
    console.log(largeImageURL)
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
        
        {images.length===0 && lordMore}

        {images.length>0 && !lordMore && ( <ImageGallery 
        images={images} 
        lordMore={lordMore}
        clickImage={this.clickImage}
        /> )}
    
      </div>
    )
  }
}

{/* <Button onLoadMore={this.onLoadMore}/> */}




















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