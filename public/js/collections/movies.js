define([
  'underscore',
  'backbone',
  'models/movies'
], function(_, Backbone, MovieModel){
  	var Movies = Backbone.Collection.extend({
  		model: MovieModel
  	});
  	return Movies;
});