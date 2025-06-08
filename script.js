function searchMovies() {
  var input = document.getElementById('searchBar');
  var filter = input.value.toUpperCase();
  var tiles = document.getElementsByClassName('movie-tile');
  for (var i = 0; i < tiles.length; i++) {
    var title = tiles[i].getAttribute('data-title').toUpperCase();
    // Show tile if it matches the search, hide if not
    if (title.indexOf(filter) > -1) {
      tiles[i].style.display = "";
    } else {
      tiles[i].style.display = "none";
    }
  }
}
