class Membership < ApplicationRecord

  validates :team_member_id, :team_id, presence: true

  belongs_to :team_members,
    class_name: "User",
    foreign_key: :team_member_id,
    primary_key: :id

  belongs_to :teams,
    class_name: "Team",
    foreign_key: :team_id,
    primary_key: :id

end
