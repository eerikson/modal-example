import React from 'react';
import Component from './Component';
import ConfirmButton from './ui/Button/ConfirmButton';

class PlaceholderPage extends Component {
	
	get className() {
		return 'placeholder-page component';
	}
	
	render() {
		return(
			<div className={this.className}>
				<ConfirmButton label="Click me please" handleClick={this.props.activateModal}/>
			</div>
		)
	}
	
}

export default PlaceholderPage;