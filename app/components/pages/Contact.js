import React from 'react';

const Contact = () => {
		return (
			<div className='section-container'>
			<header className='page-header'>Contact</header>

			<dl className="contact-list">
				<dt>E-mail</dt>
				<dd><i className="fa fa-envelope" aria-hidden="true"></i>&nbsp;jobalcaen@gmail.com</dd>

				<dt>Address</dt>
				<dd><i className="fa fa-map-marker" aria-hidden="true"></i>&nbsp;Montreal, Canada</dd>

				<dt>Telephone</dt>
				<dd><i className="fa fa-phone" aria-hidden="true"></i>&nbsp;1-204-698-3689</dd>

				<dt>Github</dt>
				<dd>
					<a href="https://github.com/jobalcaen">
						<i className="fa fa-github" aria-hidden="true"></i>&nbsp;jobalcaen
					</a>
				</dd>

				<dt>Linkedin</dt>
				<dd>
					<a href="https://www.linkedin.com/in/joel-balcaen">
						<i className="fa fa-linkedin" aria-hidden="true"></i>&nbsp;joel-balcaen
					</a>
				</dd>

				<dt>Facebook</dt>
				<dd>
					<a href="https://www.facebook.com/jobalcaen">
						<i className="fa fa-facebook-official" aria-hidden="true"></i>&nbsp;jobalcaen
					</a>
				</dd>


			</dl>
		</div>
		)
}

export default Contact;


