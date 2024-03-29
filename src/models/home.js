// https://github.com/tastejs/todomvc/blob/master/examples/backbone/src/models/todo.js

var app = app || {}
app.Models = app.Models || {}

app.Models.Home = Backbone.Model.extend({
  idAttribute: 'ID',
  defaults: {
    ID: '',
  }
})