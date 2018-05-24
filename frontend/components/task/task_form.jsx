import React from "react";
import { Link, withRouter } from 'react-router-dom';
import Textarea from "react-textarea-autosize";

class TaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.completeTask = this.completeTask.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.timeout = null;
  }

  completeTask(completedStatus) {
    this.props.updateTask({id: [this.props.match.params.taskId], completed: !(completedStatus)});
  }

  removeTask() {
    this.props.delTask(this.props.match.params.taskId).then(this.props.history.push(
      `/team/${this.props.match.params.teamId}/users/${this.props.match.params.userId}`));
  }

  update(field) {
    return (e) => {
      this.props.updateReduxTask({id: [this.props.match.params.taskId], [field]: e.currentTarget.value});
      const toBePersisted = e.currentTarget.value;
      if (this.timeout) {
        clearTimeout(this.timeout);
      }
        this.timeout = setTimeout(()=> {
          this.props.updateTask({id: [this.props.match.params.taskId], [field]: toBePersisted});
        }, 200);
      };
  }

  render() {
    const { task } = this.props;
    return (
      <div className='task-form'>
        <div className="task-form-header">
          <div onClick={()=>this.completeTask(task.completed)} className={(task && task.completed)? "completed-button" : "completion-button"}>
            <svg className={(task && task.completed)? "completed-check" : "check-mark"}
              viewBox="0 0 32 32">
              <polygon points="27.672,4.786 10.901,21.557 4.328,14.984 1.5,17.812 10.901,27.214 30.5,7.615 "/>
            </svg>
            {(task && task.completed)? "Completed" : "Mark Complete"}</div>
          <div className="deletion-button" onClick={()=>this.removeTask()}>Delete</div>
          <div className="task-form-close"
            onClick={()=> this.props.history.push(
              `/team/${this.props.match.params.teamId}/users/${this.props.match.params.userId}`
            )}>&times;</div>
        </div>
      <form className="task-form-content">
        <input type="text"
          value={task ? task.task_name : ""}
          onChange={this.update('task_name')}
          className="task-form-name"
          placeholder="Write a task name"
        />
      <div className="form-spacer">
        <svg className ="desc-icon" viewBox="0 0 32 32">
          <path d="M26,8H2V6h24V8z M22,12H2v2h20V12z M28,18H2v2h26V18z M24,24H2v2h22V24z"></path>
        </svg>
        <Textarea
          value={task? task.description : ""}
          onChange={this.update('description')}
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
