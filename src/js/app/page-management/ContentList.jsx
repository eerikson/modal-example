import React from 'react';
import Component from '../Component';
import ContentListItem from './ContentListItem';
import Sortable from 'sortablejs';


class ContentList extends Component {
	
	get className() {
		return 'content-list component';
	}
	
	componentDidMount() {
		var sortable = Sortable.create(this.refs.root, {
			handle: '.hamburger'
		});
	}
	
	render(){
		
		const items = this.props.items.map( ( item, index ) => {
			return (
				<li key={index}>
					<ContentListItem {...item} />
				</li>
			);
		});
		
		
		
		return (
			<ul className={this.className} ref="root">
				{items}
			</ul>
		)
	}
}

export default ContentList;