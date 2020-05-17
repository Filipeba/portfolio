import React from 'react';
import github from './icons/github.svg';
import trophy from './icons/trophy.svg';
import project from './icons/project.svg';
import portfoliowebsitefrontpage from './img/portfoliowebsitefrontpage.PNG';
import weatherappfrontpag from './img/weatherappfrontpage.png';
import facialrecognitionappfrontend from './img/facialrecognitionappfrontend.PNG';
import { CardDeck, Card, Button } from 'react-bootstrap';

export default function Maincard() {
	return (
		<React.Fragment>
			<h2 className="mb3">
				<img alt="trophy icon" className="icons" src={trophy} /> Featured Projects
			</h2>
			<CardDeck>
				{/*Card 1*/}
				<Card>
					<Card.Img alt="weather app front page" src={weatherappfrontpag} height="160" width="206" />
					<Card.Body>
						<h5>Weather App</h5>
						<p>A Weather Web App using vanilla JavaScript</p>
						<Card.Text>
							Requests the Location and shows the current Weather Forecast. Features temperature in either
							Fahrenheit or Celsius.
							<h6 className="mt4">Technologies:</h6>
							<li>
								<strong>Front End:</strong> HTML, CSS, Bootstrap and JavaScript
							</li>
							<li>
								<strong>Back End:</strong> Dark Sky API
							</li>
						</Card.Text>
					</Card.Body>
					<ul className="pa0 ma0 mb3">
						<a href="https://github.com/Filipeba/weatherapp.github.io">
							<Button variant="primary">
								<img alt="github icon" className="icons" src={github} /> View Source
							</Button>
						</a>
						<hr style={{ visibility: 'hidden' }} />
						<a href="https://filipeba.net/weatherapp.github.io/">
							<Button variant="primary">
								<img alt="project icon" className="icons" src={project} /> View Project
							</Button>
						</a>
					</ul>
				</Card>
				{/*Card 1*/}
				{/*Card 2*/}
				<Card>
					<Card.Img
						alt="facial recognition app front end"
						src={facialrecognitionappfrontend}
						height="160"
						width="206"
					/>
					<Card.Body>
						<h5>Facial Recognition App</h5>
						<p>Detects Multiple Faces within an Image</p>
						<Card.Text>
							Detects multiple faces on images, drawing a box around them. User can enter as Guest or Sign
							In. Features "Display Name" and "Entry Count".
							<h6 className="mt4">Technologies:</h6>
							<li>
								<strong>Front End:</strong> React + Material UI
							</li>
							<li>
								<strong>Back End:</strong> Facial Recognition API
							</li>
						</Card.Text>
					</Card.Body>
					<ul className="pa0 ma0 mb3">
						<a href="https://github.com/Filipeba/facial-recognition-app-front-end">
							<Button variant="primary">
								<img alt="github icon" className="icons" src={github} /> View Source
							</Button>
						</a>
						<hr style={{ visibility: 'hidden' }} />
						<a href="http://g.recordit.co/mWBCyWGah6.gif">
							<Button variant="primary">
								<img alt="project icon" className="icons" src={project} /> Preview Project
							</Button>
						</a>
					</ul>
				</Card>
				{/*Card 2*/}
				{/*Card 3*/}
				<Card>
					<Card.Img variant="top" src={portfoliowebsitefrontpage} height="160" width="206" />
					<Card.Body>
						<h5>Portfolio Website</h5>
						<p>Showcase Projects, Contact information and Resume</p>
						<Card.Text>
							Mobile First Design, Stable, Fast and Responsive.
							<h6 className="mt4">Technologies:</h6>
							<li>
								<strong>Front End:</strong> React and React-Bootstrap
							</li>
							<li>
								<strong>Back End:</strong> NA
							</li>
						</Card.Text>
					</Card.Body>
					<ul className="pa0 ma0 mb3">
						<a href="https://github.com/Filipeba/portfolio">
							<Button variant="primary">
								<img alt="github icon" className="icons" src={github} /> View Source
							</Button>
						</a>
						<hr style={{ visibility: 'hidden' }} />
						<a href="https://filipeba.net">
							<Button variant="primary">
								<img alt="project icon" className="icons" src={project} /> View Project
							</Button>
						</a>
					</ul>
				</Card>
				{/*Card 3*/}
			</CardDeck>
			<br />
		</React.Fragment>
	);
}
