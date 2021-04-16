import React, { useState, useEffect } from 'react';
import {Button, Card} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";



function Counter () {
	const [count, setCount] = useState(0);

	useEffect(() => {
		var t = "active users: ";
		document.title = count;
	}); 

	const stylesheet = {
		width: "50%", 
		textAlign: "center"

	};
	

	return ( 
		<Card style={stylesheet}>
			<Card.Header>
				<Card.Title>Members Online: {count}</Card.Title>
			</Card.Header>
		</Card>
	);


}


export default Counter;
