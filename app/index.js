import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import { NavLink, BrowserRouter } from 'react-router-dom';
import './style.css';

const appRoot = document.getElementById('root');

ReactDOM.render(
	<BrowserRouter>
		<Main />
	</BrowserRouter>,
	appRoot
);

