// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'views/movies/list',
], function($, _, Backbone, MovieList){
  var Router = Backbone.Router.extend({
    routes: {
      	'': 'home',
      }
  });
  var initialize = function(){
  	/* initialize views*/
  	var movieList = new MovieList();
    var router = new Router();
    router.on('route:home', function () {
      movieList.render();
    });
    Backbone.history.start();
  };
  return {
    initialize: initialize
  };
});

