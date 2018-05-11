class Api::TeamsController < ApplicationController

  def create
    @team = Team.new(team_params)

    if @team.save
      render "api/teams/show"
    else
      render json: @team.errors.full_messages
    end
  end

  def index
    @teams = Team.all
     render "api/teams/index"
  end

  def update
    @team = Team.find(params[:id])

    if @team.update(team_params)
      render "api/teams/show"
    else
      render json: @team.errors.full_messages, status: 422
    end
  end

  private

  def team_params
    params.require(:team).permit(:team_name)
  end
end
