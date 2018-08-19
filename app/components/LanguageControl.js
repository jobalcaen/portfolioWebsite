import React from 'react';


const LanguageControl = (props) => {
	return (
		<span className='language-control' onClick={() => props.toggleLanguage()}>
			{props.englishView? 'FRANÇAIS' : 'ENGLISH'} 
		</span>
	)
}

export default LanguageControl;