module Queries
  def user_search(title)
    url = 'http://www.omdbapi.com/?'
    headers = {}
    params = { s: title, r: 'json', page: '5' }
    response = Unirest.get(url, headers: headers, parameters: params)
    response.body['Search']
  end
end
