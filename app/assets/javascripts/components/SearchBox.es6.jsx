class SearchBox extends React.Component {
  handleSearch(event){
    event.preventDefault();
    // debugger;
    let query = this.refs.movie_title.value;
    let url = '/static/search/' + query
    $.ajax({
      url: url,
      method: 'GET'
    }).done(function(response) {

      console.log(response);
      this.props.onUpdate(response)
    }.bind(this))
  }
  render() {
    return (
      <form id="search_box" onSubmit={this.handleSearch.bind(this)}>
        <input type="text" ref="movie_title" name="title" placeholder="movie title" />
        <input type="submit" value="search movie" />
      </form>
    )
  }
}
