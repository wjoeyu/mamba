class CreateMemberships < ActiveRecord::Migration[5.1]
  def change
    create_table :memberships do |t|
      t.integer :team_member_id, null: false
      t.integer :team_id, null: false

      t.timestamps
    end
    add_index :memberships, :team_member_id
    add_index :memberships, :team_id
  end
end
