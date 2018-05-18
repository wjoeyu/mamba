import React from "react";
import { Link, withRouter } from 'react-router-dom';

class TaskForm extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    if (this.props.match.params.taskId) {
      this.props.fetchTask(this.props.match.params.taskId);
    }
    this.props.fetchTeamMembers(this.props.match.params.teamId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.taskId !== nextProps.match.params.taskId) {
        this.props.fetchTask(nextProps.match.params.taskId);
    }
  }

  // update(taskId,field) {
  //   return (e) => {
  //     this.props.updateReduxTask({id: [taskId], [field]: e.currentTarget.value});
  //     const toBePersisted = e.currentTarget.value;
  //     if (this.timeout) {
  //       clearTimeout(this.timeout);
  //     }
  //       this.timeout = setTimeout(()=> {
  //         this.props.updateTask({id: [taskId], [field]: toBePersisted});
  //       }, 200);
  //     };
  // }

  render() {
    return (
      <div className='task-form'>
        <div className="task-form-header">Header
          <div className="completion-button"></div>
          <div className="delete-button"></div>
          <div className="task-form-close"
            onClick={()=> this.props.history.push(
              `/team/${this.props.match.params.teamId}/users/${this.props.match.params.userId}`
            )}>&times;</div>
        </div>
      <form className="task-form-content">
        <input type="text"
          className="task-form-title"
          placeholder="Write a task name"
        />
        <input type="text"
         className="task-form-description"
         placeholder="Description"
        />
      </form>
    </div>
    );
  }
}

export default withRouter(TaskForm);
