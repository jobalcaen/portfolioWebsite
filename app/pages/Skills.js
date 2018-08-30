import React from 'react';
import js_logo from '../images/javascript.svg';
import react_logo from '../images/react.svg';
import redux_logo from '../images/redux.svg';
import node_logo from '../images/nodejs.svg';
import git_logo from '../images/git.svg';
import ubuntu_logo from '../images/ubuntu.svg';


const Skills = () => {

	return (
		<div className='section-container'>
			<header className='page-header'>Resume</header>

			<h1>Work Experience</h1>
			<section className='workplace'>
				<div className='workplace-header'>
					<h2 className='workplace-name'>Voltage Technology</h2>
					<span className='date-range'>...:: Nov 2016 – Jun 2017</span>
				</div>
				<h3>Frontend-Web Developer</h3>
				<ul>
					<li>Front-End web development using React JS</li>
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
					<object type="image/svg+xml" data={js_logo} className="logo">
					</object>Javascript ES6
				</span>

				<span>
					<object type="image/svg+xml" data={react_logo} className="logo">
					</object>
					React
				</span>

				<span>
					<object type="image/svg+xml" data={redux_logo} className="logo">
					</object>
					Redux
				</span>

				<span>
					<object type="image/svg+xml" data={git_logo} className="logo">
					</object>
					Git
				</span>

				<span>
					<object type="image/svg+xml" data={ubuntu_logo} className="logo">
					</object>
					Ubuntu
				</span>

			</section>

	

		</div>
	)
}

export default Skills;

