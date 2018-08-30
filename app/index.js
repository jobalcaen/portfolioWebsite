import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import { Router, Route, IndexRoute, hashHistory} from 'react-router';
import './style.css';

const appRoot = document.getElementById('root');

ReactDOM.render(<Main />, appRoot);

