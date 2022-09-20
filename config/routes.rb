Rails.application.routes.draw do
  resources :breweries

  # post '/search_breweries', to: 'breweries#search_breweries'


  resources :users

  resources :posts do
    resources :comments
  end

  # resources :posts

  resources :comments
  
  
  



  

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
