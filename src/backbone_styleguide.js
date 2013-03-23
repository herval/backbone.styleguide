Backbone.Styleguide = Backbone.View.extend({

  render: function() {
     this.$el.append("<h1>Style Guide</h1>");
    _.each(_.pairs(this.views()), function(descriptionAndView) {
      this._appendView(descriptionAndView[0], descriptionAndView[1]);
    }, this);

    return this;
  },

 fixture: function(name) {
    return this.fixtures()[name];
  },

  _appendView: function(description, view) {
    var box = $("<div class='item'></div>");
    box.append($("<h2>").html(description));
    box.append(view.render().$el);

    this.$el.append(box);
  }
});
