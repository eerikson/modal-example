import React from 'react';
import UIPanel from '../ui/UIPanel';
import SubmitButton from '../ui/Button/SubmitButton';


class AddNewPage extends UIPanel {
	
	constructor( props ) {
		super( props );
		this.state = {
			title : ""
		}
	}
	
	get className() {
		return 'ui-panel add-new-page component';
	}
	
	commit() {
		console.log("Commit with value:", this.state.title)
		this.props.addPage( this.state.title );
	}
	
	submitButtonClicked() {
		this.commit();
	}
	
	handleInputChange( event ) {
		this.setState({
			title : event.target.value
		});
	}
	
	handleFormSubmit( event ) {
		event.preventDefault();
		// Forward event to submit button handler
		this.commit();
	}
	
	render(){
		return (
			<div className={this.className}>
				<header className="header">
					<h2 className="heading">Add New Page</h2>
				</header>
				<div className="inner-cell">
					<div className="icon" />
					<h5 className="page-type">Page</h5>
					<form className="page-title-form" onSubmit={this.handleFormSubmit.bind( this ) }>
						<input 
							type="text" 
							ref="titleInput" 
							className="title-input" 
							placeholder="Name your page" 
							value={this.state.title}
							onChange={this.handleInputChange.bind( this ) }
							/>
						<SubmitButton label="Add Page" />
					</form>
				</div>
			</div>
		);
	}
}

export default AddNewPage;