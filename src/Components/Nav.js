import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../App.js'

import Forward from './Forward';
import Overview from './Overview';

class Nav extends Component {
	render () {
		const style = {
			background: "#ffd769",  
			height: "90%", 
			width: "auto"
		};
		return (
		  <nav style={style}>
			  <ul style={{listStyleType: "none", display: "inline-block" }}>
				  <Link style={{color: 'black'}} to="/" >
					  <h1 style={{margin: "0.5rem 0.5rem 0rem 0.5rem"}}>Kader Arnold</h1>
				  </Link>
				  <Link style={{color: 'black', display: "inline-block", margin: "0.25rem", padding: "0.3rem", fontSize: "90%"}} to="/overview">
					<li>Overview</li>
				  </Link>
				  <Link style={{color: 'black', display: "inline-block", margin: "0.25rem", padding: "0.3rem", fontSize: "90%"}} to="/forward"> 
					<li>Forward</li>
				</Link>
			  </ul>
			  <p style={{fontSize: "55%", opacity: "70%", width: "50%", contentAlign: "right", display: "inline-block",  margin: "0px", padding: "0rem"}} >Kader Arnold, 21, Philadelphia</p>
		  </nav>
		);
	};

};

export default Nav;
