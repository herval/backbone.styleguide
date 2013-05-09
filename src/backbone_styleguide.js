Backbone.Styleguide = Backbone.View.extend({
  className: "backbone-styleguide-container",

  render: function() {
     this.$el.append("<h1>Style Guide</h1>");
    _.each(_.pairs(this.views()), function(descriptionAndView) {
      this._appendView(descriptionAndView[0], descriptionAndView[1]);
    }, this);

    if(this.afterRender) {
      this.afterRender();
    }

    return this;
  },

 fixture: function(name) {
    return this.fixtures()[name];
  },

  _appendView: function(description, view) {
    var box = $("<div class='backbone-styleguide-item'></div>");
    box.append($("<h2 class='backbone-styleguide-h2'>").html(description));

    var item_box = $("<div class='backbone-styleguide-rendered-container'></div>");

    this._renderView(item_box, view);

    box.append(item_box);

    this.$el.append(box);
  },

  _renderView: function(container, view) {
    var box = $("<div class='backbone-styleguide-rendered'></div>");
    if(view instanceof Backbone.View) {
      container.append(box.append(view.render().$el));
    } else if (view instanceof Array) {
      _.each(view, function(item) {
        this._renderView(container, item);
      }, this);
    } else {
      container.append(box.append(view));
    }
  }
});
