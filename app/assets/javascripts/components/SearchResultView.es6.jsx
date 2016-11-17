class SearchResultView extends React.Component {
  render() {
    debugger;
    return(
      <div className="results-container">Hello from Search Review View
      <h1>Your Search Results:</h1>
      <ul id="results-list">{
        this.props.movies.map((movie, idx) => {
          return <MovieView data={movie} key={idx} />
        })
      }
      </ul>
      </div>
    )
  }
}
