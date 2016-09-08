import React from 'react';
import Button from './Button';

class ConfirmButton extends Button {
	
	get className() {
		return this.props.className || 'confirm button component';
	}
	
	
}

export default ConfirmButton;