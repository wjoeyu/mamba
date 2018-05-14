class Api::TeamsController < ApplicationController

  def create
    @team = Team.new(team_params)

    if @team.save
      membership = Membership.new({team_member_id: current_user.id, team_id: @team.id})
      membership.save!
      render "api/teams/show"
    else
      render json: @team.errors.full_messages
    end
  end

  def index
    @teams = current_user.teams
     render "api/teams/index"
  end

  def show
    @team = current_user.teams.find(params[:id])
    render "api/teams/show"

  end

  def get_team_members
    @members = Team.find(params[:teamId]).members
    render "api/teams/team_members"
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
