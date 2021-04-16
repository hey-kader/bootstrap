import React, {Component} from 'react';
import {Form, Button, Fieldset} from 'react-bootstrap';

class EmailForm extends Component {

	render () {
		return (
			<div style={{background: "#ffa569"}}>
				<Form className="mb-4">
					<Form.Group>
						<Form.Label style={{margin: "1rem 0.5rem 0.5rem 1rem", width: "63%", float: "left", contentAlign: "leftJustify"}}>General Inquiries: </Form.Label>
						<Form.Control style={{display: "inline", width: "24%"}} type="email" placeholder="contact@kaderarnold.com" />
						<Button style={{margin: "0.4rem .5rem 0.5rem 1rem", size: "50%", display: "inline-block"}} type="submit" variant="primary">Enter</Button>
					</Form.Group>
				</Form>
			</div>
		);
	}

};
export default EmailForm;
