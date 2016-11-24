var React = require('react');
var ReactDOM = require('react-dom');

var Person = function() {
    var name = 'Derek Zoolander';
    var imageUrl = 'https://pbs.twimg.com/profile_images/616002132/dz.jpg';
    var job = 'Male model';
    return (
        <div className="person">
            <div className="person-name">{name}</div>
            <img className="person-img" src={imageUrl} />
            <div className="person-job">
                {job}
            </div>
        </div>
    );
};

module.exports = Person;