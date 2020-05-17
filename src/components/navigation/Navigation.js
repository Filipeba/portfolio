import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const Navigation = ({ onRouteChange }) => {
	return (
		<Navbar collapseOnSelect expand="lg" style={{ backgroundColor: '#90CDF9' }}>
			<Navbar.Brand className="pointer" onClick={() => onRouteChange('home')}>
				<h5>Filipeba</h5>
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav>
					<Nav.Link eventKey={1} onClick={() => onRouteChange('portfolio')}>
						<h6>
							<strong>Portfolio</strong>
						</h6>
					</Nav.Link>
					<Nav.Link eventKey={2} onClick={() => onRouteChange('resume')}>
						<h6>
							<strong>Resume</strong>
						</h6>
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Navigation;
