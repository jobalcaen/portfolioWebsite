import React from 'react';
import Content from './Content';
import Sidebar from './Sidebar';

export default class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedPage: 'home',
			pages: ['home','about','skills','contact'],
			hoveredButton: null
		};
		this.changePage = this.changePage.bind(this);
		this.setHoveredButton = this.setHoveredButton.bind(this);
	}

	changePage(page) {
		console.log("change to ", page);
		let newState = {...this.state, selectedPage: page};
		console.log("newState: ", newState);
		this.setState({newState});
	};

	setHoveredButton(button) {
		console.log(button, "hovered");
		let newState = {...this.state, hoveredButton: button};
		this.setState({newState});
	}

	render() {
		return (
			<div>
				<div id="sidebar" className="side-bar">
					<Sidebar
						changePage={this.changePage}
						setHoveredButton={this.setHoveredButton}
						hoveredButton={this.state.hoveredButton}
						selectedPage={this.state.selectedPage}
						pages={this.state.pages}
					/>
				</div>

				<div id="main" className="main-content">
					<Content
						selectedPage={this.state.selectedPage}
					/>
				</div>
			</div>
		)
	}	
}