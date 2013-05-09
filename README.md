#Backbone.styleguide
Backbone.Styleguide helps you building a [live styleguide](http://www.slideshare.net/meeker/simplifying-massive-changes-with-a-live-style-guide) of your backbone app.

The way this extension works is by rendering each individual view of your app individually, highlighting which css classes are used on it, allowing you to identify pieces of CSS that depend on extraneous components (a design anti-pattern, specially in a component-based framework such as Backbonejs)

###Setting up the styleguide
Your styleguide class must extend backbone.styleguide. The example below covers the three fundamental concepts behind a styleguide:

    MyStyleguide = Backbone.Styleguide.extend({
      fixtures: function() {
        return {
          "user": new User({ id: 1, name: "john" }),
          "product": new Product({ id: 1, name: "Coke" })
        };
      },

      views: function() {
        return {
           "Log in box": new Login({ model: this.fixture('user') }),
           "Thumbnails": [new ProductThumbnail({ model: this.fixture('product') }), new UserThumbnail({ model: this.fixture('user') })],
           "Buttons": [ $("<input type='submit'></input>"), $("<input type='button'></input>") ]
        };
      }
    });

The **fixtures** property allows you to build a set of models and collections that can be used to build your views. It must return a collection of fixtures identified by name.
To access one in a view, you can simply call it by name - e.g.: **this.fixture('user')**

The **views** property allows you to wire your views with any fixtures, as well as give them meaningful names. This is the list of views that will be used to build the styleguide. Notice you can render individual views (one after another), arrays of things and even plain jQuery objects!

###Accessing the styleguide
The Backbone.Styleguide itself is nothing but a Backbone view: in order to view it, just create an instance and render on a route:

By default, the Backbone.Styleguide view will replace the content of your page's body tag.

    var Workspace = Backbone.Router.extend({
        routes: {
            "styleguide: "styleguide"
        }

        styleguide: function() {
            $("body").html(new MyStyleguide().render().$el);
        }
    });

You can of course override that, by supplying a different 'el' on the constructor.
