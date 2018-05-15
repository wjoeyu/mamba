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

User.create({email: "demo@mamba.com", name: "Demo Johnson", password: "demodemo"})
Team.create({team_name: "March 2018 cohort"})
Membership.create(team_member_id: User.last.id, team_id: Team.last.id)
Team.create({team_name: "Liam and Joey's Secret Fullstack Pair-Programming"})
Membership.create(team_member_id: User.last.id, team_id: Team.last.id)
User.create({email: "wjoeyu@gmail.com", name: "Joey", password: "starwars"})
User.create({email: "liam@mamba.com", name: "Liam Zhang", password: "123456"})
Membership.create(team_member_id: User.find_by(email: "wjoeyu@gmail.com").id, team_id: Team.find_by(team_name: "Liam and Joey's Secret Fullstack Pair-Programming").id)
Membership.create(team_member_id: User.find_by(email: "liam@mamba.com").id, team_id: Team.find_by(team_name: "Liam and Joey's Secret Fullstack Pair-Programming").id)
