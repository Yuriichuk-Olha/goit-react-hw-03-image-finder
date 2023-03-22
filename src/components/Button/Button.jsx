import React, {Component} from "react";
import css from 'components/Button/Button.module.css'
// , loadMore
class Button extends Component {
    render() { 
        const {onLoadMoreClick}= this.props
        console.log(onLoadMoreClick)
        return (
            <>
            <button type='button'
            className={css.Button}
            // onClick={()=>loadMore}
             onClick={()=>onLoadMoreClick}
            >
            Load More
            </button>
            </>
        )
    }
}
 
export default Button;