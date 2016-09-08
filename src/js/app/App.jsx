import React from 'react';
import Component from './Component';
import PlaceholderPage from './PlaceholderPage';
import Modal from './ui/Modal';
import PageManager from './page-management/PageManager';

class App extends Component {
	
	constructor( props ) {
		super( props );
		this.state = {
			modalOpen : false
		}
	}
	
	activateModal() {
		this.setState({
			modalOpen : true
		});
	}
	
	deactivateModal() {
		this.setState({
			modalOpen : false
		});
	}
	
	render() {
		
		const modal = this.state.modalOpen ? <Modal><PageManager userFinished={this.deactivateModal.bind( this )} /></Modal> : null;
		
		return (
			<div className={this.className}>
				<PlaceholderPage activateModal={this.activateModal.bind( this )} />
				{modal}
			</div>
		);
	}
	
}

export default App;