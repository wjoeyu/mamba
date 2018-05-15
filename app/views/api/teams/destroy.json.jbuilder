json.team do
  json.extract! @team, :id, :team_name
end

json.redirect_team do
  json.extract! @redirect_team, :id, :team_name
end
