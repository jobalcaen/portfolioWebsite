import React from 'react';


const NavButtons = (props) => {
	const buttons = props.pages.map((button) => {
		let modifiedButton = button;
		return (
			<span
				className='nav-button'
				id={button}
				key={button}
				onClick={() => {props.changePage(button);props.toggleNav()}}
				onMouseEnter={() => props.setHoveredButton(button)}
				onMouseLeave={() => props.setHoveredButton(null)}
			>
				{button === props.selectedPage ? '> '+button+' <' : button}		
	    	</span>
	    )
	});

	return (

		<div className={ props.navBarsClicked ? 'nav-container show' : 'nav-container'}>
			<div className='nav-buttons'>
				{buttons}
			</div>

			{
				props.mobileView && <span className='nav-close-button' onClick={() => props.toggleNav() }>
					<i class="fas fa-times"></i>
				</span>	
			}
		</div>
	)
}

export default NavButtons;