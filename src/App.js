import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import LandingPage from './views/Landing';
import Dashboard from './views/Dashboard';
import Expenses from './views/Expenses';

import './App.css';
import withRoot from './withRoot';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<Route exact path="/" component={LandingPage} />
					<Route path="/dashboard" component={Dashboard} />
					<Route path="/expenses" component={Expenses} />
					{/* <Route path="/login" component={LoginPage} />
						<Route path="/register" component={RegisterPage} />
						<Route path="/faq" component={Faq} />
						<Route path="/terms" component={Terms} />
						<Route path="/privacy" component={Privacy} />
						<Route path="/profile" component={requireAuth(ProfilePage)} />
						<Route path="/browse" component={requireAuth(Grid)} /> */}
				</div>
			</Router>
		);
	}
}

export default withRoot(App);
