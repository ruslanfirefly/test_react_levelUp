import React from "react"
import Header from '../../Header/Header';
import MainBlock from '../../MainBlock/MainBlock';
import Footer from '../../Footer/Footer';

export default class BasePage extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div id="tooplate_wrapper">
				<Header/>
				<MainBlock>
					{this.props.children}
				</MainBlock>
				<Footer/>
			</div>
		)
	}
}