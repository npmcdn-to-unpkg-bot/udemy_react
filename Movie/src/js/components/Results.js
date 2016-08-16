var React = require('react'); 
var AppActions = require('../actions/AppActions'); 
var AppStore = require('../stores/AppStore');   
var Movie = require('./Movie.js');   

var Results = React.createClass({
	render: function(){
		return (
			<div> 
				<h3 className="text-center">
					Results 
				</h3>
					{
						this.props.movies.map(function(movies, i){
							return (
								<Movie movie={movies} key={i} />
							)
						})
					}
			</div> 
		)
	}

});

module.exports = Results; 