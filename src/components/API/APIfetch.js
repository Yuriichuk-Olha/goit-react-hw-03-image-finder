


export default function Api(search, queryPage=1){
    return fetch(`https://pixabay.com/api/?q=${search}&page=${queryPage}&key=33330220-38622d6f802367b73b86585e9&image_type=photo&orientation=horizontal&per_page=12`
        ).then(response => response.json())   
}

//
// .then((response)=>response.json())
//         .then((hits)=>console.log(hits))