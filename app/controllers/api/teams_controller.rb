class Api::TeamsController < ApplicationController

  def create
    @team = Team.new(team_params)
    # debugger
    if @team.save
      membership = Membership.new({team_member_id: current_user.id, team_id: @team.id})
      if membership.save
        render "api/teams/newnew"
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
    render "api/teams/show"

  end

  def destroy
    @team = current_user.teams.find(params[:id])
    @user = current_user
    membership = Membership.find_by(
      {team_id: @team.id, team_member_id: @user.id }
    )
    membership.destroy!
    render "api/teams/destroy"
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
