import React from 'react';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Skills from '../pages/Skills';
import NotFound from '../pages/NotFound';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


const Content = (props) => {
	return (

		<div id="main" className="main-content">

			<BrowserRouter>
				<Switch>
					<Route path='/' component={Home} exact />
					<Route path='/home' component={Home} exact />
					<Route path='/contact' component={Contact} />
					<Route path='/skills' component={Skills} />
					<Route component={NotFound} />
				</Switch>
			</BrowserRouter>
		</div>
	)
	
}

export default Content;
