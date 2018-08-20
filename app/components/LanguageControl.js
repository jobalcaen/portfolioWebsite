import React from 'react';


const LanguageControl = (props) => {
	return (
		<div className='language-control'>
			<span onClick={() => props.toggleLanguage()}>
				{props.englishView? 'FRANÇAIS' : 'ENGLISH'} 
			</span>
		</div>
	)
}

export default LanguageControl;