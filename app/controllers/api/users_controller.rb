class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def get_current_user_teams
    @user = current_user
    render "api/users/get_current_teams"

  private

  def user_params
    params.require(:user).permit(:email, :name, :password)
  end
end
