ProductThumbnail = Backbone.View.extend({
  className: 'thumbnail',

  render: function() {
    this.$el.html($("<img>").attr("src", this.model.get("image")));

    return this;
  }

});
