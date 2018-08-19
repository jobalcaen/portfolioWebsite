import React from 'react';

export default class Skills extends React.Component {
	render() {
		return (
			<div className='section-container'>
				<header className='page-header'>Resume</header>

				<h1>Work Experience</h1>
				<section className='workplace'>
					<div className='workplace-header'>
						<h2 className='workplace-name'>Voltage Technology</h2>
						<span className='date-range'>...:: Nov 2016 – Jun 2017</span>
					</div>
					<h3>Frontend Web Developer</h3>
					<ul>
						<li>Front end web development using React JS</li>
						<li>Deploy continuous integration system using Gitlab Continuous Integration</li>
						<li>Automated functional testing using the Selenium Framework</li>
					</ul>
				</section>

				<section className='workplace'>
					<div className='workplace-header'>
						<h2 className='workplace-name'>Studios Framestore</h2>
						<span className='date-range'>...:: Dec 2014 – Nov 2016  </span>
					</div>
					<h3>Junior System Administrator</h3>
					<ul>
						<li>Maintain & monitor 4500 core render farm</li>
						<li>Diagnose Windows, OSX and Scientific Linux desktop failures</li>
						<li>Management of Solaris ZFS & HDS network attached storage (NAS)</li>
					</ul>
				</section>
				

				<h1>Skills</h1>
				
				<section className='skills'>
					<span>
						<object type="image/svg+xml" data="./app/images/javascript.svg" className="logo">
						</object>Javascript ES6
					</span>

					<span>
						<object type="image/svg+xml" data="./app/images/react.svg" className="logo">
						</object>
						React
					</span>

					<span>
						<object type="image/svg+xml" data="./app/images/redux.svg" className="logo">
						</object>
						Redux
					</span>

					<span>
						<object type="image/svg+xml" data="./app/images/nodejs.svg" className="logo">
						</object>
						Nodejs
					</span>

					<span>
						<object type="image/svg+xml" data="./app/images/git.svg" className="logo">
						</object>
						Git
					</span>

					<span>
						<object type="image/svg+xml" data="./app/images/ubuntu.svg" className="logo">
						</object>
						Ubuntu
					</span>

				</section>

		

			</div>
		)
	}
}


