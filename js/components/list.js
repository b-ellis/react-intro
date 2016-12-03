require('babel-polyfill');
import React from 'react';
import ReactDOM from 'react-dom';


import Card from './card';

class List extends React.Component {
	// constructor() {
	// 	super();
	// 	this.submitted = this.submitted.bind(this);
	// }
	// submitted(event) {
	// 	event.preventDefault();
	// 	console.log(this.text.value);
	// }

	render() {
		let cardList = [];
		for(var i = 0; i < this.props.cards.length; i++) {
			cardList.push(<Card text={this.props.cards[i]} key={i} />);
		}
		return(
			<div className = "list">
				<h2> {this.props.listTitle} </h2>
				<form className="cardInput" onSubmit={(e) => this.props.onAddSubmit(e)}>
					<input type="text" onChange={this.props.onAddInputChanged}></input>
					<input type="submit"></input>
				</form>
				{cardList}
			</div>
		)
	}
}

module.exports = List;