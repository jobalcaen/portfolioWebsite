import React from 'react';
import headshot from '../images/headshot.jpg';


const Headshot = (props) => {
	return (
		<div className='headshot' >
    		<img src={headshot} />
    		<div className='site-title'>
    			<h1 className="controlbar-name">Joël Balcaen</h1>
    			<h2 className="controlbar-header">Front-End Web Developer</h2>

	    	</div>
    	</div>
	)
}

export default Headshot;