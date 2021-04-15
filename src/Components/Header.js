import React, {Component} from 'react';
import {Button, Card, Nav, Form} from 'react-bootstrap';
import HomePhotos from './HomePhotos';
import EmailForm from './EmailForm';
import "../App.js";
import {Link} from 'react-router-dom';

class Header extends Component {
	
	render () {
		return (
	
			<div>
				<Card style={{contentJustify: "center-align"}}>
					<Card.Header>
						<Card.Title><h1 style={{fontFamily: "Times"}}>Kader Arnold</h1></Card.Title>
					</Card.Header>

					<Nav variant="tabs" bg="#eee" style={{margin: ".1rem", padding: ".1rem"}}>
							<Nav.Item style={{maxWidth: '34%'}}>
								<Nav.Link  id="foreword" style={{color: 'black'}}>Foreword</Nav.Link>
							</Nav.Item>
							<Nav.Item style={{maxWidth: '34%', contentAlign: "center"}}>
									<Nav.Link id="overview" style={{color: 'black'}}>Overview</Nav.Link>
							</Nav.Item>
					</Nav>

					<Card.Body id="photos" style={{padding: ".5rem", margin: ".5rem", contentAlign: "center"}}>
						<HomePhotos />
						<Card.Text style={{margin: "0.5rem", fontSize: "30%", opacity: "50%"}}>Kader Arnold, 21, Philadelphia</Card.Text>
					</Card.Body>
				</Card>
			</div>	
				
		);
	};

}

export default Header;
