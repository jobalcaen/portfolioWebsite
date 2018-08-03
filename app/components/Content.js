import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Skills from './pages/Skills';


export default class Content extends React.Component {
	componentToReturn(page) {
		switch (page) {
			case "home":
				return <Home englishView={this.props.englishView}/>
			case "about":
				return <About englishView={this.props.englishView} />
			case "contact":
				return <Contact englishView={this.props.englishView} />
			case "skills":
				return <Skills englishView={this.props.englishView} />
			default:
				return <Home englishView={this.props.englishView} />
		}
	} 
	render() {
		return (

			<div id="main" className="main-content">

				{this.componentToReturn(this.props.selectedPage)}
			</div>
		)
	}
}


