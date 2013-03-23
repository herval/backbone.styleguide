var Workspace = Backbone.Router.extend({

  routes: {
    '': 'index',
    'styleguide': 'styleguide'
  },

  index: function() {
    var login = new Login().render();
    $("body").html(login.$el);
  },

  styleguide: function() {
    var styleguide = new Styleguide().render();
    $("body").html(styleguide.$el);
  }

});
