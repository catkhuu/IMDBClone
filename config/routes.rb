Rails.application.routes.draw do
  get 'static/search/:title', to: 'static#search'
  root 'static#index'
end
