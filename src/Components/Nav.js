import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import '../App.js'

import Forward from './Forward';

class Nav extends Component {
	render () {
		const style = {
			background: "#ffd769",  
			margin: "0px",
			padding: "0px", 
			display: "inline-block",
			width: "98%"
		};
		return (
		
		  <nav style={style}>
			  <ul style={{background: "#ffda669", listStyleType: "none"}}>

				  <Link style={{color: 'black', display: "inline-block"}} to="/" >
					  <h1>Kader Arnold</h1>
				  </Link>
				  <Link style={{color: 'black', margin: "0rem", padding: "0rem", fontSize: "80%"}} to="/forward"> 
					  <Button style={{float: "right", margin: "0.5rem", padding: "0.5rem"}}>Bio</Button>
				</Link>
				  <Button style={{float: "right", margin: "0.5rem", padding: "0.5rem"}}><a href="#" style={{color: "white"}}>CV</a></Button>
			  </ul>
		  </nav>
		);
	};

};

export default Nav;
