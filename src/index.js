var app = app || {}
app.Views = {}


const Router = Backbone.Router.extend({
  routes: {
    '': 'home',
    'music': 'music',
    'images': 'images',
    'tally': 'tally',
    'settings': 'settings',
    'about': 'about',
    '*404': 'notFound'
  },

  execute: function (callback, args, name) {
    // Close the current view
    if (app.Views.current) {
      // app.Views.current.close()
    }

    Backbone.Router.prototype.execute.call(this, callback, args, name)
  },

  home: function () {
    app.Views.Home = new HomeView({
      collection: app.Collections.Home,
    })
    app.Views.current = app.Views.Home
  },

  music: function () {
    app.Views.Music = new MusicView({
      collection: app.Collections.Playlists,
    })

    app.Views.current = app.Views.Music
  },

  images: function () {
    app.Views.Images = new NotFoundView()
  },

  tally: function () {
    app.Views.Tally = new NotFoundView()
  },

  settings: function () {
    app.Views.Settings = new NotFoundView()
  },

  about: function () {
    app.Views.About = new AboutView()
  },

  notFound: function () {
    app.Views.NotFound = new NotFoundView()
  }
})

// https://stackoverflow.com/questions/10987738/backbone-events-firing-twice
// https://lostechies.com/derickbailey/2011/09/15/zombies-run-managing-page-transitions-in-backbone-apps/

// Load navbar
const navView = new NavView()

// Finally, create a new instance of the router
const router = new Router({})
Backbone.history.start({
  // pushState: true,
  root: window.location.pathname
})

Backbone.View.prototype.close = function () {
  this.remove();
  this.unbind();
  if (this.onClose) {
    this.onClose();
  }
}