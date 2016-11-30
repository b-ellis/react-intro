import React from 'react';
import ReactDOM from 'react-dom';


import Card from './card';

class List extends React.Component {
	// constructor() {
	// 	super();
	// 	this.submitted = this.submitted.bind(this);
	// }
	submitted(event) {
		event.preventDefault();
		console.log(this.cardInput.value);
	}

	render() {
		return(
			<div className = "list">
				<h2> {this.props.listTitle} </h2>
				<form className="cardInput" onSubmit={(e) => this.submitted(e)}>
					<input type="text" ref={(input) => {this.cardInput = input}} onChange={this.props.onAddInputChange} ></input>
					<input type="submit"></input>
				</form>
				<Card text="Card 1"/>
				<Card text="Card 2"/>
				<Card text="Card 3"/>
			</div>
		)
	}
}

module.exports = List;