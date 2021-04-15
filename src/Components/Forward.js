import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';

class Forward extends Component {
	render () {
		return (
			<Card id="main-card">
					<Card.Header>
						<Card.Title><h3>Skillset Summary</h3></Card.Title>
						<hr />
						<Card.Text>
							
							<h5 style={{color: '#555'}}>Full Stack Development</h5>
							<p>I practice full stack web development using either a LAMP stack, or a full stack javascript infrastructure. For front-end development, I perfer React to other frameworks (Vue, Angular) because of its speed. In tandem with the single threaded nature of nodejs, this js-stack approach is inceredibly fast and good for seo. 
							</p>
							
							<h5 style={{color: '#555'}}>Audio Mixing/Mastering</h5>
							<p>Through the use of industry-standard VST plugins like omnisphere and Fabfilter I can mix synthesized or recorded audio. The end product is always sonically even, from 0Hz up to 20kHz. I use Logic Pro X as a digital workspace, and enjoy plugins from waves, antares, spectrasonics, and the like.</p>
							<h5 style={{color: '#555'}}>Content Writing</h5>
							<p>
								I often write white papers or technical analysis when bloggers or companies are in a position where they don't have the time to curate a fully seo-optimized 1500-2000 word article. I like to blog in the cryptocurrency sphere, and am confident in technical writing with regards to information technology.
							</p>
							<h5 style={{color: '#555'}}>Graphical UI Development</h5>
							<p>In the past I used the tkinter module in python to implement GUI's, and generally speaking this is what i believe to be an excellent quick and dirty solution. That being said, we can also use the HTML/CSS/JS suite through the nodejs module electron, for a more professional feel. Electron is also platform independent. The catch being, electron was build on the chromium engine;</p>
						</Card.Text>
					</Card.Header>
			</Card>
		);

	}

}
export default Forward;
