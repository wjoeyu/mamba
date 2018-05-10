class Team < ApplicationRecord

  validates :team_name, presence: true

  has_many :memberships,
    class_name: "Membership",
    foreign_key: :team_id,
    primary_key: :id

  has_many :team_members,
    through: :memberships,
    source: :team_member

end
