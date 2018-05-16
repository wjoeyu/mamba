class Removeuniqueonuserindexontasks < ActiveRecord::Migration[5.1]
  def change
    remove_index :tasks, :assignee_id
    add_index :tasks, :assignee_id
  end
end
