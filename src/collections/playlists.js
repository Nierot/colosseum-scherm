// https://github.com/tastejs/todomvc/blob/master/examples/backbone/src/collections/todos.js

var app = app || {};
app.Collections = app.Collections || {};

(function () {
  const Playlists = Backbone.Collection.extend({
    model: app.Models.Playlist,
    url: 'playlist',
    parse: function (data) {
      return data.Data
    },

    play(playlistId) {
      // Start playing the playlist
      console.log('Playlists::play', playlistId)
      // Get the playlist
      const playlist = this.get(playlistId)

      // Set the old playlist as not currently playing
      const oldPlaylist = this.where({ IsCurrentlyPlaying: true })

      if (oldPlaylist.length > 0) {
        _.each(oldPlaylist, function (playlist) {
          playlist.set('IsCurrentlyPlaying', false)
          playlist.save()
        })
      }

      // Set the playlist as the currently playing playlist
      playlist.set('IsCurrentlyPlaying', true)
      const d = new Date()

      let lp = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`

      playlist.set('LastPlayed', lp)

      // Persist on the server
      playlist.save()

      $.toast({
        heading: playlist.get('Name'),
        text: 'Wordt in de queue gegooid.',
        icon: 'info',
        position: 'top-right'
      })
    }
  })

  app.Collections.Playlists = new Playlists()
})()