import React from 'react';
import ProductReview from '../../ProductPreview/ProductPreview';
import BasePage from '../BasePage/BasePage';
import db from '../../../testDB/db';
import { connect } from 'react-redux';
import { getAllProducts } from '../../../actions/products.action';

class Index extends React.Component {
	constructor(props) {
		super(props);
		console.log(props);
		if (!this.props.products.get("data").size) {
			this.props.getAllProducts();
		}

	}

	getNewProducts = () => {
		return db.filter(el => el.aval);
	};
	getPopularProducts = () => {
		return db.filter(el => !el.aval);
	};

	render() {
		console.log('product props', this.props.products);
		return (
			<BasePage>
				<span className="main_border main_border_t"/>
				<span className="main_border main_border_b"/>
				<div className="product">
					<h1>New Products</h1>
					{!this.props.products.get("fetching")?<ProductReview products={this.getNewProducts()}/>:"LOADING"}
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

export default connect(
	(state) => ({
		products: state.products,
	}),
	(dispatch) => ({
		getAllProducts: () => {
			dispatch(getAllProducts());
		},
	}),
)(Index);