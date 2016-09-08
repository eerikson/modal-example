import React from 'react';
import Component from '../Component';

class ContentTypeSelectList extends Component {
	
	get className() {
		return 'content-type-select-item component ' + this.props.term;
	}
	
	handleClick( event ) {
		this.props.typeSelected( this.props.term );
	}
	
	
	render(){
		
	
		return (
			<div className={this.className} onClick={this.handleClick.bind( this )}>
				<div className="icon" />
				<div className="meta">
					<h3 className="name">{this.props.name}</h3>
					<p className="description">{this.props.description}</p>
				</div>
			</div>
		)
	}
}

export default ContentTypeSelectList;