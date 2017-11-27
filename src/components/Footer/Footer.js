import React from 'react';

export default class Footer extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<div id="tooplate_bottom_wrapper">
					<div id="tooplate_bottom">
						<div className="col col_4">
							<h4>Information</h4>
							<ul className="list_bullet">
								<li><a href="#">Consectetur adipiscing eli</a></li>
								<li><a href="#">Nullam vulputate est</a></li>
								<li><a href="#">Duis porta velit</a></li>
								<li><a href="#">Pretium suscipit</a></li>
								<li><a href="#">Nullam eu diam</a></li>
								<li><a href="#">Duis in libero est</a></li>
							</ul>
						</div>
						<div className="col col_4">
							<h4>Services &amp; Support</h4>
							<ul className="list_bullet">
								<li><a href="#">Duis porta velit</a></li>
								<li><a href="#">Pretium suscipit</a></li>
								<li><a href="#">Nullam eu diam</a></li>
								<li><a href="#">Duis in libero est</a></li>
								<li><a href="#">Aenean tincidunt</a></li>
								<li><a href="#">Morbi tempus iaculis</a></li>
							</ul>
						</div>
						<div className="col col_4 twitter">
							<h4>Pages</h4>
							<ul className="list_bullet">
								<li><a href="index.html">Home</a></li>
								<li><a href="#">Products</a></li>
								<li><a href="about.html" className="selected">About</a></li>
								<li><a href="faqs.html">FAQs</a></li>
								<li><a href="contact.html" className="last">Contact</a></li>
							</ul>
						</div>
						<div className="col col_4">
							<h4>Newsletter</h4>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
							<div id="tooplate_newsletter">
								<form action="#" method="get">
									<input type="text" name="keyword" id="keyword" title="keyword"
									       className="txt_field"/>
									<input type="submit" name="Search" alt="Search" id="searchbutton" title="Search"
									       className="sub_btn"/>
								</form>
							</div>
							<div className="clear h30"/>
							<a href="#"><img src="/images/facebook.png" alt="Facebook"/></a>
							<a href="#"><img src="/images/google.png" alt="Google"/></a>
							<a href="#"><img src="/images/skype.png" alt="Skype"/></a>
							<a href="#"><img src="/images/twitter2.png" alt="Twitter"/></a>
						</div>
						<div className="clear"/>
					</div>
				</div>

				<div id="tooplate_footer_wrapper">
					<div id="tooplate_footer">
						Copyright © 2048 Your Company Name- Designed by
						<a href="http://www.tooplate.com">Tooplate</a>
					</div>
				</div>
			</div>
		);
	}
}