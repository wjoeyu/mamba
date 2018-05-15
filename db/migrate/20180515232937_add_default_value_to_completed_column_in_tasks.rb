class AddDefaultValueToCompletedColumnInTasks < ActiveRecord::Migration[5.1]
  def change
    change_column :tasks, :completed, :boolean, default: true
  end
end
