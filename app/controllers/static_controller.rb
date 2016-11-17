  require 'unirest'
class StaticController < ApplicationController
  include Queries

  def index
  end

  def search
    movie_results = user_search(params[:title])
    movies = movie_results.map { |movie| Movie.new(movie) }
    movies = movies.each { |movie| movie.poster? }.to_json
    render json: movies
  end
end
