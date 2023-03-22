import React, {Component} from "react";
import css from 'components/Modal/Modal.module.css'

class Modal extends Component {
    state = {  } 
    componentDidMount(){      
       // console.log('pryvit did')
        window.addEventListener('keydown', this.handleKeydown)
    }

    componentWillUnmount(){
      //  console.log("will")
        window.removeEventListener('keydown', this.handleKeydown)
    }

    handleKeydown = e => {
            if(e.code === 'Escape'){
              //  console.log('esc')
                this.props.closeModal();
            }
    }

    handleBackdropClick = event => {      
        // console.log(event.currentTarget, 'current')
        // console.log(event.target, 'target')
        if(event.currentTarget===event.target){
            this.props.closeModal()
        }
    }
        
    render() { 
        return (
            <div className={css.Overlay} onClick={this.handleBackdropClick}>
                <div className={css.Modal}><img src={this.props.largeImageURL} alt="" width={900}/></div>
            </div>
        );
    }
}
 
export default Modal;