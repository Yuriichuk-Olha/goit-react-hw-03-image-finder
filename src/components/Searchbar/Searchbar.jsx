import React, {Component} from "react";
import css from 'components/Searchbar/Searchbar.module.css'

class Searchbar extends Component {
  state = {
    search: '',
  }

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
    <header className={css.Searchbar}>
    <form onSubmit={this.handleSubmit} className={css.SearchForm}>
    <button type="submit" className={css.SearchFormButton}>
      <span className={css.SearchFormButtonLabel}>Search</span>
    </button>

    <input
      className={css.SearchFormInput}
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
