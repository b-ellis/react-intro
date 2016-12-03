require('babel-polyfill');
import React from 'react';
import ReactDOM from 'react-dom';

import ListContainer from './ListContainer';

class Board extends React.Component {
	constructor(){
		super();
	}
	render() {
		return(
			<div className = "board">
				<h1> {this.props.title} </h1>
				<ListContainer />
			</div>
		);
	}
}

module.exports = Board;