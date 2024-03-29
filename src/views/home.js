var app = app || {}

const HomeView = Backbone.View.extend({
  el: '#container',

  events: {
    'click': 'click'
  },

  initialize: function () {
    this.collection = app.Collections.Home
    this.listenTo(this.collection, 'all', function (event) {
      if (event === 'sync' || event === 'change') {
        this.render()
      }
    })

    this.collection.fetch()

    console.log('HomeView::initialize', this.collection)

    this.render()
  },

  /**
    Hier een carousel met de volgende onderdelen:
      Het huidige weer groot (buienradar widget)
      Een quote (alleen als geen .safemode is)
      Een mooi plaatje van IBS
      De opkomende activiteiten
      Het huidig spelende nummer (alleen als het een nieuwe is) (weet nog niet of deze erin komt)


    Als je op het weer klikt dan laat hij de buienradar widget voor een minuut zien
    Als je op het nummer klikt laat hij de album cover zien

    Het weer:
      Mooi icoontje van het weer
      Temperatuur
      Gevoelstemperatuur
      Weertype
      Kans op regen
      Luchtvochtigheid?
   */

  template: _.template(/*html*/`
    <div id="view--home">

      <div id="view--home-title">
        <h1>Welkom in het Colosseum</h1>
      </div>

      <div id="view--home-picture"><img src="https://picsum.photos/1700/1080" alt="Random image from picsum.photos" /></div>

      <div id="view--home-bottom">
        <div id="view--home-weather">
          <div id="view--home-weather-icon">
          <svg class="bi" width="48" height="48" role="img" aria-label="Muziek">
            <use xlink:href="#ph--cloud-rain" />
          </svg>
          </div>
          <div id="view--home-weather-info">
            <div>
              <p>5°C</p>
              <p>Voelt als 2°C</p>
            </div>
            <div>
              <p>Regen</p>
              <p>82% kans op regen</p>
            </div>
          </div>
        </div>
        <div id="view--home-song">
          <div id="view--home-song-info">
            <span>Back from the Dead</span>
            <span>OneRepublic</span>
          </div>
          <div id="view--home-song-cover">
            <img src="https://i.scdn.co/image/ab67616d0000b2739e2f95ae77cf436017ada9cb" alt="Album cover" />
          </div>
        </div>
      </div>
    </div>
  `),

  render: function () {
    console.log(this.collection)

    this.$el.html(this.template())
    return this
  }
})
