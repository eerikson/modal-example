import React from 'react';
import Button from './Button';

class ToggleButton extends Button {
	
	constructor( props ) {
		super( props );
		
		this.state = {
			active : this.props.active
		};
	}
	
	get className() {
		const activeClass = this.state.active ? ' active' : '';
		return this.props.className || 'toggle button component' + activeClass;
	}
	
	handleClick() {
		// Toggle active state
		this.setState(
			{
				active : !this.state.active
			},
			() => {
				this.props.activeStateDidChange( this.state.active );
			}
		);
		
		
	}
	
	render() {
		return (
			<button className={this.className} onClick={this.handleClick.bind( this )}>
				<span className="ball" />
			</button>
		);
	}
}

export default ToggleButton;