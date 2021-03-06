class Api::UsersController < ApplicationController

  before_action :require_logged_in, except: [:create]

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def index
    current_team_members = params[:user][:current_team]
    @users = User.where.not({id: current_team_members})
    render "api/users/index"
  end

  private

  def user_params
    params.require(:user).permit(:email, :name, :password)
  end
end
