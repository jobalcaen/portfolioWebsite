import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

export default class Content extends React.Component {
	componentToReturn(page) {
		switch (page) {
			case "home":
				return <Home />
			case "about":
				return <About />
			case "contact":
				return <Contact />
			default:
				return <Home />
		}
	} 

	render() {
		return (
			<div>
				{this.componentToReturn(this.props.selectedPage)}
			</div>
		)
	}
}


