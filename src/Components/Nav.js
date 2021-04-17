import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import '../App.js'

import Forward from './Forward';

class Nav extends Component {
	render () {
		const style = {
			background: "#ffd769",  
			fontFamily: "Times", 
			margin: "0"
		};
		return (
		
		  <nav style={style}>
			  <ul style={{listStyleType: "none", display: "inline-block" }}>

				  <Link style={{color: 'black'}} to="/" >
					  <h1 style={{margin: "0rem", fontFamily: "times"}}>Kader Arnold</h1>
				  </Link>

				  <Link style={{color: 'black', display: "inline-block", margin: "0.1rem", padding: "0.2rem", fontSize: "90%"}} to="/forward"> 
					<li>Forward</li>
				</Link>
			    <div style={{color: 'black', display: "inline-block", margin: "0.1rem", padding: "0.2rem", fontSize: "90%"}}> 
					  <li><a style={{color: "black"}} href="mailto:kaderarnold@icloud.com">Inquiries</a></li>
				</div>
			  </ul>
		  </nav>
		);
	};

};

export default Nav;
