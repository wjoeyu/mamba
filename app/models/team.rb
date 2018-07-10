class Team < ApplicationRecord

  validates_presence_of :team_name, message: " is required."

  has_many :memberships,
    class_name: "Membership",
    foreign_key: :team_id,
    primary_key: :id

  has_many :members,
    through: :memberships,
    source: :team_members

  has_many :tasks,
    class_name: "Task",
    foreign_key: :team_id,
    primary_key: :id


end
