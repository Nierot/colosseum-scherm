const NavView = Backbone.View.extend({
  el: '#navbar',
  events: {
    'click a': 'onClick'
  },

  initialize: function () {
    const route = window.location.hash

    if (route) {
      // Set the active class on the correct nav item
      this.setRoute(route.replace('#', '/'))
    }
  },

  setRoute(route) {
    // Remove the active class from all nav items
    this.$('a').removeClass('active')
    // Set the active class on the correct nav item
    this.$('a[href="' + route + '"]').addClass('active')

    // If the user clicked on the logo, set the active class on the home nav item
    if (route === '/') {
      this.$('a[href="/"]').addClass('active')
    }
  },

  onClick: function (e) {
    e.preventDefault()
    const path = e.target.pathname

    if (path === '/toggle') {
      $('html').toggleClass('safemode')
      return
    }

    this.setRoute(path)
    router.navigate(path, { trigger: true })
  }
})