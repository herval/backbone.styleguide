#Backbone.styleguide
Backbone.Styleguide helps you building a [live styleguide](http://www.slideshare.net/meeker/simplifying-massive-changes-with-a-live-style-guide) of your backbone app.

The way this extension works is by rendering each individual view of your app individually, highlighting which css classes are used on it, allowing you to identify pieces of CSS that depend on extraneous components (a design anti-pattern, specially in a component-based framework such as Backbonejs)

###Setting up the styleguide
Your styleguide class must extend backbone.styleguide. The example below covers the three fundamental concepts behind a styleguide:

    MyStyleguide = Backbone.Styleguide.extend({
      fixtures: {
          "user": new User({ id: 1, name: "john" }),
          "product": new Product({ id: 1, name: "Coke" })
      }
      calls: {
        "/users/2": { id: 2, name: "Someone else" }
      }
      vews: {
          { "Log in box": new Login({ model: fixtures['user'] },
          { "Product thumbnail": new Thumbnail({ model: fixtures['product'] }
      }
    });

The **fixtures** property allows you to build a set of models and collections that can be used to build your views. It must return a collection of fixtures identified by name. To access one in a view, you can simply call it by name - e.g.: **fixtures['user']**

The **calls** property allows you to control the data you want to display in views whose models/collections make server requests. In this case, you mock the json result of http calls by url. You can only mock **GET** requests.

In both cases, the styleguide will warn when a fixture or callback is not being used by the views. Conversely, it will let you know of calls and models being used inside your rendere views and NOT mocked.

Finally, the **views** property allows you to wire your views with any fixtures, as well as give them meaningful names. This is the list of views that will be used to build the styleguide. 

###Accessing the styleguide
The Backbone.Styleguide itself is nothing but a Backbone view: in order to view it, just create an instance and render on a route:

By default, the Backbone.Styleguide view will replace the content of your page's body tag.

    var Workspace = Backbone.Router.extend({
        routes: {
            "styleguide: "styleguide"
        }

        styleguide: function() {
            new MyStyleguide().render();
        }
    });
You can of course override that, by supplying a different 'el' on the constructor.
