import React from 'react';
import Content from './Content';
import Controlbar from './Controlbar';
import NavButtons from './NavButtons';


export default class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedPage: 'home',
			pages: ['home','skills','contact'],
			englishView: true,
			mobileView: window.innerWidth <= 900
		};
		this.changePage = this.changePage.bind(this);
		this.toggleLanguage = this.toggleLanguage.bind(this);
		this.resize = this.resize.bind(this);
	}

	changePage(page) {
		let newState = {...this.state, selectedPage: page};
		this.setState({...newState});
	};

	toggleLanguage() {
		let newState = {...this.state, englishView: !this.state.englishView};
		this.setState({...newState});
	}

	resize() {
		let newState = {...this.state, mobileView: window.innerWidth <= 900};
    	this.setState({...newState});
	}

	componentDidMount() {
    	window.addEventListener("resize", this.resize);
	}

	componentWillUnmount() {
    	window.removeEventListener("resize", this.resize);
  	}

	render() {
		return (
			<div className="grid-container">
				<Controlbar
					changePage={this.changePage}
					selectedPage={this.state.selectedPage}
					toggleLanguage={this.toggleLanguage}
					pages={this.state.pages}
					englishView={this.state.englishView}
					mobileView={this.state.mobileView}
				/>

				<Content
					changePage={this.changePage}
					englishView={this.state.englishView}
				/>
			</div>
		)
	}	
}