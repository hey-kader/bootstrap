import React, {Component} from 'react';

class HomePhotos extends Component {
	render () {

		const picStyle = {
			maxWidth: "50%", 
		};

		return (
			<>
			<div id="photo-set" className="photo-wrapper">
				<img className="main-pic" style={picStyle} src="Images/pics/two/4.jpg" alt="1" />
				<img className="main-pic" style={picStyle} src="Images/pics/two/6.jpg" alt="2" />
			</div>
			</>
		);
	}
}

export default HomePhotos;
