Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :teams, only: [:create, :update, :index, :show, :destroy]
    # get('users/current_user_teams', {to: 'users#get_teams'})
    # get('teams/:teamId/team_members', {to: 'teams#get_team_members'})
  end

  root "static_pages#root"
end
