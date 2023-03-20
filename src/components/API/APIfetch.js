import React, {Component} from "react";
//   const URL = 'https://pixabay.com/api/';
//   const API_KEY = '33330220-38622d6f802367b73b86585e9';

export default class APIfetch extends Component {
    state = { 
        search:null,
        queryPage:1,
        error:null,
        loading:false,
    }
    
    componentDidUpdate(prevProps, prevState){     
        if(prevProps.search !== this.props.search){
            this.setState({loading:true})
            fetch(`https://pixabay.com/api/?q=${this.props.search}&page=${this.state.queryPage}&key=33330220-38622d6f802367b73b86585e9&image_type=photo&orientation=horizontal&per_page=12`
        ).then(response => {
            if(response.ok) {
                return response.json();
            }
            return Promise.reject(new Error('Нічого не знайдено'))
        })           
        .then(search=>this.setState({search}))
        .catch(error=>this.setState({error}))
        .finally(()=>this.setState({loading:false}))
        
        }
    }
    render() { 
        const {error, loading, search}=this.state
        return (
            <div>
            {error && <h1>{error.message}</h1>}
            {loading && <div>Загружаєм....</div>}
            {}
            </div>
        )
    }
}







// export default function Api(hits, queryPage=1){
//     return fetch(`https://pixabay.com/api/?q=${hits}&page=${queryPage}&key=33330220-38622d6f802367b73b86585e9&image_type=photo&orientation=horizontal&per_page=12`
//         ).then(response => {
//           return response.json()
//         })
//        // .then(data=>console.log(data))
// }