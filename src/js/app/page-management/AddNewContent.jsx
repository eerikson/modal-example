import React from 'react';
import UIPanel from '../ui/UIPanel';
import ContentTypeSelectList from './ContentTypeSelectList';

class AddNewContent extends UIPanel {
	
	constructor( props ) {
		super( props );
	}
	
	get className() {
		return 'ui-panel add-new-content component';
	}
	
	handleTypeSelected( type ) {
		this.props.contentTypeSelected( type );
	}
	
	render(){
		return (
			<div className={this.className}>
				<header className="header">
					<h2 className="heading">Add Content</h2>
				</header>
				<ContentTypeSelectList contentTypes={this.props.contentTypes} typeSelected={this.handleTypeSelected.bind( this )}/>
			</div>
		);
	}
}

export default AddNewContent;