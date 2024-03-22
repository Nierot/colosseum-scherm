const AboutView = Backbone.View.extend({
  el: '#container',
  initialize: function () {
    this.render()
  },
  template: _.template(/*html*/`
    <div id="view--about">
      <h1>Over deze applicatie</h1>
      <hr />  
      <p>
        Epische shitpost voor het Colosseum
      </p>

      <div>Huidige versie: 1.0.0</div>
      <div>Laatste update: 2024-03-22</div>
      <a href="https://github.com/Nierot/rotonde">GitHub link</a>


    `),
  render: function () {
    this.$el.html(this.template())
    return this
  }
})