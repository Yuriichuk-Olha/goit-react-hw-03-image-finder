import PropTypes from 'prop-types';
import React, {Component} from "react";
import css from 'components/Button/Button.module.css'

class Button extends Component {
    render() { 
        const {onLoadMoreClick}= this.props

        return (
            <>

            <button type='button'
            className={css.Button}
            onClick={()=>onLoadMoreClick()}>
            Load More
            </button>
            
            </>
        )
    }
}
 
export default Button;

Button.propTypes={
    onLoadMoreClick:PropTypes.func,
}