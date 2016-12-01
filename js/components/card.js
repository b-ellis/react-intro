require('babel-polyfill');
import React from 'react';
import ReactDOM from 'react-dom';

class Card extends React.Component {
	render(){
		return(
			<div className="card">
				<h3> {this.props.text}</h3>
			</div>
		)
	}
}

module.exports = Card;