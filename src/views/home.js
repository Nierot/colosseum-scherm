const HomeView = Backbone.View.extend({
  el: '#container',
  initialize: function () {
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
            Kutweer icoontje
          </div>
          <div id="view--home-weather-info">
            <span>5°C</span>
            <span>Voelt als 2°C</span>
            <span>Regen</span>
            <span>82% kans op regen</span>
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
    this.$el.html(this.template())
    return this
  }
})
