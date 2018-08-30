import React from 'react';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Skills from '../pages/Skills';


const Content = (props) => {
	const componentToReturn = (props) => {
		switch (props.selectedPage) {
			case "home":
				return <Home englishView={props.englishView}/>
			case "about":
				return <About englishView={props.englishView} />
			case "contact":
				return <Contact englishView={props.englishView} />
			case "skills":
				return <Skills englishView={props.englishView} />
			default:
				return <Home englishView={props.englishView} />
		}
	} 
	
	return (

		<div id="main" className="main-content">

			{componentToReturn(props)}
		</div>
	)
	
}

export default Content;
