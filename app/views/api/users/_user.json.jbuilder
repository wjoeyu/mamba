json.extract! user, :id, :name, :email
json.taskId do
  json.array! user.tasks.map(&:id)
end
