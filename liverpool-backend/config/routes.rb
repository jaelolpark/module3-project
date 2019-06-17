Rails.application.routes.draw do
  get 'likes/index'
  get 'posts/index'
  get 'comments/index'
  get 'users/index'

  root 'users#home', as: 'home'
  resources :posts
  resources :comments
  resources :users
  resources :posts, only: [:index, :show]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
