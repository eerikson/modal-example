import React from 'react';
import Component from '../Component';
import Overview from './Overview';
import AddNewContent from './AddNewContent';
import AddNewPage from './AddNewPage';
import { contentTypes, placeholders } from '../../constants';
import ConfirmButton from '../ui/Button/ConfirmButton';
import Button from '../ui/Button/Button';

class PageManager extends Component {
	
	constructor( props ) {
		super( props );
		this.state = {
			uiIndex : 0,
			content: placeholders.content
		}
	}
	
	get className() {
		return 'page-manager component';
	}
	
	goForward() {
		this.setState({
			uiIndex : this.state.uiIndex + 1
		});
	}
	
	goBack() {
		this.setState({
			uiIndex : this.state.uiIndex - 1
		});
	}
	
	goToBeginning() {
		this.setState( {
			uiIndex : 0
		});
	}
	
	userFinished() {
		console.log("USER FINISHED.");
		this.props.userFinished();
	}
	
	addPage( pageName ) {
		console.info("Adding " + pageName + " to state:" );
		const tempObj = {
			type: "page",
			active : true,
			name : pageName
		}
		
		this.setState(
			{
				content: this.state.content.concat( [tempObj] )
			}, 
			() => {
				// Next, go immediately to the beginning of the track.
				this.goToBeginning();
			}
		)
	}
	
	render(){
		
		let contextualButton = this.state.uiIndex === 0 ? 
			<ConfirmButton label="Done" handleClick={this.userFinished.bind( this ) } /> :
			<Button label="Go Back" handleClick={this.goBack.bind( this )} icon="../img/back.svg"/>;
			
		
		return (
			<div className={this.className}>
				<div className={`panel-track index-${this.state.uiIndex}`}>
					<Overview addNewClicked={this.goForward.bind( this )} content={this.state.content}/>
					<AddNewContent contentTypeSelected={this.goForward.bind( this )} contentTypes={contentTypes}/>
					<AddNewPage addPage={this.addPage.bind( this ) }/>
				</div>
				<div className="navigation-controls">
					{contextualButton}
					<Button label="Cancel" handleClick={this.userFinished.bind( this ) } />
				</div>
			</div>
		);
	}
}

export default PageManager;