import Searchbar from '../components/Searchbar/Searchbar';
import APIfetch from './API/APIfetch'
//import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import ImageGallery from './ImageGallery/ImageGallery';
import React, {Component} from "react";

export default class App extends Component {
  state = { 
    images:[],
    search: null,
    queryPage:1,
    lordMore:false,
   
   } 
   gatSearchxFetch = (search) =>{
    this.setState({search, queryPage:1, lordMore:true})
    const item = APIfetch(search, 1).then((hits)=>{
      console.log(hits)
    })
    
   }

   handleFormSubmit = search=>{
    this.setState({search})
   }

  render() { 
   //const {search, error}= this.
    return (
      <div style={{display: 'grid', gridTemplateColumns: '1fr',
        gridGap: 16, paddingBottom: 24}}
      >
        <Searchbar onSubmit={this.handleFormSubmit}/>
        <ImageGallery images={this.state.search}
        // onImage={}
        />
        <APIfetch search={this.state.search}/>
      </div>
    )
  }
}



// componentDidUpdate(prevProps, prevState){
//    const URL = 'https://pixabay.com/api/';
//   const API_KEY = '33330220-38622d6f802367b73b86585e9';
//   if(prevProps.search !== this.props.search){

//       this.setState({loading:true})
//       fetch(`${URL}?q=${this.props.search}&page=${this.state.queryPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
//   ).then(response => {
//       if(response.ok) {
//           return response.json();
//       }
//       return Promise.reject(new Error('Нічого не знайдено'))
//   })           
//   .then(search=>this.setState({search}))
//   .catch(error=>this.setState({error}))
//   .finally(()=>this.setState({loading:false}))
  
//   }
// }
// render() { 
//   const {error, loading, search}=this.state
//   return (
//       <div>
//       {error && <h1>{error.message}</h1>}
//       {loading && <div>Загружаєм....</div>}
//       {}
//       </div>
//   )
// }

















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