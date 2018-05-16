@teams.each do |team|
  json.set! team.id do
    json.extract! team, :id, :team_name
    json.memberId do
      json.array! team.members.map(&:id)
    end
    json.taskId do
      json.array! team.tasks.map(&:id)
    end
  end
end
