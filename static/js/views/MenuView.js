define([
	'jquery',
	'lodash',
	'backbone',
	'handlebars',
	'text!templates/menu_view_template.html',
  'text!templates/pizza_row_template.html',
  'PizzaData'
], function($, _, Backbone, Handlebars, MenuViewTemplate, PizzaRowTemplate, PizzaData) {

  return Backbone.View.extend({

    el: '#app-container',

    events: {
      'change .topping-checkbox': 'onToppingPreferenceChanged'
    },

    initialize: function(options) {
      _.bindAll(this, [ 'onSearchNameChanged' ]);

      this.compiledPizzaRowTemplate = Handlebars.compile(PizzaRowTemplate);

      this.selectedToppings = [];
    },

    render: function (options) {
      var self = this;

      var compiledTemplate = Handlebars.compile(MenuViewTemplate);

      var toppings = PizzaData.getToppings();
      var pizzas = PizzaData.getPizzas();

      var templateHtml = compiledTemplate({
        pizzas: pizzas,
        toppings: toppings
      });

      this.$el.html(templateHtml);

      this.searchFlexDataList = this.$('.flexdatalist').flexdatalist({
        selectionRequired: 1,
        minLength: 1,
        searchContain: true,
        focusFirstResult: true
      });

      this.searchFlexDataList.bind('change:flexdatalist', function(e, data) { self.onSearchNameChanged(data.value); });

      this.renderPizzaList(pizzas);
    },

    onToppingPreferenceChanged: function(e) {
      var element = $(e.currentTarget);
      var toppingName = element.attr('data-topping');
      var isSelected = element.is(':checked');

      if (isSelected) {
        var newArray = this.selectedToppings.slice();
        newArray.push(toppingName);

        this.selectedToppings = newArray;
      } else {
        this.selectedToppings = _.remove(this.selectedToppings, function(item) { return item !== toppingName });
      }

      this.$el.find('#pizza-search-input-wrapper input[type="text"]').val('');

      var pizzas = this.selectedToppings.length > 0 ? PizzaData.findByToppings(this.selectedToppings) : PizzaData.getPizzas();

      this.renderPizzaList(pizzas);
    },

    onSearchNameChanged: function(name) {
      var pizzas = (name.trim() !== '') ? PizzaData.findByName(name) : PizzaData.getPizzas();

      this.$el.find('#pizza-toppings').find('input[type="checkbox"]').attr('checked', false);

      this.renderPizzaList(pizzas);
    },

    renderPizzaList: function(pizzas) {
      var templateHtml = this.compiledPizzaRowTemplate(pizzas);

      var pizzasEl = this.$el.find('#pizzas');

      pizzasEl.html(templateHtml);
    }
  });
});