const NotFoundView = Backbone.View.extend({
  el: '#container',
  initialize: function () {
    this.render()
  },
  template: _.template('<div id="view--not-found">Helaas! Deze functionaliteit is nog niet geimplementeerd.</div>'),
  render: function () {
    this.$el.html(this.template())
    return this
  }
})