json.partial! "api/teams/team", team: @team
json.memberId do
  json.array! @team.members.map(&:id)
end
