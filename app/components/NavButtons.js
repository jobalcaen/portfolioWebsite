import React from 'react';


const NavButtons = (props) => {
	const buttons = props.pages.map((button) => {
		let modifiedButton = button;
		return (
			<span
				className='nav-button'
				id={button}
				key={button}
				onClick={() => props.changePage(button)}
				onMouseEnter={() => props.setHoveredButton(button)}
				onMouseLeave={() => props.setHoveredButton(null)}
			>
				{button === props.selectedPage ? '> '+button+' <' : button}		
	    	</span>
	    )
	});

	return (
		<div className={ props.navBarsClicked ? 'nav-container show' : 'nav-container'}>
			{buttons}
		</div>
	)
}

export default NavButtons;