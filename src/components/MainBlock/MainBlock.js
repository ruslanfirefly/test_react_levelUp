import React from 'react';

export default class MainBlock extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id="tooplate_main">
				{this.props.children}
			</div>
		);
	}
}