import React from 'react';
import SocialButtons from './SocialButtons';
import LanguageControl from './LanguageControl';
import Headshot from './Headshot';
import NavButtons from './NavButtons';

export default class Controlbar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			navBarsClicked: false,
		}
		this.clickNavBar = this.clickNavBar.bind(this);
	}

	clickNavBar() {
		console.log('clicked');
		let newState = {...this.state, navBarsClicked: !this.state.navBarsClicked};
		this.setState({...newState});
	}

	render() {
		console.log('control props: ', this.props);

		return (
			<div className="controlbar">
		    	<Headshot 
		    		mobileView={this.props.mobileView}
		    	/>
				
					{
						this.props.mobileView && <div className='nav-expander'>
							<i onClick={() => this.clickNavBar() }className="fas fa-bars fa-2x" />
						</div>
					}

				<NavButtons 
					pages={this.props.pages}
					mobileView={this.props.mobileView}
		    		selectedPage={this.props.selectedPage}
		    		changePage={this.props.changePage}
		    		setHoveredButton={this.props.setHoveredButton}
		    		navBarsClicked={this.state.navBarsClicked}
				/>

				
				{ !this.props.mobileView && <SocialButtons /> }

				{ 
					!this.props.mobileView && <LanguageControl
						toggleLanguage={this.props.toggleLanguage}
						englishView={this.props.englishView}
					/>
				}

		    </div>
		)
	}
}
