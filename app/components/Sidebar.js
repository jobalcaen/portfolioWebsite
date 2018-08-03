import React from 'react';

export default class Sidebar extends React.Component {

	render() {
		console.log("sidebar props: ", this.props);
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
				<div className="nav-container">
		    		<span className='headshot' >
		    			<img src='./app/images/headshot.jpg' />
		    			Joel Balcaen<br/>
		    			Web Developer
		    		</span>

		    		{buttons}

			    	<span className='language-toggle' onClick={() => this.props.toggleLanguage()}>
				    		EN / FR
				    </span>
				</div>

		    </div>
		)
	}
}
