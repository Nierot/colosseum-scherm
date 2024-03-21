function onload() {
  // Use backbone router
  Backbone.history.start({
    // pushState: true,
    root: window.location.pathname
  })
  //https://stackoverflow.com/questions/21412714/backbone-routing-with-static-html-files
}