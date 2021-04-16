import React, {Component} from 'react';
import {Form, Button, Fieldset} from 'react-bootstrap';

class EmailForm extends Component {

	render () {
		return (
			<div style={{background: "#ffa569"}}>
				<Form className="mb-4">
					<Form.Group>
						<Form.Label style={{margin: "1rem 0.5rem 2.5rem 1rem", width: "55%", float: "left", contentAlign: "left"}}>General Inquiries: </Form.Label>
						<Form.Control style={{display: "inline-block", width: "27%", contentAlign: "right"}} type="email" placeholder="contact@kaderarnold.com" />
						<Button style={{margin: "0.4rem .2rem 0.5rem 1rem", size: "50%", display: "inline-block"}} type="submit" variant="primary">Enter</Button>
					</Form.Group>
				</Form>
			</div>
		);
	}

};
export default EmailForm;
