import React from 'react';
import github from './icons/github.svg';
import folder from './icons/folder.svg';
import './styles.css';
import img from './img/underdeveloptment.jpg';
import project from './icons/project.svg';
import facialrecognitionappfrontend from './img/facialrecognitionappfrontend.PNG';
import { CardDeck, Card, Button } from 'react-bootstrap';

export default function PortfolioPage() {
	return (
		<React.Fragment>
			<h2 className="mt4 mb3">
				<img alt="folder icon" className="icons" src={folder} /> Projects
			</h2>
			<CardDeck>
				{/*Card 1*/}
				<Card>
					<Card.Img
						alt="facial recognition api front end"
						src={facialrecognitionappfrontend}
						height="160"
						width="206"
					/>
					<Card.Body>
						<h6>Facial Recognition API</h6>
						<p>Detects Multiple Faces within an Image</p>
						<Card.Text>
							Detects multiple faces on images, drawing a box around them. User can enter as Guest or Sign
							In. Features "Display Name" and "Entry Count".
							<h6 className="mt4">Technologies:</h6>
							<li>
								<strong>Front End:</strong> Facial Recognition App
							</li>
							<li>
								<strong>Back End:</strong> Node, Express, PostgreSQL and Clarifai API
							</li>
						</Card.Text>
					</Card.Body>
					<ul className="pa0 ma0 mb3">
						<a href="https://github.com/Filipeba/facial-recognition-api-back-end">
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
				{/*Card 1*/}
				{/*Card 2*/}
				<Card>
					<Card.Img alt="Under development" src={img} height="160" width="206" />
					<Card.Body>
						<h6>Under development</h6>
						<p>This project is under development</p>
						<Card.Text>
							This project is under development.
							<h6 className="mt4">Technologies:</h6>
							<li>
								<strong>Front End:</strong> NA
							</li>
							<li>
								<strong>Back End:</strong> NA
							</li>
						</Card.Text>
					</Card.Body>
					<ul className="pa0 ma0 mb3">
						<a href="https://github.com/Filipeba">
							<Button variant="primary">
								<img alt="github icon" className="icons" src={github} /> View Source
							</Button>
						</a>
						<hr style={{ visibility: 'hidden' }} />
						<a href="https://filipeba.net">
							<Button variant="primary">
								<img alt="project icon" className="icons" src={project} /> Preview Project
							</Button>
						</a>
					</ul>
				</Card>
				{/*Card 2*/}
				{/*Card 3*/}
				<Card>
					<Card.Img variant="top" src={img} height="160" width="206" />
					<Card.Body>
						<h6>Under development</h6>
						<p>This project is under development</p>
						<Card.Text>
							This project is under development.
							<h6 className="mt4">Technologies:</h6>
							<li>
								<strong>Front End:</strong> NA
							</li>
							<li>
								<strong>Back End:</strong> NA
							</li>
						</Card.Text>
					</Card.Body>
					<ul className="pa0 ma0 mb3">
						<a href="https://github.com/Filipeba">
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
