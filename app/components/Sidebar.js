var React = require('react');

class Sidebar extends React.Component {
	render() {
		return (
			<div>
				<span>
	    			<img className="headshot" src="headshot.jpg" />
	    		</span>

	    		<div className="nav-container">
	    			<span className="nav-button" id="home">
		    			<img src="svg_icons/home.svg" />
		    		</span>
		    		
		    		<span className="nav-button" id="about">
		    			<img src="svg_icons/about.svg" />
		    		</span>

		    		<span className="nav-button" id="skills">
		    			<img src="svg_icons/skills.svg" />
		    		</span>

		    		<span className="nav-button" id="works">
		    			<img src="svg_icons/works.svg" />
		    		</span>

		    		<span className="nav-button" id="contact">
		    			<img src="svg_icons/contact.svg" />
		    		</span>
		    	</div>
		    </div>
		)
	}
}

module.exports = Sidebar;
