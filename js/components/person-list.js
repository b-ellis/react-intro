var React = require('react');
var ReactDOM = require('react-dom');

var Person = require('./person');

var PersonList = function() {
    return (
        <div className="person-list">
            <Person name = "Derek Zoolander"
            		imageUrl = "https://pbs.twimg.com/profile_images/616002132/dz.jpg"
            		job = "Male Model" />
            <Person name="Donald Knuth"
                    imageUrl="http://www-cs-faculty.stanford.edu/~uno/don.gif"
                    job="Clever chap" />
        </div>
    );
};

module.exports = PersonList;