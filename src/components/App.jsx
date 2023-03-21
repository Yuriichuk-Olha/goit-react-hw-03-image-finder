import Searchbar from '../components/Searchbar/Searchbar';
import APIfetch from './API/APIfetch'
//import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
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
  
  } 
  componentDidUpdate(prevProps, prevState){
  
  if(prevProps.search !== this.state.search){
      this.setState({loading:true})
     // const api = APIfetch()
      APIfetch().then(response => {
      if(response.ok) {
          return response.json()
      }
      return Promise.reject(new Error('Нічого не знайдено'))
  })           
  .then(images=>this.setState({images}))
  .catch(error=>this.setState({error}))
  .finally(()=>this.setState({loading:false}))
  }

    
   }

   handleFormSubmit = search=>{
    this.setState({search})
   }

  render() { 
    const {error, loading, images}=this.state
    return (
      <div style={{display: 'grid', gridTemplateColumns: '1fr',
        gridGap: 16, paddingBottom: 24}}
      >
        {error && <h1>{error.message}</h1>}
        {loading && <div>Загружаєм....</div>}
        <Searchbar onSubmit={this.handleFormSubmit}/>
        <ImageGallery images={this.state.images}
        // onImage={}
        />
        
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