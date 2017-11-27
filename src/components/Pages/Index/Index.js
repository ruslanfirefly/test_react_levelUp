import React from 'react';
import ProductReview from '../../ProductPreview/ProductPreview';
import BasePage from '../BasePage/BasePage';
import db from '../../../testDB/db';


export default class Index extends React.Component {
	constructor(props) {
		super(props);
	}

	getNewProducts = () => {
			return db.filter(el=>el.aval)
	};
	getPopularProducts = () => {
		return db.filter(el=>!el.aval)
	};
	render() {
		return (
			<BasePage>
				<span className="main_border main_border_t"/>
				<span className="main_border main_border_b"/>
				<div className="product">
					<h1>New Products</h1>
					<ProductReview products={this.getNewProducts()}/>
				</div>

				<div className="clear h20"/>
				<hr/>
				<div className="clear h10"/>

				<div className="product">
					<h1>Popular Products</h1>
					<ProductReview products={this.getPopularProducts()}/>
				</div>

				<div className="clear"/>
			</BasePage>
		);
	}
}