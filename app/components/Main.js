import React from 'react';
import Content from './Content';
import Sidebar from './Sidebar';

export default class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedPage: 'home',
			pages: ['home','about','skills','contact'],
			hoveredButton: null,
			englishView: true
		};
		this.changePage = this.changePage.bind(this);
		this.setHoveredButton = this.setHoveredButton.bind(this);
	}

	changePage(page) {
		let newState = {...this.state, selectedPage: page};
		this.setState({...newState});
	};

	setHoveredButton(button) {
		let newState = {...this.state, hoveredButton: button};
		this.setState({...newState});
	}

	toggleLanguage() {
		console.log("togglelanguage newState: ", newState);
		console.log("englishView: ", this.state);

		let newState = {...this.state, englishView: !this.state.englishView};
		this.setState({...newState});
	}

	render() {
		return (
			<div className="grid-container">
				<Sidebar
					changePage={this.changePage}
					setHoveredButton={this.setHoveredButton}
					hoveredButton={this.state.hoveredButton}
					selectedPage={this.state.selectedPage}
					toggleLanguage={this.toggleLanguage}
					pages={this.state.pages}
				/>

				<Content
					selectedPage={this.state.selectedPage}
				/>
			</div>
		)
	}	
}