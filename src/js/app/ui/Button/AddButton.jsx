import React from 'react';
import Button from './Button';

class AddButton extends Button {
	
	get className() {
		return this.props.className || 'add button component';
	}	
}

export default AddButton;