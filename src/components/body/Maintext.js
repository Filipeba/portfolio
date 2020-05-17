import React from 'react';
import './styles.css';
import pdf from './icons/pdf.svg';
import resume from './resume.pdf';
import github from './icons/github.svg';
import linkedin from './icons/linkedin.svg';
import { Jumbotron, Button } from 'react-bootstrap';

export default function Maintext() {
	return (
		<Jumbotron style={{ backgroundColor: '#E7F5FF' }}>
			<h1>Filipe Bergami Alves</h1>
			<h2>Full Stack Developer</h2>
			<p>
				Proficient in{' '}
				<strong>
					<strong>HTML, CSS, JavaScript </strong>
				</strong>{' '}
				and{' '}
				<strong>
					<strong>React</strong>
				</strong>{' '}
				on the{' '}
				<strong>
					<strong>Front End</strong>
				</strong>. <br />
				As well as{' '}
				<strong>
					<strong>Node, Express, postgreSQL </strong>
				</strong>and{' '}
				<strong>
					<strong>MongoDB</strong>
				</strong>{' '}
				on the{' '}
				<strong>
					<strong>Back End</strong>
				</strong>. <br />
				Adept of{' '}
				<strong>
					<strong>Trello</strong>
				</strong>{' '}
				and{' '}
				<strong>
					<strong>Microsoft Project</strong>
				</strong>{' '}
				for{' '}
				<strong>
					<strong>Project Management</strong>
				</strong>.
			</p>
			<h4 className="mb4">Check out my Resume bellow:</h4>
			<a className="mr1" href={resume}>
				<Button variant="primary">
					<img alt="pdf icon" className="icons" src={pdf} /> Resume
				</Button>
			</a>
			<h4 className="mb4 mt4">You can Contact me at:</h4>
			<a className="mr1" href="https://github.com/Filipeba">
				<Button variant="primary">
					<img alt="github icon" className="icons" src={github} /> Github
				</Button>
			</a>
			<a className="ml1" href="https://www.linkedin.com/in/filipebaict">
				<Button variant="primary">
					<img alt="linkedin icon" className="icons" src={linkedin} /> Linkedin
				</Button>
			</a>
		</Jumbotron>
	);
}
