import React from 'react';
import ProductReview from '../../ProductPreview/ProductPreview';
import BasePage from '../BasePage/BasePage';
import db, {getDataByID} from '../../../testDB/db';

export default class ProductDetailed extends React.Component {
	constructor(props) {
		super(props);
		console.log(props);
	}

	renderProductInfo = (p) => {
		return (
			<div className="product">
				<div className="col col_2 product_preview">
					<a rel="lightbox" href="/images/product/07_l.jpg">
						<img src={`/images/product/${p.id}.jpg`} className=" left" alt="image"/></a>
					<ul className="nobullet">
						<li>
							<a rel="lightbox" href="/images/product/07_l.jpg">
								<img src={`/images/product/${p.id}_xs.jpg`} alt="image"/>
							</a>
						</li>
						<li>
							<a rel="lightbox" href="/images/product/07_l.jpg">
								<img src={`/images/product/${p.id}_xs.jpg`} alt="image"/>
							</a>
						</li>
					</ul>
					<div className="clear"/>
				</div>
				<div className="col col_2 product_detail">
					<h1>Product Detail</h1>
					<p> {p.description} </p>
					<div className="clear h20"></div>
					<p className="price">${p.price}<span>Avaliability:
						<strong>{p.aval ? 'In' : 'Out of'} stock</strong> </span></p>
					<div className='clear h20'></div>
					<p className="add_to_cart">Quantity
						<input type="text" defaultValue="1" style={{ width: '20px', textAlign: 'right' }}/>
					</p>
					<a href='shoppingcart.html' className='button left'>Add to Cart</a>
				</div>
				<div/>
				<div className="clear"/>
			</div>
		);
	};

	render() {
		const productID = this.props.match.params.id;
		const prodArr = getDataByID(productID);
		return (
			<BasePage>
				<span className="main_border main_border_t"/>
				<span className="main_border main_border_b"/>

				{prodArr.length ? this.renderProductInfo(prodArr[0]) : <h1>Product not found</h1>}
				<hr/>

				<div className="product">
					<h2>Recommended Products</h2>
					<ProductReview products={db}/>
				</div>

				<div className="clear"/>
			</BasePage>
		);
	}
}


