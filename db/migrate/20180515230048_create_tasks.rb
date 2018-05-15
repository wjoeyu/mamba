class CreateTasks < ActiveRecord::Migration[5.1]
  def change
    create_table :tasks do |t|
      t.string   :task_name
      t.text     :description
      t.datetime :due_date
      t.boolean  :completed, null: false
      t.integer  :assignee_id
      t.integer  :team_id, null: false

      t.timestamps
    end
    add_index :tasks, :team_id, unique: true
    add_index :tasks, :assignee_id, unique: true
  end
end
