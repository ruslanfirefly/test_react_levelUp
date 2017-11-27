import React from 'react';

export default class Header extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>

				<div id="tooplate_header">
					<div id="header_top">
						<div id="site_title"><a href="index.html">Clothing Template</a></div>
						<div id="tooplate_menu" className="ddsmoothmenu">
							<ul>
								<li><a href="index.html" className="selected">Home</a></li>
								<li><a href="products.html">Products</a>
									<ul>
										<li><a href="#">Category One</a></li>
										<li><a href="#">Category Two</a></li>
										<li><a href="#">Category Three</a></li>
										<li><a href="#">Category Four</a></li>
										<li><a href="#">Category Five</a></li>
									</ul>
								</li>
								<li><a href="about.html">About</a></li>
								<li><a href="faqs.html">FAQs</a></li>
								<li><a href="contact.html" className="last">Contact</a></li>
							</ul>
							<br style={{ clear: 'left' }}/>
						</div>

					</div>

					<div id="header_bottom">
						<p>
							<a href="shoppingcart.html">My Cart</a> |
							<a href="checkout.html">Check Out</a> |
							<span>Item in Cart ( 10 )</span>
						</p>

						<div id="tooplate_search">
							<form action="#" method="get">
								<input type="text" name="keyword" id="keyword" title="keyword"
								       className="txt_field"/>
								<input type="submit" name="Search" value=" " alt="Search" id="searchbutton" title="Search"
								       className="sub_btn"/>
							</form>
						</div>
					</div>
				</div>
			</div>

		);
	}
}