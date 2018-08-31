import React, {Component } from 'react';
import Nav from './components/Nav.js'
import Modal from './Modal.js'


class Modal extends Component {

  render(){
    if (this.props.isOpen === false){
  	return null
    } else {
    return(
      	<div>
        	<div className='modalStyle'>
            {this.props.children}
        	</div>

        	<div className='backgroundModal' onClick={this.props.onClose}/>}
        </div>
    )
  }
}
export default Modal