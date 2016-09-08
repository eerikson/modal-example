import React from 'react';
import Component from '../../Component';

class Button extends Component {
	
	get className() {
		let className = this.props.className || 'button component';
		// Add CSS awareness of icon if necessary.
		className += this.props.icon ? ' has-icon' : '';
		
		return className;
	}
	
	render() {
		
		const label = this.props.label || "Empty";
		const handler = this.props.handleClick || function() {};
		const specialIconStyle = this.props.icon ? { backgroundImage : 'url(' + this.props.icon + ')' } : null;
		
		return (	
			<button 
				onClick={handler} 
				className={this.className}
				style={specialIconStyle}>
				{label}
			</button>
		);
	}
	
}

export default Button;