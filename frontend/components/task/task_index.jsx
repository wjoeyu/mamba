import React from "react";
import { Link, withRouter } from 'react-router-dom';

export class TaskIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task_name: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount () {
    this.props.fetchTasks();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const task = Object.assign({}, this.state);
    this.props.updateReduxTask(task);
    // this.props.updateTask(task);
  }

  render() {
    const { tasks } = this.props;
      const taskIndexItem tasks.map(task =>
        // debugger
        // `/team/:teamId/users/:userId/tasks/${task.id}``
        <Link to=>
          <input type="text"
            value={this.state.task_name}
            onChange= "this.update('task_name'); this.handleSubmit"
            className="task-index-row"
            placeholder="Add a task name"
            />
        </Link>
    return (
      <div className="task-index">

      </div>
    );
  }

}

export default withRouter(TaskIndex);
