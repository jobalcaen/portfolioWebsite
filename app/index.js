var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/App');
var Sidebar = require('./components/Sidebar');
var Main = require('./components/Main');

// import {Sidebar, Main} from './components/';

ReactDOM.render(<Sidebar />, document.getElementById('sidebar'));
ReactDOM.render(<Main />, document.getElementById('main'));

