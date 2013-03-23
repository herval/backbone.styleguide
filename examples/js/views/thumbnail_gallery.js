ThumbnailGallery = Backbone.View.extend({

  render: function() {
    _.each(this.collection.models, function(product) {
      this.$el.append(new ProductThumbnail({ model: product }).render().$el);
    }, this);

    return this;
  }

});
