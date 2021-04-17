import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';
import '../App.js'

import EmailForm from './EmailForm';
import Forward from './Forward';
import Overview from './Overview';

class Nav extends Component {
	render () {
		const style = {
			background: "#ffd769",  
			margin: "0"
		};
		return (
		  <nav style={style}>
			  <ul style={{listStyleType: "none", display: "inline-block" }}>

				  <Link style={{color: 'black'}} to="/" >
					  <h1 style={{margin: "0rem"}}>Kader Arnold</h1>
				  </Link>

				  <Link style={{color: 'black', display: "inline-block", margin: "0.25rem", padding: "0.3rem", fontSize: "90%"}} to="/overview">
					<li>Overview</li>
				  </Link>

				  <Link style={{color: 'black', display: "inline-block", margin: "0.25rem", padding: "0.3rem", fontSize: "90%"}} to="/forward"> 
					<li>Forward</li>
				</Link>
			  </ul>
			    <EmailForm />
		  </nav>
		);
	};

};

export default Nav;
