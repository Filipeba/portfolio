import React from 'react';
import web from './icons/web.svg';
import github from './icons/github.svg';
import linkedin from './icons/linkedin.svg';
import location from './icons/location.svg';
import mail from './icons/mail.svg';
import './resume.css';
import './styles.css';

const ResumePage = () => {
	return (
		<main className="container-wrapper">
			<section className="personalInformation">
				<h1>Filipe Bergami Alves</h1>
				<h3>PERSONAL INFORMATION</h3>
				<ul className="listing ma0 pa0">
					<li className="ma0">
						<img className="icons" alt="linkedin icon" src={location} />
						<a href="https://www.google.co.uk/maps/place/Bristol/@51.4489577,-2.5881948,13.86z/data=!4m13!1m7!3m6!1s0x4871836681b3d861:0x8ee4b22e4b9ad71f!2sBristol!3b1!8m2!3d51.454513!4d-2.58791!3m4!1s0x4871836681b3d861:0x8ee4b22e4b9ad71f!8m2!3d51.454513!4d-2.58791">
							{' '}
							Bristol, United Kingdom
						</a>
					</li>
					<li className="ma0">
						<img className="icons" alt="github icon" src={web} />
						<a href="https://filipeba.net"> https://filipeba.net</a>
					</li>
					<li className="ma0">
						<img className="icons" alt="mail icon" src={mail} />
						<a href="mailto:Filipeba.ict@gmail.com"> Filipeba.ict@gmail.com</a>
					</li>
					<li className="ma0">
						<img className="icons" alt="github icon" src={github} />
						<a href="https://github.com/Filipeba"> https://github.com/Filipeba</a>
					</li>
					<li className="ma0">
						<img className="icons" alt="linkedin icon" src={linkedin} />
						<a href="https://www.linkedin.com/in/filipebaict"> https://linkedin.com/in/filipebaict</a>
					</li>
				</ul>
			</section>
			<section className="personalStatement mt1">
				<br />
				<h3>PERSONAL STATEMENT</h3>
				<p>
					Proficient in{' '}
					<strong>
						<strong>HTML, CSS, JavaScript </strong>
					</strong>{' '}
					and{' '}
					<strong>
						<strong>React</strong>
					</strong>{' '}
					on the Front End. <br />
					As well as{' '}
					<strong>
						<strong>Node, Express, postgreSQL </strong>
					</strong>and{' '}
					<strong>
						<strong>MongoDB</strong>
					</strong>{' '}
					on the Back End. <br />
					Adept of{' '}
					<strong>
						<strong>Trello</strong>
					</strong>{' '}
					and{' '}
					<strong>
						<strong>Microsoft Project</strong>
					</strong>{' '}
					for Project Management.
				</p>
				<br />
				<h3>FEATURED PROJECTS</h3>
			</section>
			<section className="project1">
				<h4>
					<strong>Facial Recognition App</strong>
				</h4>
				<ul className="listing ma0 pa0">
					<p>Detects Multiple Faces within an Image</p>
					<li>
						<strong>Front End:</strong> React and Material UI
					</li>
					<li>
						<strong>Back End:</strong> Facial Recognition API
					</li>
					<li>
						<a href="https://github.com/Filipeba/facial-recognition-app-front-end">
							<strong>Repo</strong>
						</a>
					</li>
					<li>
						<a href="http://g.recordit.co/mWBCyWGah6.gif">
							<strong>Preview</strong>
						</a>
					</li>
				</ul>
			</section>
			<section className="project2">
				<h4>
					<strong>Facial Recognition API</strong>
				</h4>
				<ul className="listing ma0 pa0">
					<p>Detects Multiple Faces within an Image</p>
					<li>
						<strong>Back End:</strong> Facial Recognition App
					</li>
					<li>
						<strong>Back End:</strong> Node, Express, PostgreSQL and Clarifai API
					</li>
					<li>
						<a href="https://github.com/Filipeba/facial-recognition-api-back-end">
							<strong>Repo</strong>
						</a>
					</li>
					<li>
						<a href="http://g.recordit.co/mWBCyWGah6.gif">
							<strong>Preview</strong>
						</a>
					</li>
				</ul>
			</section>
			<section className="project3">
				<h4>
					<strong>Weather App</strong>
				</h4>
				<ul className="listing ma0 pa0">
					<p>A Weather Web App using vanilla JavaScript</p>
					<li>
						<strong>Front End:</strong> HTML, CSS, Bootstrap and JavaScript
					</li>
					<li>
						<strong>Back End:</strong> Dark Sky API
					</li>
					<li>
						<a href="https://github.com/Filipeba/weatherapp.github.io">
							<strong>Repo</strong>
						</a>
					</li>
					<li>
						<a href="https://filipeba.net/weatherapp.github.io/">
							<strong>View</strong>
						</a>
					</li>
				</ul>
			</section>
			<section className="projec4">
				<h4>
					<strong>Portfolio Website</strong>
				</h4>
				<ul className="listing ma0 pa0">
					<p>A Portfolio Website to Showcase Projects</p>
					<li>
						<strong>Front End:</strong> React and React-Bootstrap
					</li>
					<li>
						<strong>Back End:</strong> NA
					</li>
					<li>
						<a href="https://github.com/Filipeba/portfolio">
							<strong>Repo</strong>
						</a>
					</li>
					<li>
						<a href="https://filipeba.net">
							<strong>View</strong>
						</a>
					</li>
				</ul>
			</section>
			<section className="education">
				<br />
				<h3>EDUCATION</h3>
				<ul className="listing ma0 pa0">
					<li>
						Master's degree in <strong>Management and Cost Engineering</strong>. (2017-2018) - Brazilian
						Institute of Cost Engineering
					</li>
					<li>
						Bachelor's degree in <strong>Civil Engineering</strong>. (2012-2017) - Multivix
					</li>
				</ul>
			</section>
			<br />
		</main>
	);
};

export default ResumePage;
