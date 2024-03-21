const API_ROOT = 'http://localhost:3000/'

/**
 * Override Backbone.sync to use the correct API URL for all requests
 */
const oldSync = Backbone.sync
Backbone.sync = function (method, model, options) {
  options = _.extend(options, {
    url: API_ROOT + _.result(model, 'url')
  })
  oldSync(method, model, options)
}

const Playlists = Backbone.Collection.extend({

}) 