Login = Backbone.View.extend({
  className: 'login-box',

  render: function() {
    this.$el.append($("<input type='text' name='username' placeholder='username'></input>"));
    this.$el.append($("<input type='password' name='password' placeholder='password'></input>"));
    return this;
  }
});

