class Api::TasksController < ApplicationController

  before_action :require_logged_in

  def index
    @tasks = Team.find(task_params[:team_id]).tasks
    render 'api/tasks/index'
  end

  def create
    @task = Task.new(task_params)
    if @task.save
      render "api/tasks/show"
    else
      render json: @task.errors.full_messages, status: 422
    end
  end

  def update
    @task = Task.find(params[:id])
    if @task.update(task_params)
     render 'api/tasks/show'
    else
     render json: @task.errors.full_messages, status: 422
    end
  end


  def show
    @task = Task.find(params[:id])
    render 'api/tasks/show'
  end

  def destroy
    task = Task.find(params[:id])
    task.destroy!
  end

  private

  def task_params
    params.require(:task).permit(
      :task_name,
      :description,
      :due_date,
      :completed,
      :assignee_id,
      :team_id
    )
  end
end
