import React, { Component, useState } from 'react';

class Overview extends Component {


	render () {
		const style = {
			width: "50%"
		}
		return (
			<>
			<img src="./Images/pics/two/1.jpg" style={style}  alt="traditional digital portraits" id="one" />
			<img src="./Images/pics/two/3.jpg" style={style}  alt="against the flower wall in rittenhouse park" id="three" />
			</>
		);
	}

}



export default Overview;
