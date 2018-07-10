class Task < ApplicationRecord
  validates :team_id, presence: true

  belongs_to :team,
    class_name: "Team",
    foreign_key: :team_id,
    primary_key: :id

  # belongs_to :assignee,
  #   class_name: "User",
  #   foreign_key: :assignee_id,
  #   primary_key: :id

  belongs_to :team,
    class_name: "Team",
    foreign_key: :team_id,
    primary_key: :id

end
