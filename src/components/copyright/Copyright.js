import React from 'react';
import { Navbar } from 'react-bootstrap';

export default function Maintext() {
	return (
		<Navbar collapseOnSelect expand="lg" style={{ backgroundColor: '#90CDF9' }}>
			<p className="center">
				Filipeba.ict@gmail.com <br />
				&copy; 2020 Filipe Bergami Alves. All rights reserved.
			</p>
		</Navbar>
	);
}
