import PropTypes from 'prop-types';
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
    const {search} = this.state;
    const {onSubmit} = this.props;
    
    event.preventDefault();
    if(search.trim()===''){
        return alert('An empty line')
    }

    onSubmit(search)
    this.setState({search:''})
  }
  render() {
    const {search} = this.state
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
      value={search}
      onChange={this.handleChange}
    />
  </form>
</header>
    )
  }
}

export default Searchbar;

Searchbar.propTypes={
  search:PropTypes.string,
}