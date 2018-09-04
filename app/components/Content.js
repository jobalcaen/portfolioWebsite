import React from 'react';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Skills from '../pages/Skills';
import NotFound from '../pages/NotFound';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';


const Content = (routeProps) => {
	const englishView = routeProps.englishView;
	return (

		<div id="main" className="main-content">
				<Switch>
					<Route exact path='/' render={(routeProps) => (
						<Home {...routeProps} englishView={englishView}/>
					)} />
					<Route path='/home' render={(routeProps) => (
						<Home {...routeProps} englishView={englishView}/>
					)} />
					<Route path='/contact' render={(routeProps) => (
						<Contact {...routeProps} englishView={englishView}/>
					)} />
					<Route path='/skills' render={(routeProps) => (
						<Skills {...routeProps} englishView={englishView}/>
					)} />
					<Route exact render={(routeProps) => (
						<NotFound {...routeProps} englishView={englishView}/>
					)} />
				</Switch>
		</div>
	)
	
}

export default withRouter(Content);
