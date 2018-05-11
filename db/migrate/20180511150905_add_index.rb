class AddIndex < ActiveRecord::Migration[5.1]
  def change
    remove_index :memberships, :team_member_id
    remove_index :memberships, :team_id
    add_index :memberships, [:team_member_id, :team_id], unique: true
  end
end
