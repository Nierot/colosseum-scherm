const HomeView = Backbone.View.extend({
  el: '#container',
  initialize: function () {
    this.render()
  },

  template: _.template(`
    <div id="view--home">

      <h1>Rotonde</h1>

    </div>
  `),

  render: function () {
    this.$el.html(this.template())
    return this
  }
})
