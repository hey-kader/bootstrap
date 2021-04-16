import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../App.js'

import Forward from './Forward';
import Overview from './Overview';

class Nav extends Component {
	render () {
		const style = {
			background: "#ffd769"
		};
		return (
		  <nav style={style}>
			  <ul style={{listStyleType: "none", display: "inline-block" }}>
				  <Link style={{color: 'black'}} to="/" >
						<h1>Kader Arnold</h1>
				  </Link>
				  <Link style={{float: "right", color: 'black', display: "inline-block", margin: "0.4rem", padding: "0.4rem", fontSize: "0.9%"}} to="/overview">
					<li>Overview</li>
				  </Link>
				  <Link style={{float: "right", color: 'black', display: "inline-block", margin: "0.4rem", padding: "0.4rem", fontSize: "0.9%"}} to="/forward"> 
					<li>Forward</li>
				</Link>
			  </ul>
			  <p style={{fontSize: "60%", opacity: "70%", textAlign: "right", display: "inlineBlock", margin: "0px", padding: "0.5rem"}} >Kader Arnold, 21, Philadelphia</p>
		  </nav>
		);
	};

};

export default Nav;
