Styleguide = Backbone.Styleguide.extend({
  fixtures: function() {
    var products = new Products();
    var product1 = new Product({ id: 1, name: "Pet Shirt", image: "http://fashionablygeek.com/wp-content/uploads/2012/11/Ghostbuster-Dogs-600x467.jpg?cb5e28" })
    var product2 = new Product({ id: 1, name: "Coke", image: "http://fashionablygeek.com/wp-content/uploads/2012/11/Ghostbuster-Dogs-600x467.jpg?cb5e28" })
    products.models = [product1, product2];

    return {
      "user": new User({ id: 1, name: "john", photo: "http://25.media.tumblr.com/avatar_e090d83c1d3c_128.png" }),
      "product": product1,
      "products": products 
    };
  },

  views: function() {
    return {
      "Log in box": new Login(),
      "Product thumbnail": new ProductThumbnail({ model: this.fixture('product') }),
      "Thumbnail gallery": new ThumbnailGallery({ collection: this.fixture('products') })
    };
  }
});
