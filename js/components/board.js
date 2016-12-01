require('babel-polyfill');
import React from 'react';
import ReactDOM from 'react-dom';

import listContainer from './ListContainer';

class Board extends React.Component {
	constructor(){
		super();
		this.x = 10;
	}
	onAddSubmit(event){
		event.preventDefault();
		console.log("on add submit " + this.x);
	}
	onAddInputChange(){
		console.log("on add input change " + this.x);
	}
	render() {
		return(
			<div className = "board">
				<h1> {this.props.title} </h1>
				<listContainer />
			</div>
		);
	}
}

module.exports = Board;