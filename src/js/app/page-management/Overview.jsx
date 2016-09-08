import React from 'react';
import UIPanel from '../ui/UIPanel';
import AddButton from '../ui/Button/AddButton';
import ContentList from './ContentList';

class Overview extends UIPanel {
	
	constructor( props ) {
		super( props );
	}
	
	get className() {
		return 'ui-panel overview component';
	}
	
	addNewClicked( event ) {
		console.info("Add new clicked on overview.");
		this.props.addNewClicked();
	}
	
	render(){
		console.log( this.props.content );
		
		return (
			<div className={this.className}>
				<header className="header">
					<h2 className="heading">Manage Content</h2>
					<AddButton label="Add New" handleClick={this.addNewClicked.bind( this ) }/>
				</header>
				<ContentList items={this.props.content}/>
			</div>
		);
	}
}

export default Overview;