var React = require('react');
var ReactDOM = require('react-dom');

var List = require('./list');

var Board = function() {
	return(
		<div className = "list">
			<List />
		</div>
	);
};

module.exports = Board;