require('babel-polyfill');
import React from 'react';
import ReactDOM from 'react-dom';

import List from './list';

class ListContainer extends React.Component {
	constructor(){
		super();
		this.state = {
			//intial state
			text: '',
			cards: ["Card 1", "Card 2", "Card 3"],
		}
		this.onAddInputChanged = this.onAddInputChanged.bind(this);
		this.onAddSubmit = this.onAddSubmit.bind(this);
	}

	onAddInputChanged(event) {
		event.preventDefault();
		this.setState({
			text: event.target.value
		});
	} 

	onAddSubmit(event) {
		event.preventDefault();
		this.setState({
			cards: this.state.cards.concat([this.state.text])
		});
	}

	render(){
		return(
			<List listTitle="List 1" cards={this.state.cards} text={this.state.text} onAddInputChanged={this.onAddInputChanged.bind(this)} 
			onAddSubmit={this.onAddSubmit.bind(this)} />
		)
	}
} 

module.exports = ListContainer;