import React from "react";
import { Link, withRouter } from 'react-router-dom';
import Textarea from "react-textarea-autosize";

class TaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.completeTask = this.completeTask.bind(this);
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

  completeTask(taskId, completedStatus) {
    this.props.updateTask({id: [taskId], completed: !(completedStatus)});
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
    const task = this.props.tasks[this.props.match.params.taskId];
    return (
      <div className='task-form'>
        <div className="task-form-header">
          <div className="completion-button">
            <svg className="check-mark" viewBox="0 0 32 32">
              <polygon points="27.672,4.786 10.901,21.557 4.328,14.984 1.5,17.812 10.901,27.214 30.5,7.615 "/>
            </svg>
            Mark Complete</div>
          <div className="delete-button"></div>
          <div className="task-form-close"
            onClick={()=> this.props.history.push(
              `/team/${this.props.match.params.teamId}/users/${this.props.match.params.userId}`
            )}>&times;</div>
        </div>
      <form className="task-form-content">
        <input type="text"
          className="task-form-name"
          placeholder="Write a task name"
        />
      <div className="form-spacer">
        <svg className ="desc-icon" viewBox="0 0 32 32">
          <path d="M26,8H2V6h24V8z M22,12H2v2h20V12z M28,18H2v2h26V18z M24,24H2v2h22V24z"></path>
        </svg>
        <Textarea
          className="task-form-description"
          placeholder="Description"
          />
      </div>
      </form>
    </div>
    );
  }
}

export default withRouter(TaskForm);
