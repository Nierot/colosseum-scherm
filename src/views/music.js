
const MusicView = Backbone.View.extend({
  el: '#container',
  initialize: function () {
    this.render()
  },
  render: function () {
    this.$el.html('Music')
    return this
  }
})