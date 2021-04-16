import React, { Component, useState } from 'react';

class Overview extends Component {


	render () {
		const style = {
			width: "100%",
			contentAlign: "center", 
			margin: "auto"
		}
		return (
			<img src="./sunlook.jpeg" style={style}  alt="sunlook" id="sunlook" />
		);
	}

}



export default Overview;
