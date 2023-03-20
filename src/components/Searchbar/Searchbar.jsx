import React, {Component} from "react";
import css from 'components/Searchbar/Searchbar.module.css'

class Searchbar extends Component {
  state = {
    search: '',
  }
//   componentDidMount() {
//     fatch(
//       'https://pixabay.com/api/?q=cat&page=1&key=33330220-38622d6f802367b73b86585e9&image_type=photo&orientation=horizontal&per_page=12'
//     )
//       .then(response => response.json())
//       .then(console.log)
//   }

  handleChange=ev=>{
    this.setState({search:ev.currentTarget.value})
  }

  handleSubmit =event=> {
    event.preventDefault();
    if(this.state.search.trim()===''){
        return alert('Пустий рядок')
    }
    this.props.onSubmit(this.state.search)
    this.setState({search:''})
  }
  render() {
    return ( 
    <header className={css.searchbar}>
    <form onSubmit={this.handleSubmit} className={css.form}>
    <button type="submit" className={css.button}>
      <span className={css.buttonLabel}>Search</span>
    </button>

    <input
      className={css.input}
      type="text"
      // autoСomplete="off"
      // autoFocus
      placeholder="Search images and photos"
      value={this.state.search}
      onChange={this.handleChange}
    />
  </form>
</header>
    )
  }
}

export default Searchbar;
