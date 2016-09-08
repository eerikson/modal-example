import React from 'react';
import Component from '../Component';

class Modal extends Component {
	
	get className() {
		return this.props.className || 'modal component';
	}
	
	componentDidMount() {
		// After reflow finish, add animate-in transition.
		window.setTimeout( () => {
			window.requestAnimationFrame( () => {
				this.refs.root.classList.add( 'animate-in');
			});
		}, 1 );
	}
	
	// No animate out transition for now.
	
	
	render() {
		return (	
			<div ref="root" className={this.className}>
				<div className="overlay-bg" />
				<aside className="modal-content">
					{this.props.children}
				</aside>
			</div>
		);
	}
	
}

export default Modal;