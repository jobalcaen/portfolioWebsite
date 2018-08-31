import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import { NavLink, BrowserRouter } from 'react-router-dom';
import './style.css';

const appRoot = document.getElementById('root');

ReactDOM.render(
	<BrowserRouter  basename={process.env.PUBLIC_URL}>
		<Main />
	</BrowserRouter>,
	appRoot
);

