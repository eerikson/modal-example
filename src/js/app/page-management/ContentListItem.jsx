import React from 'react';
import Component from '../Component';
import ToggleButton from '../ui/Button/ToggleButton';
import truncate from 'truncate';
import Sortable from 'sortablejs';

class ContentListItem extends React.Component {
	constructor( props ) {
		super( props );
		this.state = {
			active : this.props.active
		}
	}
	
	get className() {
		const activeClass = this.state.active ? ' active' : '';
		return 'content-list-item component ' + this.props.type + activeClass;
	}
	
	get name() {
		return truncate( this.props.name, 35, { ellipsis: '…' } );
	}
	
	componentDidMount() {
		if ( this.refs.nestedItems ) {
			var sortable = Sortable.create(this.refs.nestedItems, {
				handle: '.hamburger'
			});
		}
		
	}
	
	handleActiveChange( state ) {
		
		// Take state from Toggle UI component at face value.
		this.setState({
			active : state
		});
	}
	
	render(){
		
		const nestedItems = this.props.items ? this.props.items.map( ( nestedItem, index ) => {
			return (
				<li key={index}>
					<ContentListItem {...nestedItem} />
				</li>
			);
		}) : null;
		
		const nestedGroup = nestedItems ? <ul ref="nestedItems" className="nested-list-items">{nestedItems}</ul> : null;
		
		return (
			<div className={this.className}>
				<div className="primary">
					<div className="hamburger" >
						<div className="lines">
							<div className="line" />
							<div className="line" />
							<div className="line" />
						</div>
					</div>
					<figure className="icon" />
					<h3 className="title">{this.name}</h3>
					<ToggleButton active={this.props.active} activeStateDidChange={this.handleActiveChange.bind( this )} />
				</div>
				{nestedGroup}
			</div>
		)
	}
}

export default ContentListItem;