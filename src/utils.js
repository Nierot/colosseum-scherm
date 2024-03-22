function navigate(to) {
  Backbone.history.navigate(to, { trigger: true })

  // Get the navbar and set the active class
  const nav = document.getElementById('nav')
}