import React from 'react';
import Component from '../Component';
import ContentTypeSelectItem from './ContentTypeSelectItem';

class ContentTypeSelectList extends Component {
	
	get className() {
		return 'content-type-select-list component';
	}
	
	
	render(){
		
		const items = this.props.contentTypes.map( ( type, index ) => {
			
			return (
				<li key={index}>
					<ContentTypeSelectItem {...type} typeSelected={this.props.typeSelected}/>
				</li>
			);
		});
		
		
		
		return (
			<ul className={this.className} >
				{items}
			</ul>
		)
	}
}

export default ContentTypeSelectList;