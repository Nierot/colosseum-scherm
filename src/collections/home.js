// https://github.com/tastejs/todomvc/blob/master/examples/backbone/src/collections/todos.js

var app = app || {};
app.Collections = app.Collections || {};

(function () {
  const HomeCollection = Backbone.Collection.extend({
    model: app.Models.Home,
    url: 'home',
    parse: function (data) {
      console.log(data)

      return data.Data
    },
  })

  app.Collections.Home = new HomeCollection()


})()