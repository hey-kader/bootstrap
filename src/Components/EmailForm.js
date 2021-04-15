import React, {Component} from 'react';
import {Form, Button, Fieldset} from 'react-bootstrap';

class EmailForm extends Component {

	render () {
		return (
			<div>
			<Form className="mb-2">
				<Form.Group>
					<Form.Label style={{margin: "1rem 0.5rem 1.0rem 0.5rem"}}>General Inquiries: </Form.Label>
					<Form.Control style={{display: "inline-block", width: "33%"}} type="email" placeholder="contact@kaderarnold.com" />
					<Button style={{margin: "0.5rem"}} type="submit" variant="secondary">Enter</Button>
				</Form.Group>
			</Form>
			</div>
		);
	}

};
export default EmailForm;
