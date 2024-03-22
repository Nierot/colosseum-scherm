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
    const view = new HomeView()
  },

  music: function () {
    console.log('music', app)

    const view = new MusicView({
      collection: app.Playlists,
    })
  },

  images: function () {
    const view = new NotFoundView()
  },

  tally: function () {
    const view = new NotFoundView()
  },

  settings: function () {
    const view = new NotFoundView()
  },

  about: function () {
    const view = new NotFoundView()
  },

  notFound: function () {
    const view = new NotFoundView()
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
