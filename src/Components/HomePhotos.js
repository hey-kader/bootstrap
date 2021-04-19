import React, {Component} from 'react';
import { Carousel } from 'react-bootstrap';

class HomePhotos extends Component {
	render () {

		return (
			<Carousel autoplay>
				<Carousel.Item interval={5000}>
					<div id="photo-set" className="photo-wrapper">
						<img className="main-pic" src="Images/4.jpg" alt="1" />
						<img className="second-pic" src="Images/6.jpg" alt="2" />
					</div>
				</Carousel.Item>

				<Carousel.Item interval={5000}>
					<div id="photo-set" className="photo-wrapper">
						<img className="main-pic" src="Images/1.jpg" alt="1" />
						<img className="second-pic" src="Images/3.jpg" alt="2" />
					</div>
				</Carousel.Item>
			</Carousel>
		);
	}
}

export default HomePhotos;
