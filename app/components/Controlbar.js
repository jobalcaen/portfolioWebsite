import React from 'react';

export default class Controlbar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			navBarsClicked: false
		}
		this.clickNavBar = this.clickNavBar.bind(this);
	}

	clickNavBar() {
		let newState = {...this.state, navBarsClicked: !this.state.navBarsClicked};
		this.setState({...newState});
	}

	render() {
		console.log('control props: ', this.props);
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
			<div className="controlbar">
				<div className='headshot' >
		    		<img src='./app/images/headshot.jpg' />
		    		<div>
			    		<h1 className="controlbar-name">Joel Balcaen</h1>
			    		<h2 className="controlbar-header">Front-End Web Developer</h2>
			    	</div>
		    	</div>
				
				<div className="nav-container">
					{this.props.mobileView? <i onClick={() => this.clickNavBar() }className="fas fa-bars fa-3x" /> : buttons}
				</div>

				<div className='mobile-menu-area'>
					
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

				<div className="language-control">
				   	<span className='language-toggle' onClick={() => this.props.toggleLanguage()}>
						{this.props.englishView? 'français' : 'english'} 
					</span>
				</div>

		    </div>
		)
	}
}
