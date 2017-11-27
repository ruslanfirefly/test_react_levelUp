import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import MainBlock from './components/MainBlock/MainBlock';
import Footer from './components/Footer/Footer';
import IndexPage from "./components/Pages/Index/Index"
import ProductDetailed from "./components/Pages/ProductDetailed/ProductDetailed"

class App extends Component {
	render() {
		return (
			<div id="tooplate_wrapper">
				<Header/>
				<MainBlock>
					<IndexPage/>
					{/*<ProductDetailed/>*/}
				</MainBlock>
				<Footer/>
			</div>
		);
	}
}

export default App;
;
