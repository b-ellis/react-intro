require('babel-polyfill');
var React = require('react');
var ReactDOM = require('react-dom');

// --- Example --- //

// var personList = require('./components/person-list');

// document.addEventListener('DOMContentLoaded', function() {
//     ReactDOM.render(<personList />, document.getElementById('app'));
// });

// --- Practice --- //

var Board = require('./components/board');

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(<Board />, document.getElementById('app'));
});

