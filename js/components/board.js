import React from 'react';
import ReactDOM from 'react-dom';

import List from './list'

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
				<List listTitle="List 1" onAddSubmit={this.onAddSubmit.bind(this)} onAddInputChange={this.onAddInputChange.bind(this)}/>
			</div>
		);
	}
}

module.exports = Board;