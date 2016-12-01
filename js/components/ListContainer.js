require('babel-polyfill');
import React from 'react';
import ReactDOM from 'react-dom';

import List from './list';

class ListContainer extends React.Component {
	constructor(){
		super();
		this.text = ''
		this.cards = []
	}

	onAddInputChanged(input) {
		this.text = input;
		console.log(this.text);
	} 

	onAddSubmit() {

	}

	render(){
		return(
			<List listTitle="List 1" card={this.cards} onAddInputChanged={this.onAddInputChanged.bind(this)} />
		)
	}
} 

module.exports = ListContainer;