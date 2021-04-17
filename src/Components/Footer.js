import React, {Component} from 'react';
import {Button} from 'react-bootstrap';

class Footer extends Component {
	
	render () {
		return (
			<footer>
				<address>
					<a style={{marginRight: "0.5rem"}} href="https://www.instagram.com/a_social_engineer/"
						className="fa fa-instagram footer-icon" target= "_blank"></a>	
					<a style={{marginRight: "0.5rem"}} ref="https://www.twitter.com/kaderwav/" 
						className="fa fa-twitter footer-icon" target="_blank"></a>
					<a style={{marginRight: "0.5rem"}} href="https://www.github.com/pablopenrose/" 
						className="fa fa-github footer-icon" target="_blank"></a>
				</address>
			</footer>
		);
	}

}

export default Footer; 
