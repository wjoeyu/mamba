@teams.each do |team|
  json.set! team.id do
    json.partial! "api/users/team", team: team
  end
end
