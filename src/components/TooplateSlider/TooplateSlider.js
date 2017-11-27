import React from 'react';

export default class TooplateSlider extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div id="tooplate_slider" className="section_content">
				<span className="frame"/>
				<div id="carousel">
					<div className="panel">

						<div className="details_wrapper">

							<div className="details">

								<div className="detail">
									<h2>Dolor sit amet</h2>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec orci erat. </p>
									<a href="productdetail.html" title="Read more" className="slider_more">Read more</a>
								</div>

								<div className="detail">
									<h2>Lorem ipsum dolor</h2>
									<p> Donec nec orci vel risus condimentum suscipit dapibus quis justo.</p>
									<a href="productdetail.html" title="Read more" className="slider_more">Read more</a>
								</div>

								<div className="detail">
									<h2>Aenean massa cum sociis</h2>
									<p> Nam non lectus a nunc fringilla aliquet ac id lectus. </p>
									<a href="productdetail.html" title="Read more" className="slider_more">Read more</a>
								</div>

							</div>

						</div>

					</div>

					<a href="javascript:void(0);" className="previous" title="Previous">Previous</a>
					<a href="javascript:void(0);" className="next" title="Next">Next</a>

					<div id="slider-image-frame">
						<div className="backgrounds">

							<div className="item item_1">
								<img src="/images/slider/01.jpg" alt="image"/>
							</div>

							<div className="item item_2">
								<img src="/images/slider/02.jpg" alt="image"/>
							</div>

							<div className="item item_3">
								<img src="/images/slider/03.jpg" alt="image"/>
							</div>

						</div>
					</div>
				</div>
				<div className="clear"/>
			</div>
		);
	}
}