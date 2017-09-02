define([
	'jquery',
	'handlebars',
	'Router'
], function($, Handlebars, Router) {

	var App = function() {  };

	App.prototype.init = function() {

		/* Starting the application router. */
		var appRouter = new Router();
		Backbone.history.start();
	};

	return App;
});