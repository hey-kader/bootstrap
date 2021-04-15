import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../App.js'

import Forward from './Forward';
import Overview from './Overview';

class Nav extends Component {
	render () {
		return (
		  <nav>
			  <ul style={{listStyleType: "none", display: "inline-block" }}>
				  <Link style={{color: 'black'}} to="/" >
						<h1>Kader Arnold</h1>
				  </Link>
				  <Link style={{color: 'black', display: "inline-block", margin: "0.4rem", padding: "0.4rem"}} to="/overview">
					<li>Overview</li>
				  </Link>
				  <Link style={{color: 'black', display: "inline-block", margin: "0.4rem", padding: "0.4rem"}} to="/forward"> 
					<li>Forward</li>
				</Link>
			  </ul>
		  </nav>
		);
	};
	
}
export default Nav;
