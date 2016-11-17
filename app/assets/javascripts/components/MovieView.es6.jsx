class MovieView extends React.Component {
  render() {
    let data = this.props.data;
    let url = "http://www.imdb.com/title/" + data.imdbID
    return (
      <li className="movie">
        <img className="poster" src={data.poster} />
        <div className="movie-details">
          <p>
            <span className="title">{data.title}</span>
            <a href={url}>More info</a>
          </p>
        </div>
      </li>
    )
  }
}
