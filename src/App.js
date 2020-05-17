import React from 'react';
import Navigation from './components/navigation/Navigation';
import Maincard from './components/body/Maincard';
import Maintext from './components/body/Maintext';
import Copyright from './components/copyright/Copyright';
import PortfolioPage from './components/body/PortfolioPage';
import ResumePage from './components/body/ResumePage';
import './App.css';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			route: 'home'
		};
	}

	onRouteChange = (route) => {
		if (route === 'home') {
			this.setState({
				route: 'home'
			});
		} else if (route === 'portfolio') {
			this.setState({
				route: 'portfolio'
			});
		} else {
			this.setState({
				route: 'resume'
			});
		}
	};

	render() {
		return (
			<div className="App">
				<Navigation onRouteChange={this.onRouteChange} />
				{this.state.route === 'home' ? (
					<React.Fragment>
						<Maintext />
						<Maincard />
						<Copyright />
					</React.Fragment>
				) : this.state.route === 'portfolio' ? (
					<React.Fragment>
						<PortfolioPage />
						<Copyright />
					</React.Fragment>
				) : (
					<ResumePage />
				)}
			</div>
		);
	}
}

export default App;
