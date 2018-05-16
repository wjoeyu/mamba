class Api::TeamsController < ApplicationController

  before_action :require_logged_in


  def create
    @team = Team.new(team_params)
    # debugger
    if @team.save
      membership = Membership.new({team_member_id: current_user.id, team_id: @team.id})
      if membership.save
        render "api/teams/show"
      end
    else
      render json: @team.errors.full_messages, status: 422
    end
  end

  def index
    @teams = current_user.teams
     render "api/teams/index"
  end

  def show
    @team = current_user.teams.find(params[:id])
    render "api/teams/members"

  end

  def destroy
    @team = current_user.teams.find(params[:id])
    # if current_user.teams.length > 1
      membership = Membership.find_by(
        {team_id: @team.id, team_member_id: current_user.id }
      )
      membership.destroy!
      @redirect_team = current_user.teams[0]
      render "api/teams/destroy"
    # else
    #   render json: @team
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
