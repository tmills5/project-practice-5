Rails.application.routes.draw do
  resources :breweries, only: [:show, :index]
  # post '/search_breweries', to: 'breweries#search_breweries'
  resources :comments
  
  resources :users

  resources :breweries, only: [:show] do
    resources :comments, only: [:show, :index] do 
  end
end
  

#logging in and logging out
  post '/login', to: "sessions#login"
  delete '/logout', to: 'sessions#destroy'

  get '/signup', to: 'users#create'

  # authenticate user initially
  get '/authenticated_user', to: 'users#show'







  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
