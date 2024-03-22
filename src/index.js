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

  home: function () {
    app.Views.Home = new HomeView()
  },

  music: function () {
    app.Views.Music = new MusicView({
      collection: app.Playlists,
    })
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
    app.Views.About = new NotFoundView()
  },

  notFound: function () {
    app.Views.NotFound = new NotFoundView()
  }
})

// Load navbar
const navView = new NavView()
const homeView = new HomeView()

// Finally, create a new instance of the router
const router = new Router({})
Backbone.history.start({
  // pushState: true,
  root: window.location.pathname
})
