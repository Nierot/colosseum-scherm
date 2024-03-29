const API_ROOT = 'http://192.168.178.105:8000/'

/**
 * Override Backbone.sync to use the correct API URL for all requests
 */
const oldSync = Backbone.sync
Backbone.sync = function (method, model, options) {
  options = _.extend(options, {
    url: API_ROOT + _.result(model, 'url'),
    timeout: 5000
  })

  // console.log('Syncing', method, model, options)

  oldSync(method, model, options)
}

$(document).on('ajaxError', function (event, xhr, settings, thrownError) {
  console.log('ajaxError', event, xhr, settings, thrownError)

  const resJson = xhr.responseJSON

  let msg

  if (resJson) {
    msg = resJson.Message
  } else if (xhr.statusText === 'timeout') {
    msg = 'Kan niet verbinden met externe server.'
  } else {
    msg = 'Onbekende fout: ' + xhr.statusText
  }

  $.toast({
    heading: 'Fout bij het ophalen van gegevens',
    text: msg,
    icon: 'warning',
    position: 'top-right'
  })
})