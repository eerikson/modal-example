import React from 'react';

class Component extends React.Component {
	get className() {
		return this.props.className || 'component';
	}
}

export default Component;