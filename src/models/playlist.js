// https://github.com/tastejs/todomvc/blob/master/examples/backbone/src/models/todo.js

var app = app || {}

app.Playlist = Backbone.Model.extend({
  idAttribute: 'ID',
  defaults: {
    ID: '',
    Name: '',
    LastPlayed: new Date(0),
    CreatedAt: new Date(0),
    UpdatedAt: new Date(0)
  }
})