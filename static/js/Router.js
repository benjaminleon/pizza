define([
	'backbone',
	'views/MenuView'
], function(Backbone, MenuView) {

  return Backbone.Router.extend({

    initialize: function () {
      this.menuView = new MenuView();
    },

    routes: {
      '': 'showMenuView'
    },

    showMenuView: function () {
      this.menuView.render();
    }

  });
});