import React from 'react';

const Home = (props) => {
	return (

		<div className='section-container'>
			<h1 className='greeting'>{props.englishView ? 'Hello, I\'m Joël' : 'Bonjour'}</h1>
			<h2>
				I am a Web developer specialising in front-end development.
			</h2>

			<p className="text">
				At a young age I was always tinkering around with computers and this interest gradually turned into a career in information technology.
			</p>
			<p className="text">
				After many years of working as a Linux System Administor I felt I needed a career change. I accepted a job as a project manager but quickly became friends with the web developers at the new company and saw the amazing things they were doing.
			</p>
			<p className="text">
				My first entry in web development was to automate functional testing using a Selenium and Gitlab Deployment. The rest is history.
			</p>
		</div>
	)
}

export default Home;

