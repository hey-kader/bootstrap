import React, {Component} from 'react';
import {Form, Button, Fieldset} from 'react-bootstrap';

class EmailForm extends Component {

	render () {
		return (
			<div style={{float: "right", margin: "1rem"}}>
				<address>
					<Button>
						<a style={{color: 'white'}} 
						href="mailto:kaderarnold@icloud.com">Email</a>
					</Button>
				</address>
			</div>
		);
	}

};
export default EmailForm;
