import React from 'react';
import Content from './Content';
import Sidebar from './Sidebar';

export default class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedPage: 'home',
			pages: ['home','skills','contact'],
			hoveredButton: null,
			englishView: true
		};
		this.changePage = this.changePage.bind(this);
		this.setHoveredButton = this.setHoveredButton.bind(this);
		this.toggleLanguage = this.toggleLanguage.bind(this);
	}

	changePage(page) {
		console.log("change page: ",  this.state);
		let newState = {...this.state, selectedPage: page};
		this.setState({...newState});
	};

	setHoveredButton(button) {
		let newState = {...this.state, hoveredButton: button};
		this.setState({...newState});
	}

	toggleLanguage() {
		console.log("englishView: ", this.state);

		let newState = {...this.state, englishView: !this.state.englishView};
		console.log("togglelanguage newState: ", newState);

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
					englishView={this.state.englishView}
				/>

				<Content
					selectedPage={this.state.selectedPage}
					englishView={this.state.englishView}

				/>
			</div>
		)
	}	
}