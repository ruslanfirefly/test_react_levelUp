import React from 'react';
import { Switch, Route, } from 'react-router';
import { BrowserRouter as RouterLib } from 'react-router-dom';
import IndexPage from '../../components/Pages/Index/Index';
import ProductDetailedPage from '../../components/Pages/ProductDetailed/ProductDetailed';

export default class Router extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<RouterLib>
				<Switch>
					<Route path="/" component={IndexPage} exact={true}/>
					<Route path="/product/:id" component={ProductDetailedPage}/>
				</Switch>
			</RouterLib>
		);
	}
}