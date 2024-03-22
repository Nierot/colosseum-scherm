var app = app || {}

const MusicView = Backbone.View.extend({
  el: '#container',

  events: {
    'click button': 'play',
    'click a.page-link': 'pagination'
  },

  initialize: function () {
    // Rerender the view when the collection changes
    this.listenTo(this.collection, 'all', function (event) {
      if (event === 'sync' || event === 'change') {
        this.render()
      }
    })

    console.log('MusicView::initialize', this.collection)

    // Get page
    this.page = Number(localStorage.getItem('MusicView::page') || "0")

    // Fetch playlists from the API and then render the view
    this.collection.fetch()

    this.render()
  },

  pagination: function (event) {
    const page = parseInt(event.target.getAttribute('data-page'))
    this.setPage(page)
    this.render()
  },

  setPage: function (page) {
    // Set the page and save it to local storage
    this.page = Number(page)
    localStorage.setItem('MusicView::page', page)
  },

  play: function (event) {
    // Get data-id
    const playlistId = event.target.getAttribute('data-id')

    // Set the playlist as the currently playing playlist
    this.collection.play(playlistId)
  },

  template: _.template(/*html*/`
    <div id="view--music">
      <div>
        <h1>Afspeellijsten</h1>
        <hr />
        <div>Er zijn <%= models.length %> afspeellijsten beschikbaar.</div>
      </div>

      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Naam</th>
            <th scope="col">Laatst afgespeeld</th>
            <th scope="col">Acties</th>
          </tr>
        </thead>
        <tbody>
          <% _.each(models.slice(this.page * 8, (this.page + 1) * 8), function (playlist) { %>
            <tr class="<%= playlist.get('IsCurrentlyPlaying') ? 'table-success' : '' %>">
              <td><%= playlist.get('Name') %></td>
              <td class="col-2">
                <%= Utils.date(playlist.get('LastPlayed')) %>
                </td>
              <td class="col-2">
                <button data-id="<%= playlist.get('ID') %>" class="btn btn-primary">Afspelen</button>
              </td>
            </tr>
          <% }) %>
        </tbody>
      </table>

      <!-- Padding -->
      <div></div>

      <div class="navigation-bar">
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item"><a
              data-page="<%= this.page - 1 %>"
              class="page-link <%= this.page == 0 ? 'disabled' : '' %>"
              href="javascript:void(0);">Vorige</a></li>
            <li class="page-item"><a
              data-page="<%= this.page %>"
              class="page-link"
              href="javascript:void(0);"><%= Number(this.page) + 1 %></a></li>
            <li class="page-item"><a
              data-page="<%= this.page + 1 %>"
              class="page-link <%= (this.page + 1) === this.maxPage ? 'disabled' : '' %>"
              href="javascript:void(0);">Volgende</a></li>
          </ul>
        </nav>
      </div>
    </div>
  `),

  render: function () {
    if (app.Playlists.models.length === 0) {
      return this.$el.html(`
        <div class="spinner-border text-primary" role="status"></div>`)
    }

    this.maxPage = Math.ceil(app.Playlists.models.length / 8)

    this.$el.html(this.template({
      models: app.Playlists.models,
      page: 0
    }))

    return this
  }
})