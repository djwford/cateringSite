CateringSite::Application.routes.draw do
  get "static_pages/home"

  get "static_pages/about"

  get "static_pages/contact"

  get "static_pages/menu"

  root :to => "home#index"
  devise_for :users
  
end
