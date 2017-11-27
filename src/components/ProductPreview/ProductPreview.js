import React from "react"
import {Link} from "react-router-dom"

export default class ProductPreview extends React.Component {
	constructor(props) {
		super(props)
	}
	renderProducts = (products) => {
		return products.map((el, index) => {
			const imgSrc = `/images/product/${el.id}.jpg`;
			return (
				<div className="product_box" key={index}>
					<div className="img_box"><span/>
						<Link to={`/product/${el.id}`}><img src={imgSrc} alt="image"/></Link>
					</div>
					<h2><Link to={`/product/${el.id}`}>{el.name}</Link></h2>
					<p className="price">{`$${el.price}`}</p>
				</div>
			);
		});
	};
	render() {
		return  this.renderProducts(this.props.products)
	}
}