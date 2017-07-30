
define(['lodash'], function(_) {
  var pizzas = {
    'Margarita': [], // Only contains the two common denominators that all pizzas share (cheese & tomato sauce).

    'Vesuvio': [
      'skinka'
    ],

    'Alfunghi': [
      'champinjoner'
    ],

    'Capriccosa': [
      'skinka',
      'champinjoner'
    ],

    'Hawaii': [
      'skinka',
      'ananas'
    ],

    'Venezia': [
      'skinka',
      'räkor'
    ],

    'Tutti Frutti': [
      'banan',
      'ananas'
    ],

    'Tonno': [
      'tonfisk'
    ],

    'Paesana': [
      'lök',
      'bacon'
    ],

    'Galzone': [
      'skinka'
    ],

    'Cacciatora': [
      'salami'
    ],

    'Bologana': [
      'köttfärssås'
    ],

    'Long John': [
      'skinka',
      'räkor',
      'tonfisk'
    ],

    'Vegetaria': [
      'paprika',
      'lök',
      'oliver',
      'champinjoner',
      'kronätrskocka'
    ],

    'Mozzarella': [
      'mozzarella'
    ],

    'Honolulu': [
      'skinka',
      'banan',
      'ananas',
      'curry'
    ],

    'Ciciliana': [
      'tonfisk',
      'räkor'
    ],

    'Paradiso': [
      'champinjoner',
      'räkor'
    ]
  };

  return {

    /*
    TODO: 
    Sort toppings and pizza names alphabetically.

    Search should highlight the selected pizza instead of removing the others
     */

    getPizzas: function() {
      return _.chain(pizzas)
        .toPairs()
        .value();
    },

    getToppings: function() {
      return _.chain(pizzas)
        .values()
        .flattenDeep()
        .uniq()
        .value();
    },

    findByToppings: function(toppings) {
      return _.chain(pizzas)
        .toPairs()
        .map(function(item) { return [ item[0], item[1], _.intersection(item[1], toppings) ] })
        .filter(function(item) { return item[2].length === toppings.length })
        .value();
    },

    findByName: function(name) {
      return _.chain(pizzas)
        .toPairs()
        .filter(function(item) { return item[0] === name })
        .value();
    }
  }
});
