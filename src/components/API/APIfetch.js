
//   const URL = 'https://pixabay.com/api/';
//   const API_KEY = '33330220-38622d6f802367b73b86585e9';

export default function Api(hits, queryPage=1){
    return fetch(`https://pixabay.com/api/?q=${hits}&page=${queryPage}&key=33330220-38622d6f802367b73b86585e9&image_type=photo&orientation=horizontal&per_page=12`
        ).then(response => {
          return response.json()
        })
    //    .then(data=>console.log(data))
}


