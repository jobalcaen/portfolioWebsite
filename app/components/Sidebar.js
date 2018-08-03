import React from 'react';

export default class Sidebar extends React.Component {

	render() {
		console.log('sidebar props: ', this.props);
		const buttons = this.props.pages.map((button) => {
			return (<span
				className='nav-button'
				id={button}
				key={button}
				onClick={() => this.props.changePage(button)}
				onMouseEnter={() => this.props.setHoveredButton(button)}
				onMouseLeave={() => this.props.setHoveredButton(null)}
			> {button}
				{/*(this.props.hoveredButton === button || this.props.selectedPage === button)? button : <img src={`./app/images/${button}.svg`} />*/}
			
		    </span>)
		});
		
		return (
			<div id="sidebar" className="side-bar">
				<div className='headshot' >
		    		<img src='./app/images/headshot.jpg' />
		    		<h1 className="sidebar-name">Joel Balcaen</h1>
		    		<h2 className="sidebar-header">Front-End Web Developer</h2>
		    	</div>
				
				<div className="nav-container">
		    		{buttons}

				</div>
				<div className='social-media-icons'>
					<a href="https://github.com/jobalcaen">
						<i className="fa fa-github" aria-hidden="true"></i>
					</a>
					<a href="https://www.linkedin.com/in/joel-balcaen-9418b263/">
						<i className="fa fa-linkedin" aria-hidden="true"></i>
					</a>
					<a href="https://www.facebook.com/jobalcaen">
						<i className="fa fa-facebook-official" aria-hidden="true"></i>
					</a>
				</div>
				<div className="sidebar-controls">
				   	<span className='language-toggle' onClick={() => this.props.toggleLanguage()}>
						{this.props.englishView? 'français' : 'english'} 
					</span>
				</div>

		    </div>
		)
	}
}
