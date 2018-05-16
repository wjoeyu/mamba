class RemoveUniquenessOnTeamIndexInTasks < ActiveRecord::Migration[5.1]
  def change
    remove_index :tasks, :team_id
    add_index :tasks, :team_id
  end
end
