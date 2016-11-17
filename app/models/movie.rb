class Movie
  extend ActiveModel::Naming
  attr_reader :title, :year, :imdbID, :poster


  def initialize(args={})
    @title = args.fetch("Title", "")
    @year = args.fetch("Year", "Unknown")
    @imdbID = args.fetch("imdbID", "Uknown")
    @poster = args.fetch("Poster")
  end

  def poster?
    set_poster unless poster != "N/A"
  end

  private
  attr_writer :poster

  def set_poster
    self.poster = "https://cdn.amctheatres.com/Media/Default/Images/noposter.jpg"
  end
end
