import React from 'react';
import ConfirmButton from './ConfirmButton';

class SubmitButton extends ConfirmButton {
	
	get className() {
		return this.props.className || 'confirm submit button component';
	}
	
	render() {
		const label = this.props.label || "Empty";
		const handler = this.props.handleClick || function() {};
		
		return (	
			<button
			 	type="submit"
				onClick={handler} 
				className={this.className}>
				{label}
			</button>
		);
	}
	
	
}

export default SubmitButton;