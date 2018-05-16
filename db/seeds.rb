# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Team.destroy_all
Membership.destroy_all
Task.destroy_all

User.create({email: "demo@mamba.com", name: "Demo Johnson", password: "demodemo"})
Team.create({team_name: "March 2018 cohort"})
Membership.create(team_member_id: User.last.id, team_id: Team.last.id)
fullstack = Team.create({team_name: "Fullstack Team"})
Membership.create(team_member_id: User.last.id, team_id: Team.last.id)
Team.create({team_name: "Team 3"})
Team.create({team_name: "Team 4"})
Team.create({team_name: "Liam and Joey's Secret Fullstack Pair-Programming"})
joey = User.create({email: "wjoeyu@gmail.com", name: "Joey", password: "starwars"})
User.create({email: "liam@mamba.com", name: "Liam Zhang", password: "123456"})
User.create({email: "jack@mamba.com", name: "Jack Ipsum", password: "123456"})
User.create({email: "demo2@mamba.com", name: "Darius Lorem", password: "123456"})

Membership.create(team_member_id: User.find_by(email: "wjoeyu@gmail.com").id, team_id: Team.find_by(team_name: "March 2018 cohort").id)
Membership.create(team_member_id: User.find_by(email: "jack@mamba.com").id, team_id: Team.find_by(team_name: "March 2018 cohort").id)
Membership.create(team_member_id: User.find_by(email: "demo2@mamba.com").id, team_id: Team.find_by(team_name: "March 2018 cohort").id)
Membership.create(team_member_id: User.find_by(email: "wjoeyu@gmail.com").id, team_id: Team.find_by(team_name: "Liam and Joey's Secret Fullstack Pair-Programming").id)
Membership.create(team_member_id: User.find_by(email: "liam@mamba.com").id, team_id: Team.find_by(team_name: "Liam and Joey's Secret Fullstack Pair-Programming").id)

Task.create(
  {
    task_name: "Finish frontend for tasks",
    description: "I don't know what I'm doing. AAAAAAAAHHHHH.",
    due_date: '2018-05-18',
    completed: false,
    assignee_id: joey.id,
    team_id: fullstack.id
  }
)

Task.create(
  {
    task_name: "Finish task containers",
    description: "",
    due_date: '2018-05-17',
    completed: false,
    assignee_id: User.find_by(name: "Jack Ipsum").id,
    team_id: Team.find_by(team_name: "Fullstack Team").id
  }
)

Task.create(
  {
    task_name: "Go to the Australian",
    description: "If this is not done, I'm passing out in there, but I'll get it done.",
    due_date: '2018-05-18',
    completed: false,
    assignee_id: User.find_by(name: "Joey").id,
    team_id: Team.find_by(team_name: "Fullstack Team").id
  }
)

Task.create(
  {
    task_name: "Finish frontend auth",
    description: "Spend way too much time on this, and not have time for anything else.",
    due_date: '2018-05-09',
    completed: true,
    assignee_id: User.find_by(name: "Joey").id,
    team_id: Team.find_by(team_name: "Fullstack Team").id
  }
)

Task.create(
  {
    task_name: "Finish tasks backend",
    description: "I don't know what I'm doing. AAAAAAAAHHHHH.",
    due_date: '2018-05-16',
    completed: true,
    assignee_id: User.find_by(name: "Demo Johnson").id,
    team_id: Team.find_by(team_name: "Fullstack Team").id
  }
)

Task.create(
  {
    task_name: "Present Fullstack",
    description: "...is anything on the screen? Round of applause please! Standing Ovation!",
    due_date: '2018-05-18',
    completed: false,
    assignee_id: User.find_by(name: "Joey").id,
    team_id: Team.find_by(team_name: "Fullstack Team").id
  }
)

Task.create(
  {
    task_name: "Help Joey",
    description: "Put this homie on my back.",
    due_date: '2018-05-18',
    completed: false,
    assignee_id: User.find_by(name: "Liam Zhang").id,
    team_id: Team.find_by(team_name: "Fullstack Team").id
  }
)
