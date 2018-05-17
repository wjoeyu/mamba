Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :teams, only: [:create, :update, :index, :show, :destroy]
    resources :tasks, only: [:create, :update, :index, :show, :destroy]
    get('teams/:id/get_members', {to: 'teams#get_members'})
  end

  root "static_pages#root"
end
