class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: []
    }
  }

  // componentDidMount() {
  //   $.ajax({
  //     url: '/static/search/christmas',
  //     method: 'GET'
  //   }).done(function(response) {
  //     this.setState({movies: response})
  //   }.bind(this))
  // }

  updateSearchResultView(searchResults) {
    // debugger;
    console.log(this.state);
    this.setState({
      movies: searchResults
    });
  }
  render() {
    return (
      <div className="app-container">
        <h1>Hello from IMDB Clone</h1>
        <SearchBox onUpdate={this.updateSearchResultView.bind(this)}/>
        <SearchResultView movies={this.state.movies}/>
      </div>
    )
  }
}
