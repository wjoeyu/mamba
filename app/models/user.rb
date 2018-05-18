class User < ApplicationRecord

  attr_reader :password

  validates :email, :password_digest, :session_token, presence: true
  validates :email, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  after_initialize :ensure_session_token
  after_create :create_and_join_team

  has_many :memberships,
    class_name: "Membership",
    foreign_key: :team_member_id,
    primary_key: :id

  has_many :teams,
    through: :memberships,
    source: :teams

  has_many :tasks,
    class_name: "Task",
    foreign_key: :assignee_id,
    primary_key: :id

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    user && user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  def create_and_join_team
    team = Team.new({team_name: "#{self.name}'s Team"})
    team.save!
    membership = Membership.new({team_member_id: self.id, team_id: team.id})
    membership.save!
  end

  private

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64
  end

end
