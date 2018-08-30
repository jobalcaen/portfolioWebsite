import React from 'react';
import SocialButtons from './SocialButtons';


const NavButtons = (props) => {
	const buttons = props.pages.map((button) => {
		let modifiedButton = button;
		return (
			<span
				className='nav-button'
				id={button}
				key={button}
				onClick={() => {props.changePage(button);props.toggleNav()}}
			>
				{button === props.selectedPage ? '> '+button+' <' : button}		
	    	</span>
	    )
	});

	return (

		<div className={ props.navBarsClicked ? 'nav-container show' : 'nav-container'}>
			{
				props.mobileView && <span className='nav-close-button' onClick={() => props.toggleNav() }>
					<i className="fas fa-times"></i>
				</span>	
			}
			<div className='nav-buttons'>
				{buttons}
				{ props.mobileView && <SocialButtons /> }
			</div>

			

		</div>
	)
}

export default NavButtons;