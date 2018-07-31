import React from 'react';

export default class Sidebar extends React.Component {

	render() {
		console.log("content props",this.props);

		const buttons = this.props.pages.map((button) => {

			return (<span
				className='nav-button'
				id={button}
				key={button}
				onClick={() => this.props.changePage(button)}
				onMouseEnter={() => this.props.setHoveredButton(button)}
				onMouseLeave={() => this.props.setHoveredButton(null)}
			>
				{this.props.hoveredButton === button ? button : <img src={`./app/images/${button}.svg`} />}
		    </span>)
		});
			
		return (
			<div>
				<span>
	    			<img className='headshot' src='./app/images/headshot.jpg' />
	    		</span>

	    		<div className='nav-container'>
	    			{buttons}
		    	</div>
		    </div>
		)
	}
}
